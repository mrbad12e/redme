# Redux Posts

Ứng dụng React + Redux Toolkit lấy và quản lý bài viết từ [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).

---

## Stack Công Nghệ

| Công Cụ | Mục Đích |
|------|---------|
| [Bun](https://bun.sh) | Runtime, quản lý gói |
| [React 18](https://react.dev) | Framework UI |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Redux Toolkit](https://redux-toolkit.js.org) | State management |
| [React-Redux](https://react-redux.js.org) | Kết nối React với Redux |

---

## Cách Bắt Đầu

### Cài Đặt & Chạy

```bash
bun install
bun start
```

---

## Cấu Trúc Dự Án

```
src/
├── app/store.ts          # Redux store
├── features/posts/
│   ├── postsSlice.ts    # Slice (thunks + reducers)
│   ├── PostList.tsx     # Hiển thị danh sách bài viết
│   └── PostForm.tsx     # Form thêm bài viết mới
├── App.tsx
└── index.tsx
```

---

## Kiến Trúc

**Store** (`store.ts`) - Khởi tạo Redux store với slice bài viết.

**Slice** (`postsSlice.ts`) - Định nghĩa:
- `fetchPosts()` - Async thunk GET bài viết từ API
- `addPost()` - Async thunk POST bài viết mới
- Trạng thái: `idle`, `loading`, `adding`, `succeeded`, `failed`

**PostList** - Hiển thị danh sách bài viết, tự động lấy dữ liệu khi component mount.

**PostForm** - Form nhập tiêu đề và nội dung, submit thêm bài viết mới.
