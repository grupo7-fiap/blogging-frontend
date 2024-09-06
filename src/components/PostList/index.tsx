import React, { useEffect, useState } from 'react';
import { Container, Title, PostsGrid, PostCard, PostTitle, PostDescription, ViewButton } from './style';
import api from '../../services/api'; 
import { useNavigate } from 'react-router-dom'; 

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data.data); 
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleViewPost = (id: number) => {
    navigate(`/posts/${id}`); 
  };

  return (
    <Container>
      <Title>Lista de Posts</Title>
      <PostsGrid>
        {posts.map((post) => (
          <PostCard key={post.id}>
            <PostTitle>{post.title || 'Sem título'}</PostTitle>
            <PostDescription>{'Ver mais...'}</PostDescription>
            <ViewButton onClick={() => handleViewPost(post.id)}>Visualizar</ViewButton>
          </PostCard>
        ))}
      </PostsGrid>
    </Container>
  );
};

export default PostList;
