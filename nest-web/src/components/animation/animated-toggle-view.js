import styled from 'styled-components';

export const AnimatedToggleView = styled.div`
    position: relative;
    z-index: ${({ visible }) => (visible ? 1 : -99)};
    height: ${({ visible }) => (visible ? 'auto' : 0)};
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    & > * {
        visibility: ${(visible) => (visible ? 'visible' : 'hidden')};
        z-index: ${({ visible }) => (visible ? 1 : -99)};
    }
    transition: all 0.2s, z-index 0s;
    width: 100%;
`;
