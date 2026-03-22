"use client";

import { usePathname } from 'next/navigation';
// Sostituisci './Navbar' con il percorso corretto del tuo componente Navbar attuale
import Navbar from './Navbar'; 

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Se l'URL inizia con "/studio", restituiamo "null" (cioè nascondiamo la Navbar)
  if (pathname.startsWith('/studio')) {
    return null;
  }

  // Altrimenti, mostriamo la Navbar normalmente
  return <Navbar />;
}