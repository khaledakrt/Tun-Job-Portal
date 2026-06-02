CREATE TABLE IF NOT EXISTS saved_jobs (
  id INT NOT NULL AUTO_INCREMENT,
  candidate_id INT NOT NULL,
  job_id INT NOT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_saved_job_candidate (candidate_id, job_id),
  KEY idx_saved_jobs_candidate (candidate_id),
  KEY idx_saved_jobs_job (job_id),
  CONSTRAINT fk_saved_jobs_candidate FOREIGN KEY (candidate_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_saved_jobs_job FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS job_alerts (
  id INT NOT NULL AUTO_INCREMENT,
  candidate_id INT NOT NULL,
  title_keyword VARCHAR(150) DEFAULT NULL,
  location_keyword VARCHAR(150) DEFAULT NULL,
  contract_type VARCHAR(50) DEFAULT NULL,
  experience_level VARCHAR(80) DEFAULT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_job_alerts_candidate (candidate_id),
  CONSTRAINT fk_job_alerts_candidate FOREIGN KEY (candidate_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS application_status_history (
  id INT NOT NULL AUTO_INCREMENT,
  application_id INT NOT NULL,
  status VARCHAR(50) NOT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_application_status_history_app (application_id),
  CONSTRAINT fk_application_status_history_app FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
