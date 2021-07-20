import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  animation: animateText 0.5s;

  @keyframes animateText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h1 {
    color: var(--medGrey);
    font-size: var(--fontBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
