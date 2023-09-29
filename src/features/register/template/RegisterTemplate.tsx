"use client";
import React from "react";
import style from "./registerTemplate.module.css";

import { useForm } from "react-hook-form";
import { InputForm } from "@/features/shared/molecules/InputForm";
import {
  validationPassword,
  validationUsername,
} from "@/features/register/constants/FormValidations";

export const RegisterTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // procesar la data
  const onSubmit = handleSubmit(() => {
    reset();
  });

  return (
    <div className={style.containerGeneral}>
      <form action="" className={style.container} onSubmit={onSubmit}>
        <InputForm
          id={"username"}
          name={"username"}
          register={register}
          type={"email"}
          validations={validationUsername}
          errors={errors}
          label="username"
        />
        <InputForm
          id={"password"}
          name={"password"}
          register={register}
          type={"password"}
          validations={validationPassword}
          errors={errors}
          label="password"
        />
        <InputForm
          id={"repeatPassword"}
          name={"repeatPassword"}
          register={register}
          type={"password"}
          validations={validationPassword}
          errors={errors}
          label="Repeat password"
        />
        <button>enviar</button>
      </form>
    </div>
  );
};
