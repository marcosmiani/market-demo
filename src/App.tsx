import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
`;

export default function App() {
  return (
    <Wrapper>
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Wrapper>
  );
}
