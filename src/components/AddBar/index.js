import React from 'react';
import { ContainerInput } from './styles';

export default function AddBar({}) {
  return(

    <ContainerInput>
      <input placeholder="Digite aqui sua atividade" ></input>
      <button>Salvar</button>
  </ContainerInput>
    )
}