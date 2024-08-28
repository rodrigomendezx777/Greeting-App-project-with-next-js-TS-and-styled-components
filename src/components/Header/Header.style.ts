// src/components/Header/Header.style.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: #ffffff;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  height: 5rem;
  border-radius: 0 0 2rem 2rem;
`;

export const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #0070f3;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;

