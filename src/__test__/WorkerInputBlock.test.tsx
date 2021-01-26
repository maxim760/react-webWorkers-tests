import React from 'react'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { WorkerInputBlock } from "../components/WorkerInputBlock"

describe('test input block', () => {
  test('input block exist in page', () => {
    const useWorker = jest.fn(() => ({
      run: jest.fn(() => 111),
      loading: false,
      error: null,
      result: null
    }))
    render(<WorkerInputBlock text={"Рандомный текст"} useWorker={useWorker} />)
    const workerInputPage = screen.getByTestId("worker-input-block")
    expect(workerInputPage).toBeInTheDocument()
    expect(screen.getByText("Рандомный текст")).toBeInTheDocument()
  })
  test('block with result not  exist in page if laoding false and error and value - null, is initial state', () => {
    const useWorker = jest.fn(() => ({
      run: jest.fn(() => 111),
      loading: false,
      error: null,
      result: null
    }))
    render(<WorkerInputBlock text={"Рандомный текст"} useWorker={useWorker} />)
    expect(screen.queryByRole("result")).not.toBeInTheDocument()
  })
  test('block with result exist in page if laoding === true', () => {
    const useWorker = jest.fn(() => ({
      run: jest.fn(() => 111),
      loading: true,
      error: null,
      result: null
    }))
    render(<WorkerInputBlock text={"Рандомный текст"} useWorker={useWorker} />)

    const result = screen.getByRole("result")
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent(/подождите/i)
  })
  test('block with result exist in page if error is exist', () => {
    const useWorker = jest.fn(() => ({
      run: jest.fn(() => 111),
      loading: false,
      error: "ошибка",
      result: null
    }))
    render(<WorkerInputBlock text={"Рандомный текст"} useWorker={useWorker} />)

    const result = screen.getByRole("result")
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent(/ошибка/i)
  })
  test('block with result exist in page if result is exist', () => {
    const useWorker = jest.fn(() => ({
      run: jest.fn(() => 111),
      loading: false,
      error: null,
      result: 222
    }))
    render(<WorkerInputBlock text={"Рандомный текст"} useWorker={useWorker} />)

    const result = screen.getByRole("result")
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent(/222/i)
  })
  test('call function after click on button', () => {
    const runFn = jest.fn((x) => 111)
    const useWorker = jest.fn(() => ({
      run: runFn,
      loading: false,
      error: null,
      result: null
    }))
    render(<WorkerInputBlock text={"Рандомный текст"} useWorker={useWorker} />)

    const button = screen.getByRole("button")
    const input = screen.getByPlaceholderText("Введите число...")

    userEvent.type(input, "10")
    expect(runFn).toHaveBeenCalledTimes(0)
    userEvent.click(button)
    expect(runFn).toHaveBeenCalledTimes(1)
    expect(runFn).toHaveBeenCalledWith(10)
  })
  
})
