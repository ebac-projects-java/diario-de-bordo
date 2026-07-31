"use client";

import FormularioEntrada from "../components/FormularioEntrada";
import ListaEntradas from "../components/ListaEntradas";
import useLocalStorage from "../hooks/useLocalStorage";
import { Entrada } from "../types/Entrada";
import InstalarPWA from "../components/InstalarPWA";

export default function Home() {
  const [entradas, setEntradas] = useLocalStorage<Entrada[]>(
    "diario",
    []
  );

  function adicionarEntrada(
    titulo: string,
    descricao: string,
    data: string
  ) {
    const novaEntrada: Entrada = {
      id: Date.now(),
      titulo,
      descricao,
      data,
    };

    setEntradas([...entradas, novaEntrada]);
  }

  function removerEntrada(id: number) {
    setEntradas(
      entradas.filter((entrada) => entrada.id !== id)
    );
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Diário de Bordo</h1>
      <InstalarPWA />

      <FormularioEntrada
        adicionarEntrada={adicionarEntrada}
      />

      <ListaEntradas
        entradas={entradas}
        removerEntrada={removerEntrada}
      />
    </main>
  );
}