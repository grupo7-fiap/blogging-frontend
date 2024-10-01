import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  PostsGrid,
  PostCard,
  PostTitle,
  PostDescription,
  PostAuthor,
  ViewButton,
  SearchBar,
} from "./style";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data.data);
        setFilteredPosts(response.data.data); 
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  const handleViewPost = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <Container>
      <Title>Lista de Posts</Title>
      <SearchBar
        type="text"
        placeholder="Pesquisar por título, descrição ou autor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PostsGrid>
        {filteredPosts.map((post) => (
          <PostCard key={post.id}>
            <PostTitle>{post.title || "Sem título"}</PostTitle>
            <PostDescription>{post.description || "Sem descrição"}</PostDescription>
            <PostAuthor>Autor: {post.author || "Desconhecido"}</PostAuthor>
            <ViewButton onClick={() => handleViewPost(post.id)}>
              Visualizar
            </ViewButton>
          </PostCard>
        ))}
      </PostsGrid>
    </Container>
  );
};

export default PostList;
