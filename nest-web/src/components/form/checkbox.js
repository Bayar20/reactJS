import React, { useState } from 'react';
import styled from 'styled-components';
import { Border, Box, Shadow } from '../basic';
import { CheckMarkIcon, CloseIcon } from '../../assets';
import { Center, Padding, Queue } from '../layout';

const RawCheckbox = (props) => {
    let { readOnly = false, className } = props;
    const [toggle, setToggle] = useState(false);
    return (
        <Shadow
            className={className}
            onClick={() => !readOnly && setToggle(!toggle)}
        >
            <Box width={6} ratio={1}>
                <Center height="100%">
                    {toggle ? (
                        <CloseIcon height={17} width={17} />
                    ) : (
                        <CheckMarkIcon />
                    )}
                </Center>
            </Box>
        </Shadow>
    );
};

export const Checkbox = styled(RawCheckbox)`
    cursor: pointer;
`;

export const SelectablePill = (props) => {
    let { children, selected, onClick } = props;
    return (
        <div
            style={{ display: 'inline-block', cursor: 'pointer' }}
            onClick={onClick}
        >
            <Border borderSize={[1]} role="primary" radius="small">
                <Padding size={[1, 3]}>
                    <Queue size={2}>
                        <Border
                            borderSize={[1]}
                            role="primary"
                            radius="small"
                            animationDelay={0.2}
                            backgroundRole={(selected && 'primary') || null}
                        >
                            <Box width={4} ratio={1}>
                                <Center height="100%">
                                    {selected ? (
                                        <CheckMarkIcon
                                            height={10}
                                            width={10}
                                            role="light"
                                        />
                                    ) : (
                                        <CloseIcon
                                            height={10}
                                            width={10}
                                            role="primary"
                                        />
                                    )}
                                </Center>
                            </Box>
                        </Border>
                        <div>{children}</div>
                    </Queue>
                </Padding>
            </Border>
        </div>
    );
};
