import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Container, Title, Content, Author, Loading, BackButton } from './style'; 

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data.data); 
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar o post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  if (!post) {
    return <Loading>Post não encontrado.</Loading>;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Voltar para a Lista</BackButton> 
      <Title>{post.title || 'Sem título'}</Title>
      <Content>{post.content || 'Sem conteúdo'}</Content>
      <Author>Autor: {post.author || 'Desconhecido'}</Author>
    </Container>
  );
};

export default PostDetails;
