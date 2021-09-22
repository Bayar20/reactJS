import styled, { css } from 'styled-components';
import { DimensionStyle } from '../layout';
export const ShadowStyle = css`
    /* box-shadow: 0px 8px 16px rgba(114, 98, 238, 0.04); */
    /* box-shadow: 0px 4px 4px rgba(108, 73, 172, 0.07); */
    box-shadow: 0px 8px 16px rgba(114, 98, 238, 0.04);
    transition: all 0.2s;
`;
export const Shadow = styled.div`
    ${DimensionStyle}
    & > * {
        ${ShadowStyle}
        ${({ interactive }) =>
            interactive &&
            css`
                cursor: pointer;
            `}
    }
`;
