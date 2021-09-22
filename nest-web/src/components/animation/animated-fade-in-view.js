import styled from 'styled-components';

export const AnimatedFadeInView = styled.div`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    position: relative;
    height: ${({ visible }) => (visible ? 'auto' : 0)};
    transition: all 1s;
    width: auto;
`;
