import React from "react";
import { FaUserCircle, FaBars } from "react-icons/fa"; // Usando ícone de usuário
import {
  SidebarContainer,
  UserIcon,
  UserName,
  Divider,
  NavLinks,
  NavLinkItem,
} from "./SidebarStyle";
import { useNavigate } from "react-router-dom";

// Definindo o tipo das props
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <>      
      <SidebarContainer isOpen={isOpen}>
        <UserIcon>
          <FaUserCircle size={60} />
        </UserIcon>
        <UserName>Nome do Usuário</UserName>
        <Divider />
        <NavLinks>
          {/* torcar para a rota da lista de usuarios  */}
          <NavLinkItem onClick={() => navigate("/login")}>Users</NavLinkItem>
          <NavLinkItem onClick={() => navigate("/posts/admin")}>Posts</NavLinkItem>
        </NavLinks>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;