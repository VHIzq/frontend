export const getNetworks = (): Array<string> => {
  return ['Isacar', 'Sabaot', 'Gedeon'];
};

export const getPastors = (): Record<string, Array<string>> => {
  return {
    Isacar: ['Anciano Filiberto Guzman'],
    Sabaot: ['Anciano Moises Reyes', 'Anciana Rocio Reyes '],
    Gedeon: ['Anciano Luis Ramirez'],
  };
};

export const getDiscipuladores = (): Record<string, Array<string>> => {
  return {
    Isacar: [
      'Ana Laura Eleuterio',
      'Concepcion Lopez',
      'Esteban Segundo',
      'Fernando Ramirez',
      'Filiberto Guzman',
      'Iris Alcaraz',
      'Luz Magdaleno',
      'Maria Gonzalez',
      'Yanet Anaya',
    ],
    Sabaot: [
      'Elia Collado Ibarra',
      'Francisca Gálvez',
      'Georgina Solorzano',
      'Guillermina Solorzano',
      'Juana Gálvez',
      'Lilia Eugenio Andraca',
      'Margarita de la Cruz',
      'Rocío Gpe Escobar',
      'Rosa María Blas',
      'Rosa María Ferreira',
      'Victor Hugo Ortiz Cruz',
      'Yadira Rivas',
    ],
    Gedeon: [
      'Arcelia Buendía Flores',
      'Dora Elsa Montoya Sitalan',
      'Guillermina Lauder',
      'Isabel Rangel Romero',
      'Ismerai Alvarado',
      'Lourdes Jara López',
      'Luis Ramírez Fuentes',
      'Luz María Pérez',
      'Malinal Colin',
      'Marcelo Enriquez',
      'Margarita de Jesús Padua',
      'Margarita Salgado',
      'Marisela Lobato Ojeda',
      'Mauricio Sánchez',
      'Nancy Cárdenas',
      'Oscar Padua de Jesús',
      'Patricia Palizada',
      'Rosario Buendía',
      'Rosario Ortiz',
    ],
  };
};
