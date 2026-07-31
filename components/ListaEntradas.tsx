"use client";

import { Entrada } from "../types/Entrada";

interface Props {
  entradas: Entrada[];
  removerEntrada: (id: number) => void;
}

export default function ListaEntradas({
  entradas,
  removerEntrada,
}: Props) {
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
            onClick={() => removerEntrada(entrada.id)}
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}