import React from 'react';
import PostList from './features/posts/PostList';
import PostForm from 'features/posts/PostForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <main className="app-main">
        <PostList/>
        <PostForm/>
      </main>
    </div>
  );
};

export default App;