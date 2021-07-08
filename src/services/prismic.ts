import Prismic from '@prismicio/client';

// instancia um novo client do Prismic sempre que uma conexão com a API é feita
export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  );

  return prismic;
}