import styled from "styled-components";
import Ammount from "../../Amount";
import BasketIcon from "./BasketIcon";

const Wrapper = styled.div`
  background-color: #147594;
  width: 129px;
  height: 76.64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAmmount = styled(Ammount)`
  margin-left: 8px;
`;

export default function Header(props: any) {
  return (
    <Wrapper {...props}>
      <BasketIcon />
      <StyledAmmount />
    </Wrapper>
  );
}
