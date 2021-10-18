// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');
server.use(express.json({ limit: '10mb' }));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

//configurar servidor de estáticos:
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

const staticStylesServer = './static/styles';
server.use(express.static(staticStylesServer));

const db = new Database('./src/db/database.db', { verbose: console.log });

// Escribimos los endpoints que queramos
server.get('/card/:id', (req, res) => {
	const query = db.prepare(`SELECT * FROM card WHERE id = ?`);
	const data = query.get(req.params.id);
	console.log(data);
	res.render('card', data);
});

server.post('/card', (req, res) => {
	console.log(req.body);
	const response = {};
	const emailVal =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (req.body.name === '') {
		response.error = 'missing name';
		response.success = false;
	} else if (req.body.job === '') {
		response.error = 'missing job';
		response.success = false;
	} else if (req.body.phone === '') {
		response.error = 'missing phone';
		response.success = false;
	} else if (!emailVal.test(req.body.email)) {
		response.error = 'missing email';
		response.success = false;
	} else if (req.body.linkedin === '') {
		response.error = 'missing linkedin';
		response.success = false;
	} else if (req.body.github === '') {
		response.error = 'missing github';
		response.success = false;
	} else if (req.body.photo === '') {
		response.error = 'missing photo';
		response.success = false;
	} else {
		const query = db.prepare(
			'INSERT INTO card (palette, name, job, phone, photo, email, github, linkedin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
		);

		const result = query.run(
			req.body.palette,
			req.body.name,
			req.body.job,
			req.body.phone,
			req.body.photo,
			req.body.email,
			req.body.github,
			req.body.linkedin
		);

		response.success = true;
		response.cardURL = `http://localhost:4000/card/${result.lastInsertRowid}`;
	}

	res.json(response);
});
