import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';
import type { RootState, AppDispatch } from '../../app/store';

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((s: RootState) => s.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="status-box">
        <div className="spinner" />
        <span className="status-text">FETCHING POSTS...</span>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="error-box">
        <span className="error-text">ERROR: {error}</span>
        <button className="retry-btn" onClick={() => dispatch(fetchPosts())}>
          RETRY
        </button>
      </div>
    );
  }

  return (
    <div className="posts-grid">
      {items.map((post, i) => (
        <div
          key={post.id}
          className="post-card"
          style={{ animationDelay: `${i * 40}ms` }}
        >
          <div className="post-card-meta">
            <span className="post-id">#{String(post.id).padStart(3, '0')}</span>
            <span className="post-user">USER_{post.userId}</span>
          </div>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;