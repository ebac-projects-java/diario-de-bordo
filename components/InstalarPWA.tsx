"use client";

import { useEffect, useState } from "react";

export default function InstalarPWA() {
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (event: any) => {
      event.preventDefault();
      setPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  async function instalar() {
    if (!prompt) return;

    prompt.prompt();
    await prompt.userChoice;
    setPrompt(null);
  }

  if (!prompt) return null;

  return (
    <button
  onClick={instalar}
  style={{ marginBottom: "20px" }}
>
  Instalar aplicativo
</button>
  );
}