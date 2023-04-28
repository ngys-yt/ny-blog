import type { Meta, StoryObj } from '@storybook/react';

import Icon from '@/components/parts/Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Controllable: Story = {
  args: {
    iconName: 'アイコン',
  },
};
