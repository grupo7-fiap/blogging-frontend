import React from 'react';
import { CgMenu } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";


import { NavbarContainer, NavbarTitle, HamburgerIcon, CloseButton, ActionButtonEdit } from './NavbarStyle';

interface NavbarProps {
  title: string;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, sidebarOpen, toggleSidebar }) => {

  const navigate = useNavigate();
  const handleCreatePost = () => {
    navigate("/manage", { state: { action: "create" } });
  };
  return (
    <NavbarContainer>
      {/* Condiciona o ícone de "X" ou o menu hamburguer */}
      {sidebarOpen ? (
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
      ) : (
        <HamburgerIcon onClick={toggleSidebar}>
          <CgMenu />
        </HamburgerIcon>
      )}
      <NavbarTitle>{title}</NavbarTitle>
      <ActionButtonEdit onClick={() => handleCreatePost()}>
        Criar
      </ActionButtonEdit>
    </NavbarContainer>
  );
};

export default Navbar;
