import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <IconWrapper>
          <IconButton>
            <Icon id="shopping-bag" />
          </IconButton>
          <IconButton>
            <Icon id="search" />
          </IconButton>
          <IconButton
            onClick={() => setShowMobileMenu(true)}
          >
            <Icon id="menu" />
          </IconButton>
        </IconWrapper>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (${QUERIES.maxTablet}) {
    justify-content: space-between;
    align-items: center;
  }

  @media (${QUERIES.maxPhone}) {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(.5rem, 5vw - 1rem, 3rem);
  margin: 0px 48px;
  overflow: auto;

  @media (${QUERIES.maxTablet}) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: none;

  @media (${QUERIES.maxTablet}) {
    display: flex;
    gap: 40px; 
  }

  @media (${QUERIES.maxPhone}) {
    gap: 23px;
  }
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  color: currentColor;

  @media (pointer: fine) {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Side = styled.div`
  flex: 1;

  @media (${QUERIES.maxTablet}) {
    &:last-of-type {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
