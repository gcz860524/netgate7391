export default {
  async fetch(request, env, ctx) {
    return new Response("DIAG_OK_V1 netgate7391 alive 20261121", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
