import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import { ContainerInput } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { colors } from "../../styles/themes";

export default function AddBar({ reload }) {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      registerTODO(values);
    },
  });
  const registerTODO = useCallback(
    async (values) => {
      setLoading(true);
      const { data } = await api.post("new_todo", {
        todo: values.name,
      });
      setLoading(false);
      if (data.msg === "success") {
        toast.success("TODO cadastrado com sucesso", {
          position: toast.POSITION.TOP_RIGHT,
        });
        formik.resetForm();
        reload();
      } else {
        toast.error("Ocorreu um erro ao tentar cadastrar o TODO", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    [formik]
  );
  return (
    <>
      {!loading ? (
        <ContainerInput>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <input
              placeholder="Digite aqui sua atividade"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text"
            ></input>
            <button type="submit">Salvar</button>
          </form>
        </ContainerInput>
      ) : (
        <>
          <PulseLoader size={15} color={colors.secondary} loading={loading} />
        </>
      )}
    </>
  );
}
