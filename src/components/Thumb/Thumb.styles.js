import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.5s;
  object-fit: cover;
  border-radius: 22px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MovieName = styled.div`
  h1 {
    font-size: var(--fontSmall);
    position: relative;
    padding: 0 20px;
    margin: 0 auto;
    text-align: center;
  }
`;
