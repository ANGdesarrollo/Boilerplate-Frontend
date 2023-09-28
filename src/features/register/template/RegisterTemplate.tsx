'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export type RegistrationFormFields = {
  username: string;
  password: string;
  confirmPassword: string;
};
export const RegisterTemplate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegistrationFormFields>();

  const onSubmit = (data: RegistrationFormFields) => console.log(data);
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Ingresa tu email y dale a subscribirse</label>
      <input type="email"
        {...register('username', {
          required: {
            value: true,
            message: 'correo requerido'
          },
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'correo no valido'
          }
        })}
      />{
        errors.username && <span>{errors.username.message}</span>
      }

      <label htmlFor="password">Password</label>
      <input type="password"
        {...register('password', {
          required:{
            value: true,
            message: 'Campo requerido'
          }, minLength: {
            value: 4,
            message: 'El minimo de caracteres es 4'
          },
          maxLength: {
            value: 10,
            message: 'El maximo de caracteres es 10'
          }
        })}
      />{
        errors.password && <span>{errors.password.message}</span>
      }

      <label htmlFor="confirmpassword">confirmar password</label>
      <input type="password"
        {...register('confirmPassword', { required:{
          value: true,
          message: 'campo requerido'
        },
        validate:(value) => {
          return value === watch('password') || 'los password no coinciden';
        }
        })}
      />{
        errors.confirmPassword &&  <span>{errors.confirmPassword.message}</span>
      }

      <button>enviar</button>
    </form>
  );
};
