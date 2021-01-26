import React from 'react'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { InputBlock } from "../components/InputBlock"

describe('test input block', () => {
  test('input block exist in page', () => {
    render(<InputBlock text={"Рандомный текст"} fn={x => x+1} />)
    const inputPage = screen.getByTestId("input-block")
    expect(inputPage).toBeInTheDocument()
    expect(screen.getByText("Рандомный текст")).toBeInTheDocument()
  })
  test('not write text to input', () => {
    const fn = jest.fn(x => x * 2)
    render(<InputBlock text={"Рандомный текст"} fn={fn} />)
    const input = screen.getByPlaceholderText("Введите число...")
    expect(input).toBeInTheDocument()
    userEvent.type(input, "hellow") // type = number
    expect(input).not.toHaveValue("hellow")
  })
  test(' write numbers to input', () => {
    const fn = jest.fn(x => x * 2)
    render(<InputBlock text={"Рандомный текст"} fn={fn} />)
    const input = screen.getByPlaceholderText("Введите число...")
    expect(input).toBeInTheDocument()
    userEvent.type(input, "333")
    expect(input).toHaveValue(333)
  })
  test('call function after click', () => {
    const fn = jest.fn(() => 222)
    render(<InputBlock text={"Рандомный текст"} fn={fn} />)
    const input = screen.getByPlaceholderText("Введите число...")
    const button = screen.getByRole("button")
    expect(input).toBeInTheDocument()
    userEvent.type(input, "333")
    expect(fn).toBeCalledTimes(0)
    userEvent.click(button)
    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith(333)
    expect(screen.getByRole("result")).toHaveTextContent("222")
  })
  
})
