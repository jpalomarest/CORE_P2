
class EventEmitter {
	
	constructor() {
		this.escuchadores = {};
	}

	on(evento,escuchador){
		if(typeof this.escuchadores[evento] === "undefined"){
			this.escuchadores[evento] = [];
		}
		this.escuchadores[evento].push(escuchador)
	}

	emit(evento, ...args){
		if (this.escuchadores[evento] instanceof Array) {
			for(var i = 0; i < this.escuchadores[evento].length;i++)
			this.escuchadores[evento][i](...args);
		}
	}	
}

exports = module.exports = EventEmitter;