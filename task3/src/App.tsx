import React from 'react';
import PostList from './features/posts/PostList';


const App: React.FC = () => {
  return (
    <div className="app">
      <main className="app-main">
        <PostList/>
      </main>
    </div>
  );
};

export default App;