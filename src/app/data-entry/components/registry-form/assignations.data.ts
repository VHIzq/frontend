export const getNetworks = (): Array<string> => {
  return ['Isacar', 'Sabaot', 'Gedeon'];
};

export const getPastors = (): Record<string, Array<string>> => {
  return {
    Isacar: ['Filiberto', 'Pastor 2'],
    Sabaot: ['Rosita', 'Pastor 4'],
    Gedeon: ['José', 'Pastor 6'],
  };
};

export const getDiscipuladores = (): Record<string, Array<string>> => {
  return {
    Isacar: ['Discipulador 1', 'Discipulador 2'],
    Sabaot: ['Discipulador 3', 'Discipulador 4'],
    Gedeon: ['Discipulador 5', 'Discipulador 6'],
  };
};
