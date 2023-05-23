import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  return <div>Comment {router.query.comment}</div>;
};

export default Comment;
