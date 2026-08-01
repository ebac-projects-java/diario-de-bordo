"use client";

import { useCallback, useState } from "react";

interface Props {
  adicionarEntrada: (
    titulo: string,
    descricao: string,
    data: string
  ) => void;
}

export default function FormularioEntrada({
  adicionarEntrada,
}: Props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!titulo.trim() || !descricao.trim() || !data) return;

      adicionarEntrada(
        titulo.trim(),
        descricao.trim(),
        data
      );

      setTitulo("");
      setDescricao("");
      setData("");
    },
    [titulo, descricao, data, adicionarEntrada]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button type="submit">
        Salvar
      </button>
    </form>
  );
}