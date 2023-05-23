import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

const Blog = ({ data }: { data: string }) => {
  return <div>{data}</div>;
};

export default Blog;
export const getServerSideProps: GetServerSideProps = async function (context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=/blog",
        permanent: false
      }
    };
  }
  return {
    props: {
      data: session ? "Personal Posts" : "Free Posts"
    }
  };
};
