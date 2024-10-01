import styled from 'styled-components';

// Container da Navbar
export const NavbarContainer = styled.div`
  width: calc(100% - 250px); // Tira a largura da sidebar para resoluções maiores
  height: 60px;
  background-color: #2e2e2e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 250px; // Deixa a navbar ao lado da sidebar
  z-index: 100; // Abaixo da sidebar
  transition: left 0.3s ease, width 0.3s ease;

  @media (max-width: 800px) {
    left: 0; // Reseta para a posição 0 em telas menores
    width: 100%; // Ocupa toda a tela
    z-index: 102; // Garantir que sobreponha a sidebar em telas menores
  }
`;

// Título da Navbar
export const NavbarTitle = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`;

// Ícone do menu hambúrguer
export const HamburgerIcon = styled.div`
  position: absolute;
  left: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

// Botão de fechar com "X"
export const CloseButton = styled.div`
  position: absolute;
  left: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
`;

export const ActionButtonEdit = styled.button`
  background-color: #0d54c0;
  color: white;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1873fa;
  }
`;


