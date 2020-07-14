import React from 'react';

import { AppContainer } from './styles.js';

const Container = ({ children }) => {
  return (
    <AppContainer>
      {children}
    </AppContainer>
  )
};

export default Container;
