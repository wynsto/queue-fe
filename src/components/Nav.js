import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import logo from '../logo.min.png';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = function () {
  const { isAuthenticated } = useAuth0();
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem><img width="150" height="65"src={logo} alt="logo"/></StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">
            Tab Link One
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">
            Tab Link Two
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>
          <Button>Get started</Button>
         
        </StyledNavigationItem>
        <StyledNavigationItem>
            {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}

export default Nav