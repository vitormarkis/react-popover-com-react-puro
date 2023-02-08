import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  left: 0;
  /* top: calc(100% + 12px); */
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 0;

  width: min-content;
  padding-block: 16px;
  border-radius: 12px;

  background-color: #222;

  > div {
    background-color: transparent;
    padding: 10px 12px;

    border-top: 1px solid #444;

    &:last-of-type {
      border-bottom: 1px solid #444;
    }

    &:hover {
      background-image: linear-gradient(0deg, #444 50%, #494949 50%);
    }
  }

  div,
  p {
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    text-align: left;
    white-space: nowrap;
    width: 100%;

    
  }
`
