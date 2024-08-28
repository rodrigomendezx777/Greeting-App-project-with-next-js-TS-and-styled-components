// src/components/Footer/Footer.style.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
  background-color: #282c34; /* Cor de fundo escura */
  height: 10rem;
  text-align: center;
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  color: #ffffff; /* Cor do texto branca */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Sombra para dar um efeito de elevação */
  border-radius:2rem 2rem 0 0 ;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #0070f3;
`;
