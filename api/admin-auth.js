// Auth handler - POST /api/admin-auth
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });
  
  let body = '';
  for await (const chunk of req) body += chunk;
  const p = new URLSearchParams(body);
  
  if (p.get('user') === 'admin' && p.get('pass') === 'carbonato2026') {
    res.setHeader('Set-Cookie', 'admin_sess=ok; Path=/; HttpOnly; SameSite=Strit; Max-Age=86400');
    return res.writeHead(302, { 'Location': '/api/admin-panel' }).end();
  }
  
  return res.writeHead(302, { 'Location': '/api/admin?error=1' }).end();
};