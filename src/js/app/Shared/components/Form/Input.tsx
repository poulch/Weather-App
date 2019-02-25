import { FieldProps } from 'formik';
import { Form } from 'semantic-ui-react';
import * as React from 'react';
import { get } from 'lodash';

const Input = ({
  field,
  form: { touched, errors, values },
  ...props
}: FieldProps<{
  placeholder: string;
}>) => (
  <Form.Input
    {...props}
    {...field}
    error={get(touched, field.name) && !!get(errors, field.name)}
  />
);

export default Input;
