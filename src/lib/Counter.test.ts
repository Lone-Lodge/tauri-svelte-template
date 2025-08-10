import { render, fireEvent } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import Counter from './Counter.svelte'

describe('Counter', () => {
  it('increments and decrements', async () => {
    const { getByText, container } = render(Counter)
    const inc = getByText('+')
    const dec = getByText('-')
    const output = container.querySelector('output')!
    await fireEvent.click(inc); await fireEvent.click(inc)
    expect(output.textContent).toBe('2')
    await fireEvent.click(dec)
    expect(output.textContent).toBe('1')
  })
})
