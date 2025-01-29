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
  LayoutButtons,
  TitleModal,
  ButtonModal,
  LayoutScore,
  ScoreText,
  LayoutQuestion,
  QuestionsText,
  LabelQuestions,
} from "./style";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import Modal from "../ModalQuiz";

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
    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  const handleViewPost = (id: number) => {
    navigate(`/posts/${id}`);
  };

  // Modal
  interface Question {
    question: string;
    options: string[];
  }

  interface QuizData {
    questions: {
      questions: Question[];
    };
  }

  const [data, setData] = useState<QuizData>({
    questions: {
      questions: [],
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = async (id: number) => {
    try {
      const response = await api.get(`/posts/quiz/${id}`);

      setData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };

  const closeModal = () => {
    setUserAnswers({});
    setScore(null);
    setIsModalOpen(false);
  };
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);

  const shuffleOptions = (options: string[]) => {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
  };

  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);

  useEffect(() => {
    const shuffledData = data.questions.questions.map((question) => {
      const shuffledOptions = [...question.options];
      shuffleOptions(shuffledOptions);

      const correctAnswer = question.options[0];
      const correctIndex = shuffledOptions.indexOf(correctAnswer);

      return {
        question: question.question,
        options: shuffledOptions,
        correctAnswer: correctAnswer,
        correctIndex: correctIndex,
      };
    });
    setShuffledQuestions(shuffledData);
  }, []);

  const handleAnswerChange = (
    questionIndex: number,
    selectedOption: string
  ) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOption,
    });
  };

  const calculateScore = () => {
    let correctCount = 0;

    shuffledQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });

    setScore((correctCount / shuffledQuestions.length) * 100);
  };

  const isSubmitDisabled = shuffledQuestions.some(
    (_, index) => !userAnswers[index]
  );

  return (
    <>
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
              <PostDescription>
                {post.description || "Sem descrição"}
              </PostDescription>
              <PostAuthor>Autor: {post.author || "Desconhecido"}</PostAuthor>
              <LayoutButtons>
                <ViewButton onClick={() => handleViewPost(post.id)}>
                  Visualizar
                </ViewButton>
                <ViewButton onClick={() => openModal(post.id)}>Quiz</ViewButton>
              </LayoutButtons>
            </PostCard>
          ))}
        </PostsGrid>
      </Container>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TitleModal>Teste de conhecimento</TitleModal>
        {shuffledQuestions.map((q, index) => (
          <LayoutQuestion key={index}>
            <QuestionsText>{q.question}</QuestionsText>
            {q.options.map((option: string, optIndex: number) => (
              <LabelQuestions key={optIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                {option}
              </LabelQuestions>
            ))}
          </LayoutQuestion>
        ))}
        <LayoutScore>
          <ButtonModal onClick={calculateScore} disabled={isSubmitDisabled}>
            Verificar Respostas
          </ButtonModal>
          <ScoreText>
            {score !== null && <p>Sua pontuação: {score}%</p>}
          </ScoreText>
        </LayoutScore>
      </Modal>
    </>
  );
};

export default PostList;
