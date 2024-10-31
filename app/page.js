"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");  // Redireciona para a página /home
  }, [router]);

  return null;  // O componente não renderiza nada, apenas redireciona
};

export default HomeRedirect;
