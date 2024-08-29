const Candidatos = [
    {
        id:1,
        nombre:'Jhon Axl ',
        apellido:'Rodriguez Guiterrez',
        cargo:'Secretario Ejecutivo',
        foto:'jhon_axl.png'
    },
    {
        id:2,
        nombre:'Deymar Jose',
        apellido:'Flores Churata',
        cargo:'Suplente Secretario Ejecutivo',
        foto:'deymar_flores.png'
    },
    {
        id:3,
        nombre:'Najhely',
        apellido:'Cruz Antonio',
        cargo:'Secretario de Relaciones',
        foto:'najhely_cruz.png'
    },
    {
        id:4,
        nombre:'Ronald',
        apellido:'Chambi Mamani',
        cargo:'Suplente Secretario de Relaciones',
        foto:'ronald_chambi.png'
    },
    {
        id:5,
        nombre:'Cristian',
        apellido:'Choque Aguilar',
        cargo:'Secretario Academico',
        foto:'cristian_choque.png'
    },
    {
        id:6,
        nombre:'Jose Marcelo',
        apellido:'Flores Flores',
        cargo:'Suplente Secretario Academico',
        foto:'jose_marcelo.png'
     },
    {
        id:7,
        nombre:'Antonio',
        apellido:'Lazarte Anibarro',
        cargo:'Delegado HCC',
        foto:'antonio_lazarte.png'
    },
    {
        id:8,
        nombre:'Anderson',
        apellido:'Borras Cruz',
        cargo:'Suplente Delegado HCC',
        foto:'anderson_borras.png'
    },
    {
        id:9,
        nombre:'Kevin Moises',
        apellido:'Colque Ayaviri',
        cargo:'Secretario de Hacienda',
        foto:'kevin_moises.png'
    },
    {
        id:10,
        nombre:'Paola Gandiva',
        apellido:'Santos Romero',
        cargo:'Suplente Secretario de Hacienda',
        foto:'paola_gandiva.png'
    },
    {
        id:11,
        nombre:'Oriana Sol',
        apellido:'Rafael Villca',
        cargo:'Secretaria de Actas',
        foto:'oriana_sol.png'
    },
    {
        id:12,
        nombre:'Elvis',
        apellido:'Sallama Choque',
        cargo:'Suplente Secretario de Actas',
        foto:'elvis_sallama.png'
    },
    {
        id:13,
        nombre:'Mayra Malena',
        apellido:'Patiño Bolivar',
        cargo:'Delegado Asuntos Estudiantiles',
        foto:'mayra_malena.png'
    },
    {
        id:14,
        nombre:'Rodolfo',
        apellido:'Arias Villegas',
        cargo:'Suplente Delegado Asuntos Estudiantiles',
        foto:'rodolfo_arias.png'
    },
    {
        id:15,
        nombre:'Yoselin Gieselle',
        apellido:'Choque Calle',
        cargo:'Secretario de Deportes',
        foto:'yoselin_gieselle.png'
    },
    {
        id:16,
        nombre:'Deivid Victor',
        apellido:'Canaza Vasquez',
        cargo:'Suplente Secretario de Deportes',
        foto:'deivid_victor.png'
    },
    {
        id:17,
        nombre:'Fernando Javier',
        apellido:'Marcelo Eugenio',
        cargo:'Secretario de Culturas',
        foto:'fernando_javier.png'
    },
    {
        id:18,
        nombre:'Roger',
        apellido:'Pizarro Torrez',
        cargo:'Suplente Secretario de Culturas',
        foto:'roger_pizarro.png'
    },
    {
        id:19,
        nombre:'Jhonatan',
        apellido:'Pally Cotaña',
        cargo:'Secretario de Festejos',
        foto:'jhonatan_pally.png'
    },
    {
        id:20,
        nombre:'Jorge Miguel',
        apellido:'Arias Choque',
        cargo:'Suplente Secretario de Festejos',
        foto:'jorge_miguel.png'
    },
    {
        id:21,
        nombre:'Miguel Angel',
        apellido:'Rojas Varela',
        cargo:'Vocal 1',
        foto:'miguel_angel.png'
    },
    {
        id:22,
        nombre:'Sergio Dennis',
        apellido:'Alba Montaño',
        cargo:'Vocal 2',
        foto:'sergio_dennis.png'
    }
]
const separaMitad =(array)=>{
    const mitad = Math.ceil(array.length / 2); // Obtener el índice de la mitad del array
    const primeraMitad = array.slice(0, mitad); // Obtener la primera mitad del array
    const segundaMitad = array.slice(mitad); // Obtener la segunda mitad del array

    return [primeraMitad, segundaMitad];
}

const [mitad1, mitad2] = separaMitad(Candidatos);

module.exports ={
    mitad1,mitad2
}