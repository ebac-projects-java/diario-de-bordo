"use client";

import { useState } from "react";

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!titulo || !descricao || !data) return;

    adicionarEntrada(titulo, descricao, data);

    setTitulo("");
    setDescricao("");
    setData("");
  }

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