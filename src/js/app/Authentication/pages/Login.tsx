import * as React from 'react';
import { Card, Container, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login';

const Login = () => {
  return (
    <Container className="center">
      <Grid verticalAlign="middle">
        <Grid.Column width={6} className="center">
          <Card fluid>
            <Card.Content>
              <h1 className="text-center">Login</h1>
              <LoginForm />
            </Card.Content>
          </Card>
          <Segment textAlign="center">
            You don't have an account? <Link to="/register">Sign up!</Link>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Login;
