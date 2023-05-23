import { GetServerSideProps } from "next";
import { User } from "../users";

const ServerSideProps = ({ postId }: { postId: User[] }) => {
  return (
    <div>
      {postId.map((element) => {
        return <div key={Math.random()}>{element.name}</div>;
      })}
    </div>
  );
};
export default ServerSideProps;

export const getServerSideProps: GetServerSideProps = async function (context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  const { req, res, query } = context;
  res.setHeader("Set-Cookie", "name=value");
  console.log(req.cookies);
  console.log(query);

  return {
    props: {
      postId: data.slice(0, 3)
    }
  };
};
