export const getNetworks = (): Array<string> => {
  return ['Isacar', 'Sabaot', 'Gedeon'];
};

export const getPastors = (): Record<string, Array<string>> => {
  return {
    Isacar: ['Pastor 1', 'Pastor 2'],
    Sabaot: ['Pastor 3', 'Pastor 4'],
    Gedeon: ['Pastor 5', 'Pastor 6'],
  };
};

export const getDiscipuladores = (): Record<string, Array<string>> => {
  return {
    Isacar: ['Discipulador 1', 'Discipulador 2'],
    Sabaot: ['Discipulador 3', 'Discipulador 4'],
    Gedeon: ['Discipulador 5', 'Discipulador 6'],
  };
};
