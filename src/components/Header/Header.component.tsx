// src/components/Header/Header.component.tsx
"use client";
import React from 'react';
import { HeaderContainer, Logo, NavLink } from '../Header/Header.style';

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo>Saudação App</Logo>
    {/* <nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">Sobre</NavLink>
      <NavLink href="/contact">Contato</NavLink>
    </nav> */}
  </HeaderContainer>
);

export default Header;
