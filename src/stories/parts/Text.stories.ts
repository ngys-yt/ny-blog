import type { Meta, StoryObj } from '@storybook/react';
import Text from '@/components/parts/Text';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Controllable: Story = {
  args: {
    children: 'テキスト',
  },
};
