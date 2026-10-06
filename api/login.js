export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    
    if (password === process.env.ADMIN_PASSWORD) {
      return res.status(200).json({ success: true, role: 'admin' });
    }
    if (password === process.env.SUPERADMIN_PASSWORD) {
      return res.status(200).json({ success: true, role: 'superadmin' });
    }
    
    return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}