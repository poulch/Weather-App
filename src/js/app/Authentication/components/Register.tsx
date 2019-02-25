import * as React from 'react';
import { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { compose } from 'recompose';
import { Button, Form } from 'semantic-ui-react';
import { RouterProps, withRouter } from 'react-router';
import { Field, FormikProps, withFormik, WithFormikConfig } from 'formik';
import Message from '../../Shared/components/Form/Message';
import Input from '../../Shared/components/Form/Input';
import { IUser } from '../types';

interface IProps extends RouterProps {}

interface IFormValues extends IUser {}

const RegisterForm: FunctionComponent<IProps & FormikProps<IFormValues>> = ({
  handleSubmit,
  isSubmitting
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Name</label>
        <Field component={Input} type="text" name="name" placeholder="Name" />
        <Message name="name" negative size="tiny" />
      </Form.Field>
      <Form.Field>
        <label>Surname</label>
        <Field
          component={Input}
          type="text"
          name="surname"
          placeholder="Surname"
        />
        <Message name="surname" negative size="tiny" />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Field
          component={Input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Message name="email" negative size="tiny" />
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <Field component={Input} type="text" name="phone" placeholder="Phone" />
        <Message name="phone" negative size="tiny" />
      </Form.Field>
      <Form.Field>
        <label>Street</label>
        <Field
          component={Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <Message name="street" negative size="tiny" />
      </Form.Field>
      <Form.Field>
        <label>City</label>
        <Field component={Input} type="text" name="city" placeholder="City" />
        <Message name="city" negative size="tiny" />
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
      <Form.Field>
        <label>Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          autoComplete="off"
        />
        <Message name="confirmPassword" negative size="tiny" />
      </Form.Field>
      <div className="text-center">
        <Button primary type="submit" disabled={isSubmitting}>
          Register
        </Button>
      </div>
    </Form>
  );
};

const formikConfiguration: WithFormikConfig<IProps, IFormValues> = {
  mapPropsToValues: () => ({
    name: '',
    surname: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    password: '',
    confirmPassword: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .label('Name')
      .required(),
    surname: Yup.string()
      .label('Surname')
      .required(),
    email: Yup.string()
      .label('Email')
      .email()
      .required(),
    phone: Yup.string()
      .label('Phone')
      .matches(/\d+/, 'Phone must be a `number`')
      .required(),
    street: Yup.string()
      .label('Street')
      .required(),
    city: Yup.string()
      .label('City')
      .required(),
    password: Yup.string()
      .label('Password')
      .min(6)
      .required(),
    confirmPassword: Yup.string()
      .label('Confirm password')
      .min(6)
      .oneOf([Yup.ref('password')], 'Password do not match')
      .required()
  }),
  handleSubmit: (values, { props: { history } }) => {
    history.push('/login');
  }
};

export default compose(
  withRouter,
  withFormik(formikConfiguration)
)(RegisterForm);
