// src/components/Footer/Footer.component.tsx
"use client";
import React from 'react';
import { FooterContainer, FooterText } from './Footer.style';

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterText>&copy; 2024 Saudação App. Todos os direitos reservados ao RD o mais brabo.</FooterText>
  </FooterContainer>
);

export default Footer;
