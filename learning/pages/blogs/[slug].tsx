import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();

  return <div>Hello {router.query.slug}</div>;
};

export default BlogPage;
