export function extractSpecialAttacks(character) {
    if (!character || !Array.isArray(character.special)) {
      return [];
    }
  
    return character.special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description,
    }));
  }