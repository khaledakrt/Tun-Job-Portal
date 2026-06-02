const db = require('../config/db');

let quizSchemaCache = null;
let interviewSchemaCache = null;

/**
 * Vérifie si la migration quiz (colonne jobs.has_quiz + table job_quizzes) est appliquée.
 */
async function hasQuizSchema() {
    if (quizSchemaCache !== null) return quizSchemaCache;

    try {
        const [cols] = await db.execute(
            `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
             WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'jobs' AND COLUMN_NAME = 'has_quiz'`
        );
        const [tables] = await db.execute(
            `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
             WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'job_quizzes'`
        );
        quizSchemaCache = cols.length > 0 && tables.length > 0;
    } catch {
        quizSchemaCache = false;
    }

    return quizSchemaCache;
}

function resetQuizSchemaCache() {
    quizSchemaCache = null;
}

async function hasInterviewSchema() {
    if (interviewSchemaCache !== null) return interviewSchemaCache;

    try {
        const [tables] = await db.execute(
            `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
             WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'application_interviews'`
        );
        const [cols] = await db.execute(
            `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
             WHERE TABLE_SCHEMA = DATABASE()
               AND TABLE_NAME = 'application_interviews'
               AND COLUMN_NAME IN ('candidate_response', 'responded_at')`
        );
        interviewSchemaCache = tables.length > 0 && cols.length >= 2;
    } catch {
        interviewSchemaCache = false;
    }

    return interviewSchemaCache;
}

function resetInterviewSchemaCache() {
    interviewSchemaCache = null;
}

module.exports = {
    hasQuizSchema,
    resetQuizSchemaCache,
    hasInterviewSchema,
    resetInterviewSchemaCache,
};
