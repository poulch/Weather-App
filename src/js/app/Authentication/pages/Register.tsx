import * as React from 'react';
import { Card, Container, Grid } from 'semantic-ui-react';
import RegisterForm from '../components/Register';

const Register = () => {
  return (
    <Container className="center">
      <Grid verticalAlign="middle">
        <Grid.Column width={6} className="center">
          <Card fluid>
            <Card.Content>
              <h1>Register</h1>
              <RegisterForm></RegisterForm>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Register;
