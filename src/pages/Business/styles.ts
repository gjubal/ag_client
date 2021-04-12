import styled from 'styled-components';

export const Container = styled.div``;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #69cf9c;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 48px auto;
  display: flex;
`;

export const Section = styled.section`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

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

export const Card = styled.div`
  background: #ffffff;
  width: 256px;
  height: 256px;
  border-radius: 16px;
  border: 1px solid #dce2e6;

  img {
    width: 255px;
    height: 162.5px;
    border-radius: 16px 16px 0 0;
    margin-bottom: 24px;
  }

  strong {
    margin-left: 24px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #123952;
  }

  div {
    margin-left: 155px;
    margin-top: -205px;

    button {
      margin: 0 2px;
    }
  }
`;
