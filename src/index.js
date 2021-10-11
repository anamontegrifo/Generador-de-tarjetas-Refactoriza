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
const serverPort = 3000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/cards', (req, res) => {
	const data = {
		palette: 'palette1',
		name: 'Mary Carmen Smith',
		job: 'Mother of dragons',
		phone: '968594030',
		email: 'nodeofdragons@gmail.com',
		linkedin: 'nodeofdragons',
		github: 'nodeofdragons',
		photo: 'https://via.placeholder.com/150',
	};

	let error = '';

	if (data.name === '') {
		error = 'missing name';
	} else if (data.job === '') {
		error = 'missing job';
	} else if (data.phone === '') {
		error = 'missing phone';
	} else if (data.email === '') {
		error = 'missing email';
	} else if (data.linkedin === '') {
		error = 'missing linkedin';
	} else if (data.github === '') {
		error = 'missing github';
	} else if (data.photo === '') {
		error = 'missing photo';
	} else {
		data.success === true;
		cardURL = '';
	}

	const response = {
		error: error,
		success: true,
		cardURL: '',
	};
	res.json(response);
});
