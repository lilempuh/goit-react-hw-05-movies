import styled from '@emotion/styled';

export const Container = styled.div`
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: Cursive, Times New Roman, 'Courier New', sans-serif;
    background-color: #fff;
    color: #010101;
  }
  img,
  svg {
    display: block;
    max-width: 100%;
    heigh: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
