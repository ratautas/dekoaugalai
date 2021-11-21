/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params, ...rest }) => {
  const response = await fetch("http://dekoaugalai.lt/wp-json/wp/v2/pages");

  if (response.status === 404) return { body: [] };

//   return response;
  return await response.json();
};
