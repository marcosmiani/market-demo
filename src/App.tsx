import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Products from "./Products";

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  width: 100vw;
  height: 100vh;
  flex: 1;
`;

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: auto;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Products />
    </Wrapper>
  );
}
