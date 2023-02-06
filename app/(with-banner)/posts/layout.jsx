import { Counter } from "./Counter";

export default function PostsLayout({ children }) {
  return (
    <div>
      <Counter />
      <small>Home &bull;  Posts</small>
      {children}
    </div>
  );
}
