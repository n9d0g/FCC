import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../elements/Button';
import Statements from '../elements/Statements'
import {theme, H1, H2, H3} from '../elements/Styles'
import Rotate from '../elements/Animations'

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <H1>Welcome to Freedom in Christ Church!</H1><br/>
      <H2>{Statements.vision}</H2><br/>
      <H3>{Statements.mission}</H3>
      <Rotate>
        <Button color="primary">Create</Button>
      </Rotate>
    </ThemeProvider>
  );
}