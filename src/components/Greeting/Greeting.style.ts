// src/components/Greeting/Greeting.style.ts
import styled from "styled-components";



export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 76.7vh;
  /* background-color: #f9f9f9; Cor de fundo suave */
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  width: 300px;
  max-width: 100%;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 5px rgba(0, 112, 243, 0.2);
    outline: none;
  }
`;

export const GreetButton = styled.button`
  padding: 12px 25px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: #005bb5;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const GreetingContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 50px;
  color: #0070f3;
  font-weight: 500;
  transition: color 0.3s;

  /* Adiciona um efeito de desfoque ao texto da saudação */
  &:last-child {
    color: #0070f3;
    font-style: italic;
  }
`;

export const GreetingMessage = styled.p`
  margin-top: 20px;
  font-size: 50px;
  color: #444;
  font-weight: 500;
  transition: color 0.3s;

  /* Adiciona um efeito de desfoque ao texto da saudação */
  &:last-child {
    color: #0070f3;
    font-style: italic;
  }
`;
