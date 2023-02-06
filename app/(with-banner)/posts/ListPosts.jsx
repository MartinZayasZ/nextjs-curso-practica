import { LikeButton } from "./LikeButton";
import Link from "next/link";
import Image from "next/image";

const fetchPosts = () => {
  console.log("query consulting");
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  }).then((res) => res.json());
};

export default async function ListPosts() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.slice(0, 50).map((post) => {
        return (
          <article key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <Image
                src={`https://robohash.org/user-${post.id}`}
                width={100}
                height={100}
                alt={"Post Image"}
              />
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <LikeButton id={post.id} />
            </Link>
          </article>
        );
      })}
    </>
  );
}
