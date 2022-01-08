import styled, { css } from "styled-components";

const secondayStyles = css`
  color: #1ea4ce;
  background-color: #f2f0fd;
`;

const primaryStyles = css`
  color: white;
  background-color: #1ea4ce;
`;

const Wrapper = styled.button`
  height: 24px;
  padding: 6px 16px;
  font-size: 12px;
  line-height: 12px;
  border: none;
  text-align: center;
  border-radius: 2px;
  font-family: "Open Sans", sans-serif;
  ${({ secondary }) => (secondary ? secondayStyles : primaryStyles)}
`;

export default function Button({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
