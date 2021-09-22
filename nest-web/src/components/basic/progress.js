import React from 'react';
import { mapRoleToBorderColor } from '../../theme';
import { Center, Overlay } from '../layout';
import { Border } from './border';
import { Box } from './box';
import { Text } from './text';
import _ from 'lodash';
export const ProgressBarThin = ({ progress, lineRole, lineHeight, transition }) => {
    return (
        <Border
            radius="small"
            borderSize={[0]}
            width="100%"
            height={lineHeight || 1}
            backgroundRole="info"
        >
            <Overlay top={0} left={0} height="100%" width="100%">
                <Border
                    radius="small"
                    borderSize={[0]}
                    width={`${progress || 0.5}%`}
                    animationDelay={transition || 0.2}
                    height="100%"
                    backgroundRole={lineRole || "success"}
                ></Border>
            </Overlay>
        </Border>
    );
};

export const ProgressBar = ({
    progress1,
    progress2,
    progress3
}) => {
    return (
        <Border
            radius="small"
            borderSize={[0]}
            width="100%"
            height={1}
            backgroundRole="info"
        >
            <Overlay top={0} left={0} height="100%" width="100%">
                <Border
                    radius="small"
                    borderSize={[0]}
                    width={`${progress1 || 0.5}%`}
                    animationDelay={0.2}
                    height="100%"
                    backgroundRole="primary"
                />
                <Border
                    radius="small"
                    borderSize={[0]}
                    width={`${progress2 || 0.5}%`}
                    animationDelay={0.2}
                    height="100%"
                    backgroundRole="primary2"
                />
                <Border
                    radius="small"
                    borderSize={[0]}
                    width={`${progress3 || 0.5}%`}
                    animationDelay={0.2}
                    height="100%"
                    backgroundRole="error"
                />
            </Overlay>
        </Border>
    );
};

const mapRoleToBackground = {
    light: 1,
    heavy: 5,
    default: 3,
};

export const ProgressCircle = ({ progress = 0, weight, role, textType }) => {
    return (
        <Box ratio={1}>
            <svg width="100%" height="100%" viewBox="0 0 38 38">
                <circle
                    stroke={mapRoleToBorderColor('info')}
                    strokeWidth={mapRoleToBackground[weight || 'default']}
                    fill="none"
                    r="15.91549430918954"
                    cx="19"
                    cy="19"
                />
                <circle
                    strokeWidth={mapRoleToBackground[weight || 'default']}
                    fill="none"
                    strokeLinecap="round"
                    r="15.91549430918954"
                    cx="19"
                    cy="19"
                    stroke={mapRoleToBorderColor(role || 'success')}
                    strokeDasharray={`${progress} ${100 - progress}`}
                    strokeDashoffset={25}
                />
            </svg>
            <Overlay top={0} left={0} height="100%" width="100%">
                <Center height="100%">
                    <Text type={textType}>{_.pad(progress + '', 2, '0')}%</Text>
                </Center>
            </Overlay>
        </Box>
    );
};
