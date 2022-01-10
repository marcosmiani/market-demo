import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  font-size: 14px;
  line-height: 18px;
`;

const Value = styled.span`
  margin-left: 4px;
`;

type Props = {
  currency?: string,
  price?: number
}

export default function Ammount({ currency = "₺", price = 39.7, ...props }: Props) {
  return (
    <Wrapper {...props}>
      {currency}
      <Value>{price}</Value>
    </Wrapper>
  );
}
