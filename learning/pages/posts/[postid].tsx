import { GetStaticProps } from "next";
import React from "react";

const P = ({ postId }: { postId: string }) => {
  return <div>{postId}</div>;
};

export default P;

export function getStaticPaths() {
  return {
    paths: [{ params: { postid: "1" } }, { params: { postid: "2" } }],
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.postid}`
  );
  const data = await response.json();
  return {
    props: {
      postId: data.name
    }
  };
};
