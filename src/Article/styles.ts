import styled from "styled-components";

export const Container = styled.article`
  position: relative;

  cursor: pointer;
  font-size: larger;
  border-top: 2px solid #ffffff20;
  border-bottom: 2px solid #00000020;
  background-color: #f7f7f7;

 > p {
    padding: 10px 20px;
    color: #171717;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1;
    transform: translateY(-2px);
  }
`;

export const ClickModal = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
