
import styled from "styled-components";

// Estilos para a Sidebar

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 250px;
  background-color: #2e2e2e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: fixed;
  left: ${(props) => (props.isOpen ? "0" : "-250px")}; // Sidebar escondida para mobile
  top: 60px;
  height: auto; // Sidebar ocupará a altura total da janela
  min-height: 100%; // Garante que a sidebar acompanhe o conteúdo caso o conteúdo seja maior que a altura da janela
  transition: left 0.3s ease; // Transição suave ao abrir/fechar

  @media (max-width: 800px) {
    width: 250px;
    z-index: 100; // Garantir que a Sidebar sobreponha o conteúdo
  }

  @media (min-width: 801px) {
    left: 0; // Sidebar sempre visível em telas maiores
    top: 0;
  }
`;

export const UserIcon = styled.div`
  margin-bottom: 0px;
`;

export const UserName = styled.h3`
  color: #800020;
  margin-bottom: 20px;
`;

export const Divider = styled.hr`
  width: 99%;
  border: 1px solid #800020;
  margin-bottom: 20px;
`;

export const NavLinks = styled.div`
  width: 100%;
`;

export const NavLinkItem = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: #ffffff;
  border: none;
  text-align: left;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: #800020;
    transition: background-color 0.3s ease;
  }
`;

// Estilo para o fundo escuro ao abrir a Sidebar
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 100%; 
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

