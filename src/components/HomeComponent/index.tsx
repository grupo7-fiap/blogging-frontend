import React, { useEffect, useState } from "react";
import {
  Container,
  StyledButton,
  ButtonText,
  MainText,
  Divider,
} from "./style";

const HomeComponent = () => {
  return (
    <>
      <Container>
        <StyledButton>
          <MainText>PROFESSORES E FUNCIONÁRIOS</MainText>
          <Divider />
          <ButtonText>Acesse o portal de professores e funcionários</ButtonText>
        </StyledButton>

        <StyledButton>
          <MainText>ALUNOS</MainText>
          <Divider />
          <ButtonText>Acesse o portal de estudantes</ButtonText>
        </StyledButton>
      </Container>
    </>
  );
};

export default HomeComponent;
