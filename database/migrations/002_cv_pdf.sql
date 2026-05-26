USE `tun_job_portal`;

ALTER TABLE `cvs`
  ADD COLUMN IF NOT EXISTS `cv_pdf` VARCHAR(255) DEFAULT NULL AFTER `education`;
