import React, { FC, forwardRef, Ref } from 'react';

export type InputType = 'text' | 'email' | 'number';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type: InputType;
  placeholder: string;
  className?: string;
}

export const InputForm: FC<InputProps> = forwardRef(
  function InputForm(
    {
      id,
      name,
      label,
      type = 'text',
      className = '',
      placeholder,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    );
  }
);

InputForm.displayName = 'InputForm';
