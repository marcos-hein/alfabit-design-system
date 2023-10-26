import type { Meta, StoryObj } from "@storybook/react";

import Link, { LinkProps } from "./Link";

const meta: Meta<LinkProps> = {
  title: "Molecules/Link",
  component: Link,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "/",
  },
};

export const Violet: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "/",
    className: "violet-theme",
  },
};

export const Disabled: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "/",
    disabled: true,
  },
};
