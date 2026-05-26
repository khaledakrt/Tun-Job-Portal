



-- Migration corrigée : module Quiz pour les offres d'emploi
USE `tun_job_portal`;

-- Étape 1 : Ajout de la colonne 'has_quiz' sans la clause incompatible
ALTER TABLE `jobs` ADD COLUMN `has_quiz` TINYINT(1) NOT NULL DEFAULT 0 AFTER `status`;

-- Étape 2 : Création de la table des Quiz
CREATE TABLE IF NOT EXISTS `job_quizzes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job_id` INT NOT NULL,
  `title` VARCHAR(150) NOT NULL DEFAULT 'Quiz de présélection',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_job_quiz` (`job_id`),
  CONSTRAINT `fk_quiz_job` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Étape 3 : Création de la table des Questions
CREATE TABLE IF NOT EXISTS `quiz_questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quiz_id` INT NOT NULL,
  `question_text` TEXT NOT NULL,
  `question_type` ENUM('single','multiple') NOT NULL DEFAULT 'single',
  `sort_order` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_quiz_questions_quiz` (`quiz_id`),
  CONSTRAINT `fk_question_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `job_quizzes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Étape 4 : Création de la table des Choix possibles
CREATE TABLE IF NOT EXISTS `quiz_choices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question_id` INT NOT NULL,
  `choice_text` VARCHAR(500) NOT NULL,
  `is_correct` TINYINT(1) NOT NULL DEFAULT 0,
  `sort_order` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_quiz_choices_question` (`question_id`),
  CONSTRAINT `fk_choice_question` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Étape 5 : Création de la table des Réponses des candidats
CREATE TABLE IF NOT EXISTS `application_quiz_answers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `application_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `choice_id` INT DEFAULT NULL,
  `answer_text` TEXT DEFAULT NULL,
  `answered_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_app_question` (`application_id`, `question_id`),
  KEY `idx_answers_application` (`application_id`),
  CONSTRAINT `fk_answer_application` FOREIGN KEY (`application_id`) REFERENCES `applications` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_answer_question` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_answer_choice` FOREIGN KEY (`choice_id`) REFERENCES `quiz_choices` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
