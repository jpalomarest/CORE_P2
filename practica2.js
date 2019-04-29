
const Programador = require('./programador');
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

const config = [
	{ hora: "20:33",
	 temperatura: 25
	}];

const programador = new Programador(config);
programador.on('ideal',(temperaturaIdeal) => termostato.indicarTemperaturaIdeal(temperaturaIdeal));
// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();

