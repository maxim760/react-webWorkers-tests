import { renderHook, act } from "@testing-library/react-hooks";
import { useWebWorker } from "../hooks/useWebWorker";
import { render, screen } from "@testing-library/react";
import { workerHandler } from "../helpers/worker/workerHandler";

const fn = jest.fn((x) => x + 1);

global.URL.createObjectURL = jest.fn();



class Worker {
  constructor() {
    this.url = URL.createObjectURL(
      new Blob([`(${workerHandler})(${fn})`], {
        type: "application/javascript",
      })
    );
    this.onmessage = () => {};
    this.terminate = () => {};
    this.onerror = () => {};
  }

  onmessage(msg) {
    this.terminate();
  }
  onerror(e) {
    this.terminate();
  }

  postMessage(value) {
    if (value) {
      this.onmessage({ event: { data: value }})
    } else {
      this.onerror({error: {message: "ошибка"}})
    }
  }
}
window.Worker = Worker;

describe("web worker", () => {
  test("check initial data", () => {
    const { result } = renderHook(() => useWebWorker(fn));
    expect(result.current.error).toBeNull();
    expect(result.current.result).toBeNull();
    expect(result.current.loading).toBeFalse();
    expect(result.current.run).toBeFunction();
  });
  test("test run", () => {
    const { result } = renderHook(() => useWebWorker(fn));
    act(() => {
      result.current.run(10);
    });
  });
  test("test run Error", () => {
    const { result } = renderHook(() => useWebWorker(fn));
    act(() => {
      result.current.run();
    });
    
  });
});
