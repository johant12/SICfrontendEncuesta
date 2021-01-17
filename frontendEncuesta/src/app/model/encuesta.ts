import { Marca } from './marca';

export class Encuesta {
	id!: number;
	numeroDocumento!: number;
	correo!: string;
	comentarios!: string;
	marcaPC: Marca = new Marca;
	fechaRespuesta!: Date;
	
//	constructor(id:number, numeroDocumento:number, correo: string, comentarios: string, marcaPC: Marca, fechaRespuesta: Date) {
//    }
}
