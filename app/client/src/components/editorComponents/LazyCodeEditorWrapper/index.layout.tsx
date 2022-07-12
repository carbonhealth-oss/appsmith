import styled from "styled-components";

export const ReadOnlyInput = styled.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0) !important;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  min-height: inherit;
  height: -webkit-fill-available !important;
`;

export const HighlighedCodeContainer = styled("div")<{
  containsCode: boolean;
}>`
  width: 100%;
  background-color: #fff !important;
  font-family: monospace !important;
  font-weight: 400 !important;
  line-height: 21px !important;

  min-height: inherit;
  padding-top: 6px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  padding-bottom: ${({ containsCode }) =>
    containsCode ? "6px" : 0}; !important;

  pre {
    margin: 0 !important;
    overflow: hidden !important;
    font-size: 14px !important;
    font-family: monospace !important;
    padding: 0 !important;
    background: white !important;

    word-wrap: break-word !important;
    white-space: pre-wrap !important;
    word-break: normal !important;

    code {
      background: white !important;
      font-family: monospace !important;
      line-height: 21px !important;
      font-size: 14px !important;
      color: ${({ containsCode }) =>
        containsCode ? "#063289" : "inherit"} !important;

      .token {
        color: #063289 !important;
      }
    }
  }
`;

export const LazyEditorWrapper = styled("div")`
  position: relative;
`;

export const ContentWrapper = styled("div")<{ containsCode: boolean }>`
  overflow: hidden;
  height: ${({ containsCode }) => (containsCode ? "auto" : "36px")};
  min-height: 34px;
  border: 1px solid;
  border-color: inherit;

  div:nth-child(1) {
    min-height: 34px;
  }
`;

export const NoCodeText = styled("div")`
  color: rgb(75, 72, 72) !important;
`;
