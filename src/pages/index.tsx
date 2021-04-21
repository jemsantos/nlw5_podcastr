// SPA
// SSR
// SSG (só roda em produção)

import { useEffect } from "react";

export default function Home(props) {
  // Primeira forma (modelo SPA). acesso só no carregamento da página
  /* useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []); */

  console.log(props.episodes);

  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  );
}

/* esta função deve ficar em qualquer um dos 3 arquivos da pasta pages (modelo SSR) */
/* export async function getServerSideProps() { (modelo SSR) */
export async function getStaticProps() { // (modelo SSG)
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, /* isto é só no (modelo SSG) */
  }
}
