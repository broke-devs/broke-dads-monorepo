import { Button } from "ui/Button";
import { getAllPosts } from "../lib/db";

export async function getStaticProps(context) {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
export default function Web({ posts }) {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      {posts ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div>
                <h1>{post.title}</h1>
                <p>
                  Author: <span>{post.author.name}</span>
                </p>

                <p>{post.content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
