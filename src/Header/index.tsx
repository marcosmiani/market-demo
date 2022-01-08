import styled from "styled-components";
import Logo from "./Logo";

const Wrapper = styled.div`
  background-color: #1ea4ce;
  width: 100%;
  height: 76.64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}
