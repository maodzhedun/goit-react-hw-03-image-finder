import styled from '@emotion/styled';

export const OverlayEl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalEl = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  /* position: absolute;


  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
`;
