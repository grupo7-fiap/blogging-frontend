import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1c1c1c; // fundo escuro, semelhante ao da imagem
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #ff2d55; // cor vermelho-rosa semelhante à imagem
  margin-bottom: 40px;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PostCard = styled.div`
  background-color: #2e2e2e; // cor para as cartas de cada post
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #ff2d55; // cor para o título do post
  margin-bottom: 15px;
`;

export const PostDescription = styled.p`
  font-size: 1rem;
  color: #c9c9c9; // cor do texto de descrição
  margin-bottom: 20px;
`;

export const ViewButton = styled.button`
  background-color: #ff2d55;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #ff4466;
    transition: background-color 0.3s ease;
  }
`;
