import styled, {keyframes} from 'styled-components'
import { color, layout, space, typography } from 'styled-system'
import {Card} from "@material-ui/core";

export const Box = styled.div`
  background: black;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled('div')`
  display: flex;
  flex-direction: column;
  ${space}
  ${typography}
`;
Column.defaultProps = {
    m: 5,
}

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
`;

export const FooterLink = styled.a`
  color: ${props => props.theme.colors.link.base};
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: ${props => props.theme.colors.link.hover};
      transition: 200ms ease-in;
  }
  ${color}
`;

export const MenuLink = styled.a`
  color: ${props => props.theme.colors.link.base};
  font-size: 18px;
   
  &:hover {
      color: ${props => props.theme.colors.link.hover};
      transition: 200ms ease-in;
      cursor: pointer;
  }
  ${color}
  ${space}
`;
MenuLink.defaultProps = {
    m: 3,
    mx: 4
}

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const MainContainer = styled.div`
  ${color}
`;
MainContainer.defaultProps = {
    bg: 'background',
}

export const MainContent = styled.div`
  @media only screen and (max-width: 600px) {
    margin-left: 2%;
    margin-right: 2%;
  }
  ${space}
  ${layout}
`;
MainContent.defaultProps = {
    mx: '15%',
    my: 4,
    minHeight: '60vh'
}

const MainLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const MainLogo = styled.img`
  height: 8vh;
  @media (prefers-reduced-motion: no-preference) {
      animation: ${MainLogoSpin} infinite 100s linear
  }
`;

export const MainHeader = styled.header`
  z-index: 2;
  width:100%;
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr 2fr;;
  ${color}
`;
MainHeader.defaultProps = {
    bg: "dark"
}

export const HeaderAvatarContainer = styled.div`
  ${space}
`;
HeaderAvatarContainer.defaultProps = {
    ml: 'auto',
    pr:6,
}

export const AvatarMenuContainer = styled.div`
  ${space}
`;
AvatarMenuContainer.defaultProps = {
    p: '100%'
}

export const HoverCard = styled(Card)`
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  &:first-child {
    background-color: ${props => props.theme.colors.surface};
  }
  ${color}
`