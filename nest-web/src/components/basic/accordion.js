import React, { createContext, useContext, useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "../../assets";
import { Border, Queue, Margin } from "..";

const Context = createContext({
  visible: false,
  setVisible: (visible) => {}
});

export const AccordionText = {
  TextProvider: ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
      <div>
        <Context.Provider value={{ visible, setVisible }}>
          <Border borderSize="1" role="line" width="100%" radius="large">
            {children}
          </Border>
        </Context.Provider>
      </div>
    );
  },

  TextContent: ({ children, closeOnSelect = true }) => {
    const { visible, setVisible } = useContext(Context);

    return visible ? (
      <div onClick={() => closeOnSelect && setVisible(false)}>
        <Border
          animationDelay="2"
          borderSize={[0, 0, 1]}
          backgroundRole="boneWhite"
          radius="large"
        >
          <hr></hr>
          <Margin size={2}>{children}</Margin>
        </Border>
      </div>
    ) : (
      <p></p>
    );
  },
  TextTrigger: ({ children }) => {
    const { visible, setVisible } = useContext(Context);

    return (
      <div onClick={() => setVisible(!visible)}>
        <Margin size={[2, 2.5, 2, 2]}>
          <Queue justifyContent="space-between">
            {children}
            {visible ? (
              <ChevronDownIcon color=" #000000" />
            ) : (
              <ChevronRightIcon color=" #000000" />
            )}
          </Queue>
        </Margin>
      </div>
    );
  }
};

export const AccordionCard = {
  CardProvider: ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
      <div>
        <Context.Provider value={{ visible, setVisible }}>
          {children}
        </Context.Provider>
      </div>
    );
  },
  CardContent: ({ children, closeOnSelect = true }) => {
    const { visible, setVisible } = useContext(Context);

    return visible ? (
      <div onClick={() => closeOnSelect && setVisible(false)}>{children}</div>
    ) : (
      <p></p>
    );
  },

  CardTrigger: ({ children }) => {
    const { visible, setVisible } = useContext(Context);

    return (
      <div onClick={() => setVisible(!visible)}>
        <Border borderSize="1" role="line" width="100%" radius="large">
          <Margin size={[2, 2.5, 2, 2]}>
            <Queue justifyContent="space-between">
              {children}
              {visible ? (
                <ChevronDownIcon color=" #000000" />
              ) : (
                <ChevronRightIcon color=" #000000" />
              )}
            </Queue>
          </Margin>
        </Border>
      </div>
    );
  }
};
