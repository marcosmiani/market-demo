import { MouseEventHandler, ReactEventHandler } from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "./ArrowIcon";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

type PageProps = {
  selected?: boolean,
  disabled?: boolean
}

const PageButton = styled.button<PageProps>`
  color: #1ea4ce;
  cursor: pointer;
  border: none;
  background: none;
  vertical-align: center;
  align-items: center;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  border-radius: 2px;
  padding: 0 12px;
  ${({ selected }) => (selected ? selectedStyles : null)}
  ${({ disabled }) => (disabled ? disabledStyles : null)}
`;

const Elipsis = styled.div`
  color: #697488;
  vertical-align: middle;
  line-height: 27px;
  height: 40px;
`;

export default function Product({
  pages = 20,
  selectedPage = 1,
  onSelectPage = (page: Number, evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    console.info("page-click-not-implemented", page, evt)
}) {
  const pagesArray = Array(pages)
    .fill(null)
    .map((_, index) => index + 1);
  // Filter first pages
  let firstPagesArray = pagesArray.filter((page) => {
    return page < 5;
  });

  // Filter last pages
  let lastPagesArray = pagesArray.filter((page) => {
    return page > pages - 4;
  });

  // Control if the selected page is on the arrays of pages
  const middlePage =
    !firstPagesArray.includes(selectedPage) &&
    !lastPagesArray.includes(selectedPage);

  // Remove unnnecesary elements on the first and last arrays to make space for ellipsis
  if (middlePage) {
    firstPagesArray.pop();
    lastPagesArray.shift();
  }

  return (
    <Wrapper>
      <PageButton
        disabled={selectedPage === 1}
        onClick={(evt) => onSelectPage(1, evt)}
      >
        <ArrowIcon disabled={selectedPage === 1} />
        Prev
      </PageButton>
      {firstPagesArray.map((page) => (
        <PageButton
          selected={page === selectedPage}
          onClick={(evt) => onSelectPage(page, evt)}
        >
          {page}
        </PageButton>
      ))}
      {middlePage && (
        <>
          <Elipsis>...</Elipsis>
          <PageButton
            selected
            onClick={(evt) => onSelectPage(selectedPage, evt)}
          >
            {selectedPage}
          </PageButton>
          <Elipsis>...</Elipsis>
        </>
      )}
      {!middlePage && <Elipsis>...</Elipsis>}
      {lastPagesArray.map((page) => (
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
