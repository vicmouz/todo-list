import React, { useCallback, useEffect, useState } from 'react';
import AddBar from '../../components/AddBar';
import ItemList from '../../components/ItemList';
import LogoApp from '../../components/LogoApp';
import api from '../../services/api';

import { Container, ContainerActivities } from './styles';

export default function Home({}) {
  const [activities, setActivities] = useState([
    {id: 1,name: 'Aceitar desafio'},
    {id: 2,name: 'Aceitar desafio'},
    {id: 3,name: 'Aceitar desafio'},
    {id: 4,name: 'Aceitar desafio'},
  ]);
const getActivities = useCallback(async () => {
  const {data} = await api.get('activities')
  setActivities(data)
}, [])

  useEffect(() => {
    getActivities();
  })
  return (
    <Container>
      <LogoApp/>
      <AddBar/>
      <ContainerActivities>

        {activities.length > 0 ? (
          <>
          {activities.map((item) => 
            <ItemList name={item.name} id={item.id}></ItemList>
          )}
          </>
        ) : (
          <h1>Sem atividades cadastradas</h1>
        )}

      </ContainerActivities>
    </Container>
  )
}