import * as React from 'react';
import { ErrorMessage } from 'formik';
import { FunctionComponent } from 'react';
import { Message as UIMessage, StrictMessageProps } from 'semantic-ui-react';

interface IProps {
  name: string;
}

const Message: FunctionComponent<IProps & StrictMessageProps> = props => {
  return (
    <ErrorMessage name={props.name}>
      {msg => <UIMessage {...props}>{msg}</UIMessage>}
    </ErrorMessage>
  );
};

export default Message;
