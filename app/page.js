import React from 'react';
import Programacion from '@/componentes/Programacion';
import Diseno from '@/componentes/Diseño';
import SobreMi from '@/componentes/SobreMi';

export default function Home() {
  return (
    <main>
      <Programacion />
      <Diseno />
      <SobreMi />
    </main>
  );
}
