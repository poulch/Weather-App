import * as React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { FunctionComponent } from 'react';

const AuthorizedWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      <Segment inverted basic textAlign="center">
        <h3>Weather app</h3>
      </Segment>
      <Container>{children}</Container>
    </>
  );
};

export default AuthorizedWrapper;
