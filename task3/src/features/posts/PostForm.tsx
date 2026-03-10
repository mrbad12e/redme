import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postSlice';
import type { RootState, AppDispatch } from '../../app/store';

const PostForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((s: RootState) => s.posts.status);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    await dispatch(addPost({ title, body, userId: 1 }));
    setTitle('');
    setBody('');
    setOpen(false);
  };

  return (
    <div className="post-form-wrapper">
      <button className="toggle-btn" onClick={() => setOpen((o) => !o)}>
        {open ? '✕ CANCEL' : '+ NEW POST'}
      </button>

      {open && (
        <form className="post-form" onSubmit={handleSubmit}>
          <label className="form-label">TITLE</label>
          <input
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            required
          />

          <label className="form-label">BODY</label>
          <textarea
            className="form-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Post body..."
            required
          />

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'adding'}
          >
            {status === 'adding' ? 'POSTING...' : 'SUBMIT POST →'}
          </button>
        </form>
      )}
    </div>
  );
};

export default PostForm;