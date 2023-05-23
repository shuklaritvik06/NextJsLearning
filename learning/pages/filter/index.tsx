import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Filter = ({ name }: { name: string }) => {
  const router = useRouter();
  return (
    <>
      <div>{name}</div>
      <button
        onClick={() => {
          router.push("?userno=9");
        }}
      >
        Click to get
      </button>
    </>
  );
};

export default Filter;

export const getServerSideProps: GetServerSideProps = async function (context) {
  const { query } = context;
  const { userno } = query;
  const queryString = userno ? userno : "1";
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${queryString}`
  );
  const data = await response.json();
  return {
    props: {
      name: data.name
    }
  };
};
