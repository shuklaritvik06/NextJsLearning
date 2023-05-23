import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Image
        src={
          "https://images.unsplash.com/photo-1684777883876-9342a676f7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        }
        width={100}
        height={100}
        alt=""
      />
      <div>Hello</div>
    </>
  );
};

export default SignUp;
