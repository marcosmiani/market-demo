import styled, { css } from "styled-components";
import ArrowIcon from "./ArrowIcon";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
  gap: 9px;
`;

const disabledStyles = css`
  color: #697488;
`;

const selectedStyles = css`
  color: white;
  background-color: #1ea4ce;
`;

const PageButton = styled.button`
  color: #1ea4ce;
  cursor: pointer;
  border: none;
  background: none;
  vertical-align: center;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  border-radius: 2px;
  ${({ selected }) => (selected ? selectedStyles : null)}
  ${({ disabled }) => (disabled ? disabledStyles : null)}
`;

export default function Product({
  pages = 20,
  selectedPage = 10,
  onSelectPage = (page, evt) =>
    console.info("page-click-not-implemented", page, evt)
}) {
  const pagesArray = Array(pages)
    .fill(null)
    .map((_, index) => index + 1)
    .filter((page) => {
      return page > pages - 4 || page < 5 || page === selectedPage;
    });

  return (
    <Wrapper>
      <PageButton
        disabled={selectedPage === 1}
        onClick={(evt) => onSelectPage(1, evt)}
      >
        <ArrowIcon disabled={selectedPage === 1} />
        Prev
      </PageButton>
      {pagesArray.map((page) => (
        <PageButton
          selected={page === selectedPage}
          onClick={(evt) => onSelectPage(page, evt)}
        >
          {page}
        </PageButton>
      ))}
      <PageButton
        disabled={selectedPage === pages}
        onClick={(evt) => onSelectPage(pages, evt)}
      >
        Next
        <ArrowIcon rotate={180} disabled={selectedPage === pages} />
      </PageButton>
    </Wrapper>
  );
}
