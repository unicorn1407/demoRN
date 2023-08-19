import { getPasswordStrength } from './password';
import { PasswordStrength } from 'constants/type'; 

describe('getPasswordStrength', () => {
    it('should return PasswordStrength.SHORT for empty passwords', () => {
        expect(getPasswordStrength('')).toBe(PasswordStrength.SHORT);
    });

    it('should return PasswordStrength.SHORT for passwords shorter than 6 characters', () => {
        expect(getPasswordStrength('Abc1!')).toBe(PasswordStrength.SHORT);
    });

    it('should return PasswordStrength.FAIR for passwords meeting only one of the conditions', () => {
        expect(getPasswordStrength('Abcdefg')).toBe(PasswordStrength.FAIR);
        expect(getPasswordStrength('1234567')).toBe(PasswordStrength.FAIR);
        expect(getPasswordStrength('!@#$%^&')).toBe(PasswordStrength.FAIR);
    });

    it('should return PasswordStrength.GOOD for passwords meeting at least two of the conditions', () => {
        expect(getPasswordStrength('Abcdef1')).toBe(PasswordStrength.GOOD);
        expect(getPasswordStrength('1234!@#$')).toBe(PasswordStrength.GOOD);
        expect(getPasswordStrength('A!@#$%^')).toBe(PasswordStrength.GOOD);
    });

    it('should return PasswordStrength.STRONG for passwords meeting all conditions', () => {
        expect(getPasswordStrength('Abc123!')).toBe(PasswordStrength.STRONG);
    });
});
