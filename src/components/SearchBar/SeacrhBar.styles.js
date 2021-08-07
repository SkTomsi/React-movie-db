import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;

  @media screen and (max-width: 720px) {
    height: 70px;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 46px;
  color: var(--white);

  @media screen and (max-width: 720px) {
    height: 30px;
  }

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;

    @media screen and (max-width: 720px) {
      width: 16px;
      margin: 0 8px;
      top: 7px;
      left: 7px;
    }
  }

  input {
    font-size: 28px;
    background: none;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    width: 95%;
    color: var(--white);
    height: 40px;
    border-style: none;

    @media screen and (max-width: 720px) {
      font-size: 20px;
      height: 20px;
      margin: 5px;
      padding: 0 0 0 40px;
    }

    :focus {
      outline: none;
    }
  }
`;
