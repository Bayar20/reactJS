import styled from 'styled-components';

export const AnimatedSlideDownView = styled.div`
    /* opacity: ${({ visible }) => (visible ? 1 : 0)}; */
    transition: all 0.2s;
    height: ${({ visible }) => (visible ? 'auto' : 0)};
    overflow-y: hidden;
    overflow-x: visible;
    transition: all 0.2s;

    & > * {
        transform: ${({ visible }) =>
            visible ? `translateY(0)` : `translateY(-100%)`};
        transition: all 0.2s;
    }
`;