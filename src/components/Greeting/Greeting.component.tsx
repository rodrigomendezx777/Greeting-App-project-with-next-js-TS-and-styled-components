// src/components/Greeting/Greeting.component.tsx
"use client";

import React, { useState } from "react";
import { PageContainer, InputContainer, InputField, GreetButton,GreetingContainer } from "../Greeting/Greeting.style";

const Greeting: React.FC = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleGreet = () => {
    if (name.trim()) {
      setGreeting(`Olá, ${name}!`);
    } else {
      setGreeting("Por favor, digite seu nome.");
    }
  };

  return (
    <PageContainer>

      <GreetingContainer>
        {greeting && <p>{greeting}</p>}
      </GreetingContainer>
            
        
      <InputContainer>
        <InputField
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={handleInputChange}
        />
        <GreetButton onClick={handleGreet}>Saudar</GreetButton>
      </InputContainer>
    </PageContainer>
  );
};

export default Greeting;
