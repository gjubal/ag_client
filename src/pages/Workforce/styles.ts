import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
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

export const WorkforceTile = styled.div`
  width: 800px;
  background: #ffffff;
  width: 100%;
  max-width: 800px;
  border: 1px solid #dce2e5;
  border-radius: 16px;
  margin: -3.2rem auto 3.2rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 14px;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 18px;
  }

  legend {
    font-weight: 700;
    font-size: 1.6rem;
    color: #617480;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;
      border: 0;
      color: #69cf9c;
      transition: color 0.2s;

      &:hover {
        background: ${shade(0.2, '#fff')};
      }
    }
  }
`;
