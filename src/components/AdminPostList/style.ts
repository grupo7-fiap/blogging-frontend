
import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 250px); // Subtrai a largura da sidebar
  margin-left: 250px; // Compensa a posição da sidebar com margem

  @media (max-width: 800px) {
    width: 100%; // Para telas menores, o conteúdo ocupará toda a largura
    margin-left: 0; // Sem margem para telas menores
  }
`;

export const ContentWrapper = styled.div<{ sidebarOpen: boolean }>`
  flex-grow: 1; // O conteúdo vai ocupar o espaço restante ao lado da sidebar
  padding-left: ${(props) => (props.sidebarOpen ? "20px" : "0")}; // Adiciona padding entre a sidebar e o conteúdo
  transition: margin-left 0.3s ease, width 0.3s ease;

  @media (max-width: 800px) {
    width: 100%; // Em resoluções menores, o conteúdo vai ocupar toda a largura
    padding-left: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #2e2e2e;
  color: white;
`;

export const TableData = styled.td`
  padding: 8px;
  text-align: left;
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

export const ActionButtonDelete = styled.button`
  background-color: #800020;
  color: white;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c50233;
  }
`;

