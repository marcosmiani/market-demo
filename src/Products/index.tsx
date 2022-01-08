import styled from "styled-components";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Button from "../Button";

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 38.36px;
`;

const ProductHeader = styled.h1`
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
  margin: 0px;
  color: #6f6f6f;
`;

const TypeSelector = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export default function Products() {
  return (
    <Wrapper>
      <ProductHeader>Products</ProductHeader>
      <TypeSelector>
        <Button>Mug</Button>
        <Button secondary>Shirt</Button>
      </TypeSelector>
      <ProductList />
      <Pagination />
    </Wrapper>
  );
}
