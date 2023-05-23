import styled from "styled-components";
import Header from "@/layout/Header";
import Button from "components/Button";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  font-family: "Courier New", Courier, monospace;
`;
export default function Home({ preview }: { preview: string }) {
  return (
    <>
      <Header />
      <Title>My page</Title>
      <Button />
      <div>{preview}</div>
    </>
  );
}
