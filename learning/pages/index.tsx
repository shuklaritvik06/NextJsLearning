import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  font-family: "Courier New", Courier, monospace;
`;
export default function Home() {
  return (
    <>
      <Title>My page</Title>
    </>
  );
}
