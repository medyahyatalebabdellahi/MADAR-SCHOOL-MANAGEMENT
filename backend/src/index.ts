export default {
  async fetch(): Promise<Response> {
    return new Response(JSON.stringify({ status: 'MADAR API OK' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
