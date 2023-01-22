/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Modal>
        <CloseButton>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>
              Dismiss menu
            </VisuallyHidden>
            <Icon id={'close'} />
          </UnstyledButton>
        </CloseButton>
        <Nav>
          <Anchor href="/sale">Sale</Anchor>
          <Anchor href="/new">New&nbsp;Releases</Anchor>
          <Anchor href="/men">Men</Anchor>
          <Anchor href="/women">Women</Anchor>
          <Anchor href="/kids">Kids</Anchor>
          <Anchor href="/collections">Collections</Anchor>
        </Nav>
        <Footer>
          <Anchor href="/terms">Terms and Conditions</Anchor>
          <Anchor href="/privacy">Privacy Policy</Anchor>
          <Anchor href="/contact">Contact Us</Anchor>
        </Footer>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(96, 100, 108, 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Modal = styled(DialogContent)`
  width: 80%;
  height: 100%;
  background: ${COLORS.white};
  padding: 32px 22px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled.div`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
`;

const Anchor = styled.a`
text-decoration: none;

  Nav & {
    font-size: ${18 / 16}rem;
    font-weight: 600;
    color: ${COLORS.gray['900']};

    &:visited {
      color: ${COLORS.secondary};
    }
  }

  Footer & {
    font-size: ${14 / 16}rem;
    color: ${COLORS.gray['700']};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default MobileMenu;
