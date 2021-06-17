import React, { useCallback } from 'react';
import icon_trash from '../../assets/icons/icon_trash.png'
import CheckBox from '../CheckBox';
import { ContainerItem, Line } from './styles';


export default function ItemList({name, id}) {
  const deleteActivity = useCallback(async id =>{
console.log('deletei a atividade ', id);
  },[])
  return (
    <>
    <ContainerItem>
      <CheckBox/>
      <p>{name}</p>
      <img src={icon_trash} alt="Apagar atividade" onClick={deleteActivity(id)} />

    </ContainerItem>
    <Line/>
    </>
  )
}