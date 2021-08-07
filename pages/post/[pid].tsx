import { GetServerSideProps } from "next";
import Image from "next/image";
import { Post as PostType } from "../../Model/posts";
import userAvatar from "../../assets/avatar-svgrepo-com.svg";
const Post = (props: { post: PostType }) => {
  const {
    post: { userId, body, title },
  } = props;

  return (
    <div>
      <div className="mb-3">
        <h2 className="text-lg font-bold capitalize mb-2">{title}</h2>
        <p className="flex items-center">
          <Image
            className="rounded-full"
            width="30"
            height="30"
            src={userAvatar}
            alt="image of user"
          />
          <span className="text-md ml-2">User: {userId}</span>
        </p>
      </div>
      <p className="font-normal">{body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { pid },
  } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pid}`
  );
  const data = await response.json();
  return {
    props: { post: data },
  };
};

export default Post;
