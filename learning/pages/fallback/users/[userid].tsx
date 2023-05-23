import { GetStaticProps } from "next";

const Fallback = ({ userid }: { userid: string }) => {
  return <div>{userid}</div>;
};

export default Fallback;

export function getStaticPaths() {
  return {
    paths: [{ params: { userid: "1" } }, { params: { userid: "2" } }],
    fallback: "blocking"
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.userid}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      userid: data.name
    },
    revalidate: 10
  };
};
