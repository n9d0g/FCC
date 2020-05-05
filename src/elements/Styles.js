import styled from 'styled-components';

export const theme = {
  primary: 'teal',
  secondary: 'green',
  font: 'sans-serif',
  background: 'red'
}

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
  margin: auto;
  width: 50%;
  text-align: center;
  font-size: 3rem;
`;

export const H2 = styled.h2`
  font-family: ${(props) => props.theme.font};
  margin: auto;
  width: 50%;
  text-align: center;
  font-size: 2rem;
`;

export const H3 = styled.h3`
  font-family: ${(props) => props.theme.font};
  margin: auto;
  width: 50%;
  text-align: center;
  font-size: 1rem;
`;