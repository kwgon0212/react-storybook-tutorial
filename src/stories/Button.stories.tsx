import React from "react";
import Button, { ButtonProps } from "../components/Button";

import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "버튼",
  component: Button,
  argTypes: { clickHandler: { action: "clicked" } },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Red",
  backgroundColor: "red",
  size: "large",
  color: "white",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "Blue",
  backgroundColor: "blue",
  size: "medium",
  color: "white",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: "Small",
  backgroundColor: "green",
  size: "small",
  color: "white",
};

export const MainButton = Template.bind({});
MainButton.args = {
  label: "Main",
  backgroundColor: "skyblue",
  size: "medium",
  color: "white",
};

export const BorderRadiusLargeButton = Template.bind({});
BorderRadiusLargeButton.args = {
  label: "BorderRadiusLarge",
  backgroundColor: "skyblue",
  size: "medium",
  borderRadius: "large",
  color: "white",
};

export const BorderRadiusSmallButton = Template.bind({});
BorderRadiusSmallButton.args = {
  label: "BorderRadiusSmall",
  backgroundColor: "skyblue",
  size: "medium",
  borderRadius: "small",
  color: "white",
};
