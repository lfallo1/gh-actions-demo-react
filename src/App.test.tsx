import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('increments the counter when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByText('0')).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /increment counter/i })
    await user.click(button)
    expect(screen.getByText('1')).toBeInTheDocument()

    await user.click(button)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('displays a non-empty site name', () => {
    render(<App />)
    expect(screen.getByTestId('site-name').textContent).toBeTruthy()
  })

  it('displays a non-empty site author', () => {
    render(<App />)
    expect(screen.getByTestId('site-author').textContent).not.toBe('Author: ')
  })

  it('displays all three sections with correct titles and subtext', () => {
    render(<App />)

    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
    expect(screen.getByText('Section 3')).toBeInTheDocument()

    const subtexts = screen.getAllByText('Some subtext', {exact: false})
    expect(subtexts).toHaveLength(3)
  })
})
