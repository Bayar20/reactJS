import React, {
  createContext,
  useContext,
  useRef,
  useState
} from "react";
import { AnimatedSlideDownView, AnimatedToggleView } from "../animation";
import { Border, Box, Shadow, Text } from "../basic";
import { Input } from "../form";
import { ChevronDownIcon } from "../../assets";
import { Grid, Overlay, Padding, Stack } from "../layout";
import { useOutsideClick } from "../utility";
export * from "./expandable-dropdown";
const DropDownContext = createContext({
  visible: false,
  setVisible: (visible) => {}
});

export const DropDown = {
  Provider: ({ children }) => {
    const [visible, setVisible] = useState(false);
    const element = useRef();
    useOutsideClick(element, () => {
      setVisible(false);
    });
    return (
      <div
        ref={element}
        style={{
          position: "relative",
          cursor: "pointer",
          height: "100%"
        }}
      >
        <DropDownContext.Provider value={{ visible, setVisible }}>
          {children}
        </DropDownContext.Provider>
      </div>
    );
  },
  Content: ({ children, width = "100%", closeOnSelect = true }) => {
    const { visible, setVisible } = useContext(DropDownContext);

    return (
      <div
        onClick={() => closeOnSelect && setVisible(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: visible ? 99 : -1
        }}
      >
        <AnimatedToggleView visible={visible}>
          <Overlay left={0} top={3} visible={visible} zIndex={99} right={0}>
            <Shadow>
              <Border borderStyle="none" borderSize={0}>
                <Padding
                  width={width}
                  backgroundRole="light"
                  maxHeight={"30vh"}
                >
                  {children}
                </Padding>
              </Border>
            </Shadow>
          </Overlay>
        </AnimatedToggleView>
      </div>
    );
  },
  Trigger: ({ children }) => {
    const { visible, setVisible } = useContext(DropDownContext);
    return (
      <div
        style={{
          height: "100%"
        }}
        onClick={() => setVisible(!visible)}
      >
        {children}
      </div>
    );
  }
};

export const SearchType = (props) => {
  let { name, logo, host, port, maxConnections, onClick } = props;
  return (
    <Shadow interactive>
      <Border radius="medium" borderSize={[0]} onClick={onClick}>
        <Padding size={[4]}>
          <Grid columns={2}>
            <Border borderSize={[1]} role="info" radius="medium">
              <Padding size={[2]}>
                <Box image={logo} ratio={0.25} />
              </Padding>
            </Border>
            <Stack size={3}>
              <Text>{name}</Text>
              <Text>{`${host} / ${port} / ${maxConnections}`}</Text>
            </Stack>
          </Grid>
        </Padding>
      </Border>
    </Shadow>
  );
};

export const SearchableDropDown = (props) => {
  let { children } = props;
  const [selectedInput, setSelectedInput] = useState(false);
  return (
    <Stack size={2}>
      <Input label="Search" onClick={() => setSelectedInput(!selectedInput)} />
      <Overlay right={0} top={5}>
        <ChevronDownIcon />
      </Overlay>
      <Shadow>
        <Border radius="medium" borderSize={selectedInput ? [1] : [0]}>
          <AnimatedSlideDownView visible={selectedInput}>
            <Stack size={3} maxHeight={"30vh"}>
              <Border radius="medium">
                <Padding size={[4]} onClick={() => setSelectedInput(false)}>
                  <Stack size={4}>{children}</Stack>
                </Padding>
              </Border>
            </Stack>
          </AnimatedSlideDownView>
        </Border>
      </Shadow>
    </Stack>
  );
};
