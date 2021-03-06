import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled defaultValue="" hidden>
          Select an option
        </option>

        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
    </Container>
  );
};

export default Select;
