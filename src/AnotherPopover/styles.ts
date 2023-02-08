import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: calc(100% + 12px);
  z-index: 2;

  display: flex;
  flex-direction: column;

  width: min-content;
  padding-block: 16px;
  border-radius: 12px;

  background-color: #222;

  div {
    font-size: 16px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    padding-inline: 12px;
    cursor: pointer;
    color: white;
    text-align: left;
    white-space: nowrap;
    width: 100%;
    border: none;
    background-color: transparent;

    border-top: 1px solid #444;

    &:last-of-type {
      border-bottom: 1px solid #444;
    }

    &:hover {
      background-image: linear-gradient(0deg, #444 50%, #494949 50%);
    }
  }
`;
