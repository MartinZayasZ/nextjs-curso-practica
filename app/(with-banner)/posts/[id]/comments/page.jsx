import { resolve } from "styled-jsx/css";
import Image from "next/image";

const fetchComments = async (id) => {
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  //throw new Error('Error al cargar los comentarios')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <Image
              src={`https://robohash.org/user-${comment.id}`}
              width={100}
              height={100}
              alt={'Comment Image'}
            />
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
