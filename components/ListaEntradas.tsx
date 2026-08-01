"use client";

import { useCallback } from "react";
import { Entrada } from "../types/Entrada";

interface Props {
  entradas: Entrada[];
  removerEntrada: (id: number) => void;
}

function ListaEntradas({
  entradas,
  removerEntrada,
}: Props) {
  const handleRemover = useCallback(
    (id: number) => {
      removerEntrada(id);
    },
    [removerEntrada]
  );

  if (entradas.length === 0) {
    return <p>Nenhuma entrada cadastrada.</p>;
  }

  return (
    <div>
      {entradas.map((entrada) => (
        <div key={entrada.id} className="card">
          <h2>{entrada.titulo}</h2>

          <p>{entrada.descricao}</p>

          <small>{entrada.data}</small>

          <br />
          <br />

          <button
            onClick={() => handleRemover(entrada.id)}
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaEntradas;