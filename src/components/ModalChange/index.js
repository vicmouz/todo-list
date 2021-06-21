import React, { useState } from "react";
import { Fade } from "@material-ui/core";
import { ModalCustom, Container } from "./styles";
import { useFormik } from "formik";
import { useCallback } from "react";
import { Logo } from "../LogoApp/styles";
import LogoApp from "../LogoApp";
import { ContainerInput } from "../AddBar/styles";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import api from "../../services/api";
import { colors } from "../../styles/themes";

export default function ModalChange({ open, closeModal, id, text, reload }) {
  const [loading, setLoading] = useState(false);
  const renameTODO = useCallback(async (id, new_text) => {
    setLoading(true);
    const { data } = await api.put(`/todos/update/${id}`, {
      todo: new_text,
    });
    if (data.msg === "object updated") {
      toast.success("TODO alterado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Ocorreu um erro ao alterar o TODO", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setLoading(false);
    closeModal();
    reload(true);
  }, []);
  const formik = useFormik({
    initialValues: {
      todo: "",
    },
    onSubmit: (value) => {
      renameTODO(id, value.todo);
    },
  });

  return (
    <ModalCustom
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      onClose={closeModal}
      open={open}
    >
      <Fade in={open}>
        <Container>
          <LogoApp />
          <h1>
            TODO atual: <span>{text}</span>
          </h1>
          {!loading ? (
            <ContainerInput>
              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <input
                  placeholder="Digite aqui o novo nome da sua atividade"
                  name="todo"
                  value={formik.values.todo}
                  onChange={formik.handleChange}
                  type="text"
                ></input>
                <button type="submit">Salvar</button>
              </form>
            </ContainerInput>
          ) : (
            <>
              <PulseLoader
                size={15}
                color={colors.secondary}
                loading={loading}
              />
            </>
          )}
        </Container>
      </Fade>
    </ModalCustom>
  );
}
