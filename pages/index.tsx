import { GetServerSideProps } from "next";
import Post from "../components/Post";
import { Post as PostType } from "../Model/posts";

const Posts = (props: { data: PostType[] }) => {
  const data = props.data;
  return (
    <div className="grid gap-6  sm:grid-cols-1 md:grid-cols-3 lg:rid-cols-4 ">
      {data.map(({ title, body, id, userId }) => {
        return (
          <Post key={id} id={id} title={title} body={body} userId={userId} />
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (__) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: { data },
  };
};

export default Posts;
