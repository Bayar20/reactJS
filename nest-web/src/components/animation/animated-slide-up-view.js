import styled from 'styled-components';

export const AnimatedSlideUpView = styled.div`
    animation: slideup 1.5s;
    @keyframes slideup {
        from {
            margin-top: 100%;
        }

        to {
            margin-top: 0%;
        }
    }
    width: 100%;
`;
