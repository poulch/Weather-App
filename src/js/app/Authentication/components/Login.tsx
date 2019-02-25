import * as React from 'react';
import { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { Button, Form } from 'semantic-ui-react';
import { compose } from 'recompose';
import { Field, FormikProps, withFormik, WithFormikConfig } from 'formik';
import Input from '../../Shared/components/Form/Input';
import { withAuthContext } from '../hoc/withAuthContext';
import { IAuthContext } from '../context/AuthContext';
import Message from '../../Shared/components/Form/Message';
import { IUser } from '../types';

interface IFormValues extends Pick<IUser, 'email' | 'password'> {}

interface IProps {
  authContext: IAuthContext;
}

const LoginForm: FunctionComponent<IProps & FormikProps<IFormValues>> = ({
  handleSubmit,
  isSubmitting
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>E-mail</label>
        <Field
          component={Input}
          type="text"
          name="email"
          placeholder="E-mail"
        />
        <Message name="email" negative size="tiny" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <Message name="password" negative size="tiny" />
      </Form.Field>
      <div className="text-center">
        <Button primary type="submit" disabled={isSubmitting}>
          Login
        </Button>
      </div>
    </Form>
  );
};

const formikConfiguration: WithFormikConfig<IProps, IFormValues> = {
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .email()
      .required(),
    password: Yup.string()
      .label('Password')
      .min(6)
      .required()
  }),
  handleSubmit: (values, { props: { authContext } }) => {
    authContext.login();
  }
};

export default compose(
  withAuthContext,
  withFormik(formikConfiguration)
)(LoginForm);
