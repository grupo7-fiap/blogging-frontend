import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/backArrow.png";
import {
  LoginContainer,
  LoginBox,
  Title,
  Input,
  Button,
  BackButton,
} from "./style";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleCreatePost = () => {
    navigate("/manage", { state: { action: "create" } });
  };

  const handleEditPost = () => {
    navigate("/manage", { state: { action: "edit" } });
  };
  return (
    <>
      <LoginContainer>
        <BackButton onClick={handleBack}>
          <img src={backIcon} width={26} height={26} alt="Voltar" />
          Voltar
        </BackButton>
        <LoginBox>
          <Title>Login</Title>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button onClick={handleCreatePost}>Sign In</Button>
          <Button onClick={handleEditPost}>Editar</Button>
        </LoginBox>
      </LoginContainer>
    </>
  );
};

export default LoginComponent;
