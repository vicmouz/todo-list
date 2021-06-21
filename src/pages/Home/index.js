import React, { useCallback, useEffect, useState } from 'react';
import AddBar from '../../components/AddBar';
import ItemList from '../../components/ItemList';
import LogoApp from '../../components/LogoApp';
import api from '../../services/api';

import { Container, ContainerActivities } from './styles';

export default function Home({}) {
  const [activities, setActivities] = useState([
  ]);
const getActivities = useCallback(async () => {
  const {data} = await api.get('todos')
  setActivities(data)
  console.log(data)
}, [])

  useEffect(() => {
    getActivities();
  },[getActivities])
  return (
    <Container>
      <LogoApp/>
      <AddBar/>
      <ContainerActivities>

        {activities.length > 0 ? (
          <>
          {activities.map((item) => 
            <ItemList name={item.data.name} id={item.id}></ItemList>
          )}
          </>
        ) : (
          <h1>Sem atividades cadastradas</h1>
        )}

      </ContainerActivities>
    </Container>
  )
}