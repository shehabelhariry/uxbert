import Image from "next/image";
import Link from "next/link";
import userAvatar from "../assets/avatar-svgrepo-com.svg";
import { Post as PostType } from "../Model/posts";

const Post = (props: PostType) => {
  const { title, body, userId, id } = props;
  return (
    <Link href={`/post/${id}`}>
      <a className="display-inline-block h-full rounded-lg shadow-md hover:shadow-xl">
        <div>
          <img
            src={`https://picsum.photos/id/${id}/400/300`}
            className="w-full rounded-tl-lg rounded-tr-lg object-cover h-56 "
          />
        </div>
        <div className="p-4">
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
      </a>
    </Link>
  );
};

export default Post;
