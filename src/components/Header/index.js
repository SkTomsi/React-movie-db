import React from "react";
import RmdbLogo from "../../images/react-movie-logo.svg";
import TmdbLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg>
        <img src={RmdbLogo} alt="React Movies Logo" />
      </LogoImg>
      <TMDBLogoImg>
        <img src={TmdbLogo} alt="TMDB Logo" />
      </TMDBLogoImg>
    </Content>
  </Wrapper>
);

export default Header;
