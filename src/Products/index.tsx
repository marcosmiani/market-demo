import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
`;

export default function Products() {
  return (
    <Wrapper>
      <h1>Products</h1>
      <button>Mug</button>
      <button>Shirt</button>
      <div>Start editing to see some magic happen!</div>
    </Wrapper>
  );
}
