"use client";

import { useCallback } from "react";
import FormularioEntrada from "../components/FormularioEntrada";
import ListaEntradas from "../components/ListaEntradas";
import InstalarPWA from "../components/InstalarPWA";
import useLocalStorage from "../hooks/useLocalStorage";
import { Entrada } from "../types/Entrada";

export default function Home() {
  const [entradas, setEntradas] = useLocalStorage<Entrada[]>("diario", []);

  const adicionarEntrada = useCallback(
    (titulo: string, descricao: string, data: string) => {
      const novaEntrada: Entrada = {
        id: Date.now(),
        titulo,
        descricao,
        data,
      };

      setEntradas((prev) => [...prev, novaEntrada]);
    },
    [setEntradas]
  );

  const removerEntrada = useCallback(
    (id: number) => {
      setEntradas((prev) =>
        prev.filter((entrada) => entrada.id !== id)
      );
    },
    [setEntradas]
  );

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