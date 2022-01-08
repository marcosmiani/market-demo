import styled from "styled-components";
import ProductList from "./ProductList";
import Button from "../Button";

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TypeSelector = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export default function Products() {
  return (
    <Wrapper>
      <h1>Products</h1>
      <TypeSelector>
        <Button>Mug</Button>
        <Button secondary>Shirt</Button>
      </TypeSelector>
      <ProductList />
    </Wrapper>
  );
}
