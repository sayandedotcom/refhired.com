import type { Meta, StoryObj } from "@storybook/react";

import { Button, LoaderButton } from "@referrer/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "",
    size: "",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "",
    iconBefore: LoaderButton,
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    variant: "",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    variant: "destructive",
    size: "sm",
  },
};
