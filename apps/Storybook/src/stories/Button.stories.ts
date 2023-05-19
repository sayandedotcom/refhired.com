import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@referrer/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    variant: "",
    size: "",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
    size: "",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    variant: "",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    variant: "destructive",
    size: "sm",
  },
};
