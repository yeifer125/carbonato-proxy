module.exports = async (req, res) => {
  res.setHeader('Set-Cookie', 'admin_sess=; Path=/; Max-Age=0; HttpOnly');
  res.writeHead(302, { 'Location': '/api/admin' }).end();
};