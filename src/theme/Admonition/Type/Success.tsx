import React from 'react';
import AdmonitionLayout from '@theme/Admonition/Layout';
import type {Props} from '@theme/Admonition/Type/Success';
import SuccessIcon from '@site/static/img/success.svg';

const infimaClassName = 'alert alert--secondary'; 

const defaultProps = {
  icon: <SuccessIcon />,
  title: 'Шутка',
};

export default function AdmonitionTypeSuccess(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={infimaClassName}>
      {props.children}
    </AdmonitionLayout>
  );
}