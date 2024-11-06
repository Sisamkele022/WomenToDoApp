module.exports = (db) => {
    const express = require('express');
    const router = express.Router();

    // Get all tasks
    router.get('/', (req, res) => {
        db.query('SELECT * FROM tasks', (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });

    // Create a new task
    router.post('/', (req, res) => {
        const { title, description } = req.body;
        db.query(
            'INSERT INTO tasks (title, description) VALUES (?, ?)',
            [title, description],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ id: results.insertId, title, description });
            }
        );
    });

    return router;
};
