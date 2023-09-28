import React from 'react';
import { InputForm } from '@/features/shared/molecules/InputForm';

export const RegisterTemplate = () => {
  return (
    <form>
      <InputForm id="username" name="username" label="username" placeholder="Username" type="text"/>
    </form>
  );
};
