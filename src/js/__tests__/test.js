import { extractSpecialAttacks } from '../extractSpecialAttacks';

describe('extractSpecialAttacks', () => {
  it('should handle the case when special is undefined', () => {
    const character = {
      name: 'Лучник',
    };
    
    const result = extractSpecialAttacks(character);
    expect(result).toEqual([]);
  });

});