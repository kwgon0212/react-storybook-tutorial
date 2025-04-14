import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { BlueButton, MainButton, RedButton } from "../stories/Button.stories";
import Button, { ButtonProps } from "./Button";

const mainColor = "orange";

describe("버튼 테스트", () => {
  test("빨간 버튼 테스트", () => {
    render(<Button {...(RedButton.args as ButtonProps)} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/Red/i);
    expect(button.style.backgroundColor).toBe("red");

    // expect(screen.getByRole("button")).toHaveStyle({ backgroundColor: "red" });
  });

  test("파란 버튼 테스트", () => {
    render(<Button {...(BlueButton.args as ButtonProps)} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/Blue/i);
    expect(button.style.backgroundColor).toBe("blue");
  });

  test("메인 버튼 테스트", () => {
    render(<Button {...(MainButton.args as ButtonProps)} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/Main/i);
    expect(button.style.backgroundColor).toBe(mainColor);
  });
});
