import React, { useCallback, useState } from "react";
import icon_trash from "../../assets/icons/icon_trash.png";
import api from "../../services/api";
import CheckBox from "../CheckBox";
import { ContainerItem, Line } from "./styles";
import { toast } from "react-toastify";
import ModalChange from "../ModalChange";

export default function ItemList({ name, id, reload, status }) {
  const [openModal, setOpenModal] = useState(false);

  const deleteActivity = useCallback(async (id) => {
    const { data } = await api.delete(`/todos/remove/${id}`);
    if (data.msg === "object removed") {
      toast.success("TODO removido com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      reload();
    } else {
      toast.error("Ocorreu um erro ao tentar remover o TODO", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, []);

  const doneTODO = useCallback(async (id, statusItem) => {
    console.log("here");
    const { data } = await api.put(`/todos/update/${id}`, {
      status: statusItem === 0 ? 1 : 0,
    });
    if (data.msg === "object updated" && statusItem === 0) {
      toast.success("TODO concluído com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if(data.msg !== "object updated" && statusItem === 0) {
      toast.error("Ocorreu um erro ao concluir o TODO", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    reload();
  }, []);

  function handleClose() {
    setOpenModal(false);
  }

  return (
    <>
      <ModalChange
        closeModal={handleClose}
        open={openModal}
        id={id}
        text={name}
        reload={reload}
      />
      <ContainerItem>
        <CheckBox onChange={()=> doneTODO(id, status)}/>
        {status === 1 ? (
          <strike >{name}</strike>
        ) : (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            {name}
          </p>
        )}
        <img
          src={icon_trash}
          alt="Apagar atividade"
          onClick={() => deleteActivity(id)}
        />
      </ContainerItem>
      <Line />
    </>
  );
}
