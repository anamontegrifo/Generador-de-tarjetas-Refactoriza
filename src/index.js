// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
	console.log(req.body.name);
	const response = {};

	if (req.body.name === '') {
		response.error = 'missing name';
		response.success = false;
	} else if (req.body.job === '') {
		response.error = 'missing job';
		response.success = false;
	} else if (req.body.phone === '') {
		response.error = 'missing phone';
		response.success = false;
	} else if (req.body.email === '') {
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
		response.cardURL = 'Este enlace funciona, comprobado por Mesalina y Ana';
		response.success = true;
	}

	res.json(response);
});
