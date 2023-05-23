import { useRouter } from "next/router";

const Params = () => {
  const router = useRouter();
  return (
    <>
      <div>Params are {router.query.params}</div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Click
      </button>
    </>
  );
};

export default Params;
