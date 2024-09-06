import React, { useEffect, useState } from 'react';
import StyledButton from './style';
import api from '../../services/api';

const ExampleComponent: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // Estado para armazenar os posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts'); // Faz a requisição para a API
        console.log('Response data:', response.data); // Verifica os dados no console
        setPosts(response.data.data); // Define os posts no estado, acessando o array 'data'
      } catch (error) {
        console.error('Erro ao buscar posts:', error); // Exibe erros no console
      }
    };

    fetchPosts(); // Chama a função para buscar os posts
  }, []);

  return (
    <div>
      <h2>Example Component</h2>
      <StyledButton>Click Me</StyledButton>
      <ul>
        {/* Verifica se há posts e os renderiza */}
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <strong>Título:</strong> {post.title || 'Sem título'}
              <br />
              <strong>Descrição:</strong> {post.description || 'Sem descrição'}
              <br />
              <strong>Autor:</strong> {post.author || 'Desconhecido'}
              <br />
              <strong>Data de Criação:</strong> {new Date(post.createdDate).toLocaleDateString()}
            </li>
          ))
        ) : (
          <li>Nenhum post encontrado</li> // Exibe mensagem se não houver posts
        )}
      </ul>
    </div>
  );
};

export default ExampleComponent;
