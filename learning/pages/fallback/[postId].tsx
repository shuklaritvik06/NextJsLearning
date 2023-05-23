import { GetStaticProps } from "next";
import { useRouter } from "next/router";

const Fallback = ({ postId }: { postId: string }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return <div>{postId}</div>;
};

export default Fallback;

export function getStaticPaths() {
  return {
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }],
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      postId: data.name
    }
  };
};
