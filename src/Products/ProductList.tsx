import styled from "styled-components";
import Product from "./Product";

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flow;
  flex-wrap: wrap;
`;

export default function Products({ items = [{}, {}, {}] }) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </Wrapper>
  );
}
