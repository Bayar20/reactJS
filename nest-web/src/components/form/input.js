import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BorderStyle, Border } from "../basic/border";
import { TextStyle, Text, Spinner } from "../basic";
import {
  Stack,
  Overlay,
  Center,
  Padding,
  DimensionStyle,
  BackgroundStyle,
  Queue
} from "../layout";
import { ErrorIcon, SuccessIcon, KeyIcon, EyeIcon } from "../../assets";
import { ValidatedFormContext } from "./form";
import _ from "lodash";

export const TextEntry = styled.input`
  outline: none;
  width: 100%;
  border: none;
  transition: all 0.2s;
  ${(props) => props.disabled};
  ${(props) => props.required};
  ${TextStyle}
  ${BorderStyle}
    ${DimensionStyle}
    ${BackgroundStyle}
`;

export const Input = ({
  label,
  placeholder,
  loading,
  error,
  type,
  value,
  trailingIcon,
  width,
  labelType,
  borderSize,
  borderRadius,
  leadingIcon,
  helper,
  height,
  helperType,
  warningIcon,
  warningBackground,
  warningText,
  bottomNumber,
  required,
  charCount,
  onChange,
  maxLength,
  disabled,
  success,
  ...props
}) => {
  let [active, setActive] = useState(false);
  let [inputType, setInputType] = useState("text");
  let [countNum, setCountNum] = useState(0);
  let [inputValue, setInputValue] = useState("");

  if (countNum > charCount) {
    setCountNum(charCount);
  }
  const handlerChange = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  return (
    <Queue backgroundRole={(active && "whitePrimary") || "whitePrimary"}>
      <Stack
        width={width || "382px"}
        size={0.5}
        charCount={charCount && "100"}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <Border
          borderSize={(active && [2, 2, 2]) || borderSize || [1, 1, 1]}
          role={
            (error && "error") ||
            (active && "blackPrimary") ||
            (disabled && "disable") ||
            "grey"
          }
          radius={borderRadius || "border"}
        >
          {trailingIcon && (
            <Overlay top={0} right="3%" height="100%">
              <Center width="10%" onClick={handlerChange}>
                {<EyeIcon />}
              </Center>
            </Overlay>
          )}
          {leadingIcon && (
            <Overlay top={0} left="3%" height="100%">
              <Center width="10%">{<KeyIcon />}</Center>
            </Overlay>
          )}
          <Queue
            justifyContent={leadingIcon ? "space-around" : "space-between"}
            height={height || "56px"}
          >
            <Stack width={leadingIcon ? "80%" : "90%"}>
              <Padding size={label && [1.5, 0, 0, 0]} />
              <TextEntry
                onChange={(event) => {
                  setCountNum(event.target.value.length);
                  setInputValue(event.target.value);
                  onChange && onChange(event);
                }}
                disabled={disabled}
                required={required}
                type={inputType}
                maxLength={charCount}
                {...props}
              />
            </Stack>
          </Queue>
        </Border>
        {inputValue || active ? (
          <Overlay top={1} left={leadingIcon ? 5.5 : 1}>
            <Text type={labelType || "caption1"} role="grey">
              {label}{" "}
              <Text type="caption1" role="required">
                {required && "*"}
              </Text>
            </Text>
          </Overlay>
        ) : (
          <Overlay top={2.3} left={leadingIcon ? 5.9 : 1}>
            <Text type={labelType || "headline"} role="grey">
              {label}{" "}
              <Text type="headline" role="required">
                {required && "*"}
              </Text>
            </Text>
          </Overlay>
        )}
        {loading && (
          <Overlay top={0} right={0} height="100%">
            <Center>
              <Spinner />
            </Center>
          </Overlay>
        )}
        {error && (
          <>
            <Queue
              size={2}
              backgroundRole={warningBackground || "success"}
              width={width || "100%"}
              height={height || "56px"}
            >
              <Padding size={[0, 0, 0, 0.3]} />
              {<ErrorIcon />}
              <Text role="blackPrimary" type="subHeading">
                {error}
              </Text>
            </Queue>
          </>
        )}

        {success && (
          <Queue
            size={2}
            backgroundRole={warningBackground || "success"}
            width={width || "100%"}
            height={height || "56px"}
          >
            <Padding size={[0, 0, 0, 0.3]} />
            {<SuccessIcon />}
            <Text role="blackPrimary" type="subHeading">
              {success}
            </Text>
          </Queue>
        )}
        <Queue justifyContent="space-between">
          <Text type={helperType || "footnote"}>{helper}</Text>
          {charCount && (
            <Text type={bottomNumber || "footnote"}>
              {countNum}/{charCount}
            </Text>
          )}
        </Queue>
      </Stack>
    </Queue>
  );
};

export const RequiredValidator = async (value) => {
  if (!value) {
    throw new Error("please enter this value");
  }
};

export const RegexValidator = (regex, message, allowEmpty = true) => {
  return async (value) => {
    if (allowEmpty && _.isEmpty(value)) {
      return;
    }
    if (!regex.test(value || "")) {
      throw new Error(message);
    }
  };
};

export const EmailValidator = RegexValidator(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  "Please enter valid email"
);
export const NumberValidator = RegexValidator(
  /^\d+$/,
  "Please enter valid number"
);
export const ValidatedInput = ({
  validators = [],
  error: defaultError,
  onChange: onValueChange,
  value: defaultValue,
  ...props
}) => {
  const [error, setError] = useState();
  const [value, setValue] = useState();
  useEffect(() => setError(defaultError), [defaultError]);
  useEffect(() => setValue(defaultValue), [defaultValue]);

  const validate = async (value) => {
    let errorMessage = null;
    try {
      for (const validator of validators) {
        await validator(value);
      }
    } catch (validationError) {
      errorMessage = validationError.message;
    }
    setError(errorMessage);
    return errorMessage;
  };
  const onChange = async (value) => {
    onValueChange && onValueChange(value);

    await validate(value);
    setValue(value);
  };
  return <Input {...props} value={value} onChange={onChange} error={error} />;
};

export const ValidatedFormInput = (props) => {
  const { role, onChange, error: defaultError, value: defaultValue } = props;
  const { error, validators = [], onChange: onChangeValue, value } = useContext(
    ValidatedFormContext
  );
  useEffect(() => onChangeValue(role, defaultValue), [defaultValue]);

  const onChangeText = (value) => {
    onChange && onChange(value);
    onChangeValue(role, value);
  };
  return (
    <ValidatedInput
      {...props}
      text={value[role]}
      onChange={onChangeText}
      validators={validators[role]}
      error={error[role] || defaultError}
    />
  );
};
