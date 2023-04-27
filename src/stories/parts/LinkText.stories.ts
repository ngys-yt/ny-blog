import type { Meta, StoryObj } from '@storybook/react';

import LinkText from '@/components/parts/LinkText';

const meta: Meta<typeof LinkText> = {
  component: LinkText,
};

export default meta;
type Story = StoryObj<typeof LinkText>;

export const Controllable: Story = {
  args: {
    children: 'リンクテキスト',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};
