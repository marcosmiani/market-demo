import styled from "styled-components";
import Logo from "./Logo";
import Basket from "./Basket";

const Wrapper = styled.div`
  position: relative;
  background-color: #1ea4ce;
  width: 100%;
  height: 76.64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBasket = styled(Basket)`
  position: absolute;
  right: 104px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <StyledBasket />
    </Wrapper>
  );
}
