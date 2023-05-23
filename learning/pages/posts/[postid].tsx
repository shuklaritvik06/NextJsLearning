import { PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

const P = ({ postId }: { postId: string }) => {
  return (
    <div>
      {postId}
      {process.env.NEXT_PUBLIC_USERNAME}
    </div>
  );
};

export default P;

export function getStaticPaths() {
  return {
    paths: [{ params: { postid: "1" } }, { params: { postid: "2" } }],
    fallback: false
  };
}

export const getStaticProps = async ({
  params,
  preview,
  previewData
}: {
  params: ParsedUrlQuery;
  preview: boolean;
  previewData: {
    data: string;
  };
}) => {
  console.log(process.env.USERNAME);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.postid}`
  );
  const data = await response.json();
  if (preview) {
    return {
      props: {
        postId: "preview " + previewData.data
      }
    };
  }
  return {
    props: {
      postId: data.name
    }
  };
};
