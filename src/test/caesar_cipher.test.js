const caesarCipher = require('./../lib/caesar_cipher');

describe('caesarCipher', () => {
  it('shift zero for a sentence', () =>
    expect(caesarCipher('good morning.', 0)).toBe('good morning.'));

  it('shift for a sentence', () =>
    expect(caesarCipher('Good Morning.', 3)).toBe('Jrrg Pruqlqj.'));

  it('shift for all alphabet combination', () =>
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyzab.', 3)).toBe(
      'defghijklmnopqrstuvwxyzabcde.'
    ));

  it('throw error for empty string', () =>
    expect(() => caesarCipher('', 3)).toThrow(TypeError));

  it('throw error for non string sentence', () =>
    expect(() => caesarCipher(333, 3)).toThrow(TypeError));

  it('throw error for non number shift', () =>
    expect(() => caesarCipher('good morning.', 'good')).toThrow(TypeError));
});
