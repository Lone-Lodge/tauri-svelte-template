import type { Meta, StoryObj } from '@storybook/svelte'
import Button from './Button.svelte'

const meta = {
  title: 'UI/Button',
  component: Button
} satisfies Meta<Button>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'Click me' } as any }
export const Outline: Story = { args: { variant: 'outline', children: 'Outline' } as any }
