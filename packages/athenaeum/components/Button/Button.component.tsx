import type { FunctionComponent } from "react";
import type { ButtonProps } from "./Button.types";
import { UIButton } from "./Button.styles";

const BUTTON_NAME = 'Button';

const Button: FunctionComponent<ButtonProps> = ({ variant }) => {
  return <UIButton variant={variant}>Button</UIButton>;
}

Button.displayName = BUTTON_NAME;

export default Button;
