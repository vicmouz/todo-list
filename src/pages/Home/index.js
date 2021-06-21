import React, { useCallback, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import AddBar from "../../components/AddBar";
import ItemList from "../../components/ItemList";
import LogoApp from "../../components/LogoApp";
import api from "../../services/api";
import { colors } from "../../styles/themes";

import { Container, ContainerActivities } from "./styles";

export default function Home({}) {
  const [loading, setLoading] = useState(false);

  const [activities, setActivities] = useState([]);
  const getActivities = useCallback(async (loading) => {
    setLoading(loading);
    const { data } = await api.get("todos");
    setActivities(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getActivities(true);
  }, [getActivities]);


  return (
    <Container>
      <LogoApp />
      <AddBar reload={() => getActivities(loading)} />
      <>
        {!loading ? (
          <ContainerActivities>
            {activities.length > 0 ? (
              <>
                {activities.map((item) => (
                  <ItemList
                    name={item.data.todo}
                    status={item.data.status}
                    id={item.id}
                    reload={() => getActivities(loading)}
                  ></ItemList>
                ))}
              </>
            ) : (
              <h1>Sem atividades cadastradas</h1>
            )}
          </ContainerActivities>
        ) : (
          <PulseLoader size={20} color={colors.secondary} loading={loading} />
        )}
      </>
    </Container>
  );
}
