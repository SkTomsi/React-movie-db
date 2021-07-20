import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  height: 80px;
  max-width: var(--maxWidth);
  align-content: center;
  justify-content: space-between;
  padding: 20px 0;
  margin: auto;
`;

export const LogoImg = styled.div`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.div`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
