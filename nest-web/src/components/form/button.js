import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Text } from "../";
import { Border, InteractiveStyle } from "../basic";
import { Center, Overlay, Queue } from "../layout";
import { ValidatedFormContext } from "./form";
import _ from "lodash";
import { AnimatedToggleView } from "../animation";

const mapTypeStyleToButtonStyle = {
  primary: {
    fill: {
      backgroundColor: "#172B4D",
      color: "#FAFAFA",
      textTransform: "uppercase",
      textDecoration: "none",
      border: "1px solid #172B4D",
      borderRadius: "4px",
      cursor: "",
      fill: "#FAFAFA"
    },
    ghost: {
      backgroundColor: "#FAFAFA",
      color: "#172B4D",
      textTransform: "",
      textDecoration: "none",
      border: "1px solid #172B4D",
      borderRadius: "4px",
      cursor: "",
      fill: "#172B4D",
      boxShadow: "none"
    },
    link: {
      backgroundColor: "none",
      color: "#172B4D",
      textTransform: "",
      textDecoration: "underline",
      border: "none",
      borderRadius: "none",
      cursor: "",
      fill: "#172B4D",
      boxShadow: "none"
    },
    text: {
      backgroundColor: "none",
      color: "#172B4D",
      textTransform: "",
      textDecoration: "none",
      border: "none",
      borderRadius: "none",
      cursor: "text",
      fill: "#172B4D",
      boxShadow: "none"
    }
  },
  destructive: {
    fill: {
      backgroundColor: "#DF3617",
      color: "#FAFAFA",
      textTransform: "uppercase",
      textDecoration: "none",
      border: "1px solid #DF3617",
      borderRadius: "4px",
      cursor: "",
      fill: "#FAFAFA"
    },
    ghost: {
      backgroundColor: "#FAFAFA",
      color: "#DF3617",
      textTransform: "",
      textDecoration: "none",
      border: "1px solid #DF3617",
      borderRadius: "4px",
      cursor: "",
      fill: "#DF3617",
      boxShadow: "none"
    },
    link: {
      backgroundColor: "none",
      color: "#DF3617",
      textTransform: "",
      textDecoration: "underline",
      border: "none",
      borderRadius: "none",
      cursor: "",
      fill: "#DF3617",
      boxShadow: "none"
    },
    text: {
      backgroundColor: "none",
      color: "#DF3617",
      textTransform: "",
      textDecoration: "none",
      border: "none",
      borderRadius: "none",
      cursor: "text",
      fill: "#DF3617",
      boxShadow: "none"
    }
  }
};

const mapButtonSize = {
  large: {
    padding: "12px 16px 12px 16px",
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Montserrat"
  },
  small: {
    padding: "11px 16px 10px 16px",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: "Montserrat",
    boxShadow: "inset 0px -4px 0px rgba(0, 0, 0, 0.15)"
  }
};

export const mapTypeStyleToFill = (type, style) =>
  mapTypeStyleToButtonStyle[type]?.[style] || "";

export const mapSizeToButtonSize = (size) => mapButtonSize[size] || "";

export const ButtonStyle = css`
  font-weight: 700;
  letter-spacing: 0.05em;
  ${({ size }) => mapSizeToButtonSize(size)};
  width: ${({ buttonWidth }) => buttonWidth};
  ${({ type, buttonStyle }) => mapTypeStyleToFill(type, buttonStyle)};
`;

export const ButtonState = css`
  opacity: ${({ disabled, active }) =>
    disabled ? "0.5" : active ? "0.7" : "1"};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
`;

const RawButton = ({
  type,
  size,
  children,
  buttonStyle,
  buttonWidth,
  leadingIcon,
  trailingIcon,
  ...props
}) => {
  return (
    <Border
      {...props}
      type={type}
      size={size}
      buttonStyle={buttonStyle}
      buttonWidth={buttonWidth}
    >
      <Center height="100%">
        <Queue>
          {leadingIcon}
          {children}
          {trailingIcon}
        </Queue>
      </Center>
    </Border>
  );
};

export const Button = styled(RawButton)`
  display: inline-block;
  ${InteractiveStyle}
  ${ButtonStyle}
  ${ButtonState}
`;

export const AsyncActionButton = ({ onClick, role, ...props }) => {
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState();

  const click = async () => {
    setLoading(true);
    try {
      onClick && (await onClick());
    } catch (e) {
      setError(e.message);
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
    setLoading(false);
  };
  return (
    <Border>
      <Button
        {...props}
        role={error ? "error" : role}
        loading={loading}
        onClick={click}
      />

      <AnimatedToggleView visible={!!error}>
        <Overlay bottom={-15}>
          <Text role="error" type="tertiary1">
            {error}
          </Text>
        </Overlay>
      </AnimatedToggleView>
    </Border>
  );
};

export const ValidatedFormButton = ({ onClick, ...props }) => {
  const { error, onSubmit } = useContext(ValidatedFormContext);
  const click = async () => {
    let error = await onSubmit();
    if (!_.isEmpty(error)) {
      return;
    }
    onClick && onClick();
  };
  return (
    <AsyncActionButton
      {...props}
      onClick={click}
      disabled={!_.isEmpty(error)}
    />
  );
};

export const PrimaryButton = (props) => {
  const { children, active, size } = props;
  return (
    <Button
      {...props}
      radius="xlarge"
      role="secondary"
      textRole={active ? "primary" : "secondary"}
      backgroundRole={active ? "secondary" : undefined}
      // space={active ? 0 : 5}
      size={size || (active ? [2, 7] : [2, 5])}
    >
      {children}
    </Button>
  );
};

export const AsyncPrimaryButton = (props) => {
  const { children, active, size, rightIcon } = props;
  return (
    <AsyncActionButton
      {...props}
      radius="xlarge"
      role="secondary"
      textRole={active ? "primary" : "secondary"}
      backgroundRole={active ? "secondary" : undefined}
      rightIcon={active ? undefined : rightIcon}
      // space={active ? 0 : 5}
      size={size || (active ? [2, 7] : [2, 5])}
    >
      {children}
    </AsyncActionButton>
  );
};
