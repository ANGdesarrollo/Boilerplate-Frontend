'use client';
import React from 'react';
import { InputForm } from '@/features/shared/molecules/InputForm';
import { useForm } from 'react-hook-form';

export type RegistrationFormFields = {
  username: string;
};
export const RegisterTemplate = () => {
  const {
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormFields>();

  const onSubmit = handleSubmit((data) => {
    const lala = data;
    const lele = errors;
  });
  return (
    <form onSubmit={onSubmit}>
      <InputForm id="username" name="username" label="username" placeholder="Username" type="text"/>
      <button className="mx-2  bg-blue text-sm  shadow-lg shadow-purple" type={'submit'}>Submit</button>
    </form>
  );
};
