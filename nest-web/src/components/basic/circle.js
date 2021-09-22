import React from 'react';
import styled from 'styled-components';
import { mapRoleToBorderColor } from '../../theme';

const Inner = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    display: flex;
`;
const div = ({ className, children }) => {
    return (
        <div className={className}>
            <Inner>{children}</Inner>
        </div>
    );
};
export const Circle = styled(div)`
    border-radius: 50%;
    border-color: ${({ role }) => mapRoleToBorderColor(role)};
    border-width: 1px;
    padding-top: 100%;
    width: ${({ theme, size }) => theme.baseSpace * (size)}px;
    height: 0;
    overflow: hidden;
    position: relative;
`;

export const CircleSVG = (props) => {
    let { width, height, color } = props;
    return (
        <svg
            width={15 || width}
            height={15 || height}
            viewBox="0 0 15 15"
            fill="none"
            {...props}
        >
            <circle
                cx={7.387}
                cy={7.353}
                r={6.591}
                fill={color}
                stroke={color || '#000'}
                strokeWidth={1.318}
            />
        </svg>
    );
};
