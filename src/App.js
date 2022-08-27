import {
  ProfileImage,
  StyledBody,
  StyledContainer,
  StyledHeader,
  StyledLinkBody,
} from "./components/StyledContainer";
import styled from "styled-components";
import Links from "./components/Links";
import Footer from "./components/Footer";
const ProfileHeaderText = styled.h2`
  font-weight: normal;
`;
const App = () => {
  return (
    <StyledBody>
      <StyledContainer>
        <StyledHeader>
          <ProfileImage src="Rajarshi.jpeg" alt="profile" />
          <ProfileHeaderText>Rajarshi Biswas</ProfileHeaderText>
        </StyledHeader>
        <StyledLinkBody>
          <Links />
        </StyledLinkBody>
      </StyledContainer>
      <Footer />
    </StyledBody>
  );
};

export default App;
