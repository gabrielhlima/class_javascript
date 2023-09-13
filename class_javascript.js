class Animal {
	constructor (name, type, color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mamal extends Animal {
	constructor (name, type, color) {
		super(name, type, color)
	}

	sound () {
		console.log(`MOOOOO I am ${this.name} and I am a ${this.color} ${this.type}`)
	}

	defecar () {
		console.log(`MOOOOO Eu ${this.name}, que sou ${this.color} ${this.type}, preciso dar um cagão, hmmmm, vou evacuar AGORAAAAA`);
	}
}

const cow1 = new Mamal('Eduarda', 'cow','white and black');

// -------------------------------------------------------------------------------------------

class Shopping {
	constructor (nome, endereco, cidade, estado,){
		this.nome = nome;
		this.endereco = endereco;
		this.cidade = cidade;
		this.estado = estado;
	}
}

class Loja extends Shopping {
	constructor (nome, endereco, cidade, estado, nomeLoja, pisoLoja, objetivoLoja){
		super(nome, endereco, cidade, estado);
		this.nomeLoja = nomeLoja;
		this.pisoLoja = pisoLoja;
		this.objetivoLoja = objetivoLoja;
	}

	propaganda (){	
		console.log(`Olá!! somos do Shopping ${this.nome}, na ${this.endereco}, na cidade ${this.cidade} do estado ${this.estado}. A nossa loja é a ${this.nomeLoja}, que fica no piso ${this.pisoLoja} e tem como objetivo vender ${this.objetivoLoja}. Agradecemos a compreensão`);
	}	
}

const ciao = new Loja('Recife', 'Rua Padre Carapuceiro, 333', 'Recife', 'Pernambuco', 'Ciao', 'térreo', 'vestuário');
const centauro = new Loja('Recife', 'Rua Padre Carapuceiro, 333', 'Recife', 'Pernambuco', 'Centauro', 'térreo', 'artigos esportivos');