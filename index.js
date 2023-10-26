const express = require("express");
const app = express();
const mysql = require('mysql');

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'restaurant-api',
});

connection.connect();

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});

// for items

app.get('/menus', (request, response) => {
    console.log("Avant la requête SQL");
    const sql = 'SELECT * FROM menus';

    connection.query(sql, (err, results) => {
        console.log("Après la requête SQL");
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }
        //console.log(results)
        response.status(200).json({res: results});
    });
});

app.post('/menus', (request, response) => {
    const { id, name, description, price, category_id } = request.body;

    const sql = 'INSERT INTO menus (id, name, description, price, category_id) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [id, name, description, price, category_id], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }
        response.status(200).json(results);
    });
});

app.get('/menus/:id', (request, response) => {
    const itemId = request.params.id;

    const sql = 'SELECT * FROM items WHERE id = ?';

    connection.query(sql, [itemId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.length === 0) {
            //console.log()
            return response.status(404).json({ error: "Item not found" });
        }

        response.status(200).json({res: results});
    });
});


app.delete('/menus/:id', (request, response) => {
    const itemId = request.params.id;

    const sql = 'DELETE FROM menus WHERE id = ?';

    connection.query(sql, [itemId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.affectedRows === 0) {
            return response.status(404).json({ error: "Item not found" });
        }

        response.status(204).send();
    });
});

app.put('/menus/:id', (request, response) => {
    const itemId = request.params.id;
    const { id, name, description, price, category_id } = request.body;

    const sql = 'UPDATE menus SET id = ?, name = ?, description = ?, price = ?, category_id = ? WHERE id = ?';

    connection.query(sql, [id, name, description, price, category_id, itemId], (err, results) => {
        if (err) {
            //console.log()
            return response.status(500).json({ error: "Server error" });
        }

        if (results.affectedRows === 0) {
            return response.status(404).json({ error: "Item not found" });
        }

        response.status(200).json(results);
    });
});



//for categories

app.get('/category', (request, response) => {
    console.log("Avant la requête SQL");
    const sql = 'SELECT * FROM category';

    connection.query(sql, (err, results) => {
        console.log("Après la requête SQL");
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }
        //console.log(results)
        response.status(200).json({res: results});
    });
});

app.post('/category', (request, response) => {
    const { id, name } = request.body;

    const sql = 'INSERT INTO category (id, name) VALUES (?, ?)';
    connection.query(sql, [id, name], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }
        response.status(200).json(results);
    });
});

app.get('/category/:id', (request, response) => {
    const categoryId = request.params.id;

    const sql = 'SELECT * FROM category WHERE id = ?';

    connection.query(sql, [categoryId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.length === 0) {
            return response.status(404).json({ error: "Category not found" });
        }

        response.status(200).json({res: results});
    });
});


app.delete('/category/:id', (request, response) => {
    const categoryId = request.params.id;

    const sql = 'DELETE FROM category WHERE id = ?';

    connection.query(sql, [categoryId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.affectedRows === 0) {
            return response.status(404).json({ error: "Category not found" });
        }

        response.status(204).send();
    });
});

app.put('/category/:id', (request, response) => {
    const categoryId = request.params.id;
    const { name } = request.body;

    const sql = 'UPDATE category SET name = ? WHERE id = ?';

    connection.query(sql, [name, categoryId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.affectedRows === 0) {
            return response.status(404).json({ error: "Category not found" });
        }

        response.status(200).json(results);
    });
});



// for formulas

app.get('/formula', (request, response) => {
    console.log("Avant la requête SQL");
    const sql = 'SELECT * FROM formula';

    connection.query(sql, (err, results) => {
        console.log("Après la requête SQL");
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }
        //console.log(results)
        response.status(200).json({res: results});
    });
});

app.post('/formula', (request, response) => {
    const { name, price, categories } = request.body;

    const sql = 'INSERT INTO formula (name, price, categories) VALUES (?, ?, ?)';
    connection.query(sql, [name, price, categories], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }
        response.status(200).json(results);
    });
});

app.get('/formula/:id', (request, response) => {
    const formulaId = request.params.id;

    const sql = 'SELECT * FROM formula WHERE id = ?';

    connection.query(sql, [formulaId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.length === 0) {
            return response.status(404).json({ error: "Formula not found" });
        }

        response.status(200).json({res: results});
    });
});

app.delete('/formula/:id', (request, response) => {
    const formulaId = request.params.id;

    const sql = 'DELETE FROM formula WHERE id = ?';

    connection.query(sql, [formulaId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.affectedRows === 0) {
            return response.status(404).json({ error: "Formula not found" });
        }

        response.status(204).send();
    });
});

app.put('/formula/:id', (request, response) => {
    const formulaId = request.params.id;
    const { name, price, categories } = request.body;

    const sql = 'UPDATE formula SET name = ?, price = ?, categories = ? WHERE id = ?';

    connection.query(sql, [name, price, categories, formulaId], (err, results) => {
        if (err) {
            return response.status(500).json({ error: "Server error" });
        }

        if (results.affectedRows === 0) {
            return response.status(404).json({ error: "Formula not found" });
        }

        response.status(200).json(results);
    });
});
