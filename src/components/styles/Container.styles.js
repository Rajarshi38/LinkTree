import styled from "styled-components";

export const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* height: 100%; */
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 35px;
`;

export const StyledLinkBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 90%;
  margin: auto 23px;
  /* margin-top: 20px; */
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const LinkBody = styled.a`
  width: 100%;
  text-decoration: none;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  padding: 10px 50px;
  transition: 300ms ease-in-out;
  &:hover {
    background-color: #fff;
    color: black;
  }
`;

export const ProfileImage = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
`;

export const StyledFooter = styled.footer`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 500;
`;
