import styled from "styled-components";
import Header from "./Header";
import Products from "./Products";

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
`;

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Products />
      <h2>Start editing to see some magic happen!</h2>
    </Wrapper>
  );
}
