'use client';
import React from 'react';
import style from './registerTemplate.module.css';

import { useForm } from 'react-hook-form';
import { InputForm } from '@/features/shared/molecules/InputForm';

const validation = {
  required: {
    value: true,
    message: 'Nombre requerido'
  },
  minLength: {
    value: 2,
    message: 'El minimo de caracteres es 2'
  },
  maxLength: {
    value: 20,
    message: 'El maximo de caracteres es 20'
  }
};

export const RegisterTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  // procesar la data
  const onSubmit = handleSubmit(() => {
    reset();
  });

  return (
    <div className={style.containerGeneral}>
      <form action="" className={style.container} onSubmit={onSubmit}>
        <InputForm
          id={'username'}
          name={'username'}
          register={register}
          type={'email'}
          validations={validation}
          errors={errors}
          label="username"
        />
        <button>enviar</button>
      </form>
    </div>
  );
};
