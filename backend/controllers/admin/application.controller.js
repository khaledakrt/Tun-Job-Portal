const db = require('../../config/db');

exports.getAllApplications = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
        a.id,
        a.status,
        a.applied_at,
        u.id AS candidate_id,
        u.name AS candidate_name,
        u.email AS candidate_email,
        u.phone AS candidate_phone,
        u.address AS candidate_address,
        u.company_logo AS candidate_avatar,
        j.title AS job_title,
        j.contract_type,
        j.location AS job_location,
        r.id AS recruiter_id,
        r.name AS recruiter_name,
        r.company_name,
        r.email AS recruiter_email,
        r.phone AS recruiter_phone,
        r.address AS recruiter_address,
        r.company_logo AS recruiter_logo,
        r.is_verified_company
      FROM applications a
      JOIN users u ON a.candidate_id = u.id
      JOIN jobs j ON a.job_id = j.id
      JOIN users r ON j.recruiter_id = r.id
      ORDER BY a.applied_at DESC
    `);

    return res.status(200).json(rows);
  } catch (error) {
    console.error('❌ Erreur liste candidatures :', error);
    return res.status(500).json({ message: 'Erreur lors de la récupération des candidatures.' });
  }
};

exports.deleteApplication = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM applications WHERE id = ?', [id]);
    return res.status(200).json({ message: 'Candidature supprimée avec succès.' });
  } catch (error) {
    console.error('❌ Erreur suppression candidature :', error);
    return res.status(500).json({ message: 'Impossible de supprimer cette candidature.' });
  }
};
