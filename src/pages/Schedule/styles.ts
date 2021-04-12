import styled, { css } from 'styled-components';

interface PopUpProps {
  seen?: boolean;
}

export const Container = styled.div<PopUpProps>`
  ${props =>
    props.seen &&
    css`
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.1);
    `}
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 32px auto;
  display: flex;
  justify-content: center;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #69cf9c;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #69cf9c;
      margin: 0 8px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;
  display: flex;
  justify-content: center;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  p {
    color: #999591;
  }
`;

export const Popup = styled.div`
  position: fixed;
  width: 550px;
  height: 500px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    padding: 100px;
  }

  button {
    border: none;
    background: #69cf9c;
    width: 40%;
  }
`;

export const CloseButton = styled.button``;
