import styled, { css } from "styled-components";

type Props = {
  children: any,
  secondary?: Boolean
}

const secondaryStyles = css`
  color: #1ea4ce;
  background-color: #f2f0fd;
`;

const primaryStyles = css`
  color: white;
  background-color: #1ea4ce;
`;

const Wrapper = styled.button<Props>`
  cursor: pointer;
  height: 24px;
  padding: 6px 16px;
  font-size: 12px;
  line-height: 12px;
  border: none;
  text-align: center;
  border-radius: 2px;
  font-family: "Open Sans", sans-serif;
  ${(props) => (props.secondary ? secondaryStyles : primaryStyles)}
`;

export default function Button({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
