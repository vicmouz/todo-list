import { useFormik } from 'formik';
import React from 'react';
import { ContainerInput } from './styles';

export default function AddBar({}) {
const formik = useFormik({});
  return(

    <ContainerInput>
      <form >

      <input placeholder="Digite aqui sua atividade" ></input>
      <button>Salvar</button>
      </form>
  </ContainerInput>
    )
}