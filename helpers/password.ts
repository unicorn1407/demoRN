
import { MIN_PASSWORD_LENGTH } from "constants/commons";
import { PasswordStrength } from "constants/type";

export const getPasswordStrength = (password: string) => {
    if (password?.length < MIN_PASSWORD_LENGTH){
        return PasswordStrength.SHORT
    }

    if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password.match(/[@$!%*?&]/)) {
        return PasswordStrength.STRONG;
    } else if ((password.match(/[a-zA-Z]/) && password.match(/\d/)) || (password.match(/[a-zA-Z]/) && password.match(/[@$!%*?&]/)) || (password.match(/\d/) && password.match(/[@$!%*?&]/))) {
        return PasswordStrength.GOOD;
    } else if (password.match(/[a-zA-Z]/) || password.match(/\d/) || password.match(/[@$!%*?&]/)) {
        return PasswordStrength.FAIR;
    } else {
        return PasswordStrength.WEAK;
    }
};
