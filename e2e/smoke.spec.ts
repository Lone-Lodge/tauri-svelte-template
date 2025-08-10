import { test, expect } from '@playwright/test'

test('home renders and counter works', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Tauri + Svelte')).toBeVisible()
  const plus = page.getByRole('button', { name: '+' })
  await plus.click()
  await expect(page.locator('output')).toHaveText('1')
})
