CREATE TABLE IF NOT EXISTS application_interviews (
  id INT NOT NULL AUTO_INCREMENT,
  application_id INT NOT NULL,
  scheduled_at DATETIME NOT NULL,
  mode VARCHAR(50) NOT NULL DEFAULT 'En ligne',
  meeting_link VARCHAR(255) DEFAULT NULL,
  location VARCHAR(255) DEFAULT NULL,
  message TEXT DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_application_interviews_app (application_id),
  KEY idx_application_interviews_date (scheduled_at),
  CONSTRAINT fk_application_interviews_app FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
