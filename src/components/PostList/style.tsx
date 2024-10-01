import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #1c1c1c;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box; 

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #800020;
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
  background-color: #2e2e2e; 
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
  color: #800020;
  margin-bottom: 15px;
`;

export const PostDescription = styled.p`
  font-size: 1rem;
  color: #c9c9c9;
  margin-bottom: 20px;
`;

export const ViewButton = styled.button`
  background-color: #800020;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #800020;
    transition: background-color 0.3s ease;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #800020;
  font-size: 1rem;
  color: #ffffff; 
  background-color: #333333; 
`;


export const PostAuthor = styled.p`
  font-size: 1rem;
  color: #800020;
  margin-top: 10px;
  font-style: italic;
`;
