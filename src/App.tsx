import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles'; // Certifique-se de importar o GlobalStyle corretamente
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
};

export default App;
