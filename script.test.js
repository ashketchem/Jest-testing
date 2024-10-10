const { capitalize, reverseString, cal, caesarCipher, analyzeArry } = require('./script.js');

describe('String and Array Functions', () => {
  
    // Tests for capitalize function
      test('capitalize should capitalize the first letter of each word', () => {
          expect(capitalize('hello world')).toBe('Hello World');
              expect(capitalize('javaScript is awesome')).toBe('JavaScript Is Awesome');
                  expect(capitalize('')).toBe('');
                    });

                      // Tests for reverseString function
                        test('reverseString should reverse each word in the string', () => {
                            expect(reverseString('hello world')).toBe('olleh dlrow');
                                expect(reverseString('javaScript')).toBe('tpircSavaj');
                                    expect(reverseString('')).toBe('');
                                      });

                                        // Tests for cal function
                                          test('cal should perform basic arithmetic operations', () => {
                                              expect(cal(5, 3, '+')).toBe(8);
                                                  expect(cal(5, 3, '-')).toBe(2);
                                                      expect(cal(5, 3, '*')).toBe(15);
                                                          expect(cal(6, 3, '/')).toBe(2);
                                                              expect(cal(5, 3, '%')).toBe('Invalid operator');
                                                                });

                                                                  // Tests for caesarCipher function
                                                                    test('caesarCipher should shift letters by the given number', () => {
                                                                        expect(caesarCipher('xyz', 3)).toBe('abc');
                                                                            expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
                                                                                expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
                                                                                    expect(caesarCipher('abc XYZ', 2)).toBe('cde ZAB');
                                                                                      });

                                                                                        // Tests for analyzeArry function
                                                                                          test('analyzeArry should return min, max, avg, sum, and count', () => {
                                                                                              expect(analyzeArry([1, 2, 3, 4, 5])).toEqual({
                                                                                                    min: 1,
                                                                                                          max: 5,
                                                                                                                avg: 3,
                                                                                                                      sum: 15,
                                                                                                                            count: 5
                                                                                                                                });
                                                                                                                                    expect(analyzeArry([-1, -2, -3, -4, -5])).toEqual({
                                                                                                                                          min: -5,
                                                                                                                                                max: -1,
                                                                                                                                                      avg: -3,
                                                                                                                                                            sum: -15,
                                                                                                                                                                  count: 5
                                                                                                                                                                      });
                                                                                                                                                                          expect(analyzeArry([10])).toEqual({
                                                                                                                                                                                min: 10,
                                                                                                                                                                                      max: 10,
                                                                                                                                                                                            avg: 10,
                                                                                                                                                                                                  sum: 10,
                                                                                                                                                                                                        count: 1
                                                                                                                                                                                                            });
                                                                                                                                                                                                              });

                                                                                                                                                                                                              });
                                                                                                                                                                                                              