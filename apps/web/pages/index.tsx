import { Button } from "ui/aurmor/Button";
import { getAllPosts } from "../lib/db";
import { ButtonRaw } from "ui/aurmor/raw/ButtonRaw";

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
      <Button label="My Button" color="red" />
      <ButtonRaw label="New button Raw" />
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
