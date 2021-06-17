import React from 'react';
import { Checkbox } from './styles';

// eslint-disable-next-line react/prop-types
export default function CheckBox({ onChange }) {
  return (
    <Checkbox>
      <input type="checkbox" onChange={onChange} />
    </Checkbox>
  );
}