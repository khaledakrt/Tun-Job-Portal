ALTER TABLE application_interviews
  ADD COLUMN candidate_response VARCHAR(30) NOT NULL DEFAULT 'pending',
  ADD COLUMN responded_at DATETIME DEFAULT NULL;
