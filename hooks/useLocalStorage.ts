"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  chave: string,
  valorInicial: T
) {
  const [valor, setValor] = useState<T>(valorInicial);

  useEffect(() => {
    const item = localStorage.getItem(chave);

    if (item) {
      setValor(JSON.parse(item));
    }
  }, [chave]);

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  return [valor, setValor] as const;
}