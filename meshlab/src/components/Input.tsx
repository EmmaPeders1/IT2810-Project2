import React from 'react';
import { FC } from 'react';

import './css/Input.css';

interface InputProps {
  id?: string;
  className?: string;
  name?: string;
  label?: string;
  children?: JSX.Element;
  type?: string;
  autoComplete?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  dataTestid?: string;
}

const Input: FC<InputProps> = ({
  className,
  name,
  label,
  children,
  type = 'text',
  autoComplete,
  min,
  max,
  placeholder,
  value,
  onChange,
  onKeyDown,
  dataTestid
}) => {

  const inputElement = <input
    name={name}
    type={type}
    min={min}
    max={max}
    placeholder={placeholder}
    className={`input-field ${className}`}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    autoComplete={autoComplete}
    data-testid={dataTestid}
  />;

  if (!label && !children) return inputElement;

  return (
    <label className="input-label">
      {label || children}
      {inputElement}
    </label>
  );
};

export default Input;