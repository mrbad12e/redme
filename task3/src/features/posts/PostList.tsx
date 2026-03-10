import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';
import type { RootState, AppDispatch } from '../../app/store';

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((s: RootState) => s.posts);

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

  return (
    <div>
      {items.map((post, i) => (
        <div key={post.id}>
          <div>
            <span>#{String(post.id).padStart(3, '0')}</span>
            <span>USER_{post.userId}</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;