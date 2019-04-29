
const EventEmitter = require('./events');
const later = require('later');

class Programador extends EventEmitter {
	
	constructor(config) {
		super();
		later.date.localTime();
		if(config instanceof Array){
			for(var i = 0; i < config.length; i++)
				var dato = config[i];
				later.setInterval(() => this.emit('ideal', dato.temperatura), later.parse.text('at '+ dato.hora));
		}
	}	
}

exports = module.exports = Programador;