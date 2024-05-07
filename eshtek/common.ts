export type ID = `${number}` | number;

export const hasItems = (data: any) => {
    if (!data) return false;
    if (Array.isArray(data)) {
        return data.length > 0;
    } else if (data && typeof data === 'object') {
        return Object.keys(data).length > 0;
    }
    return false;
};

export const servernameFormat = (hostname: string): boolean => {
    const regex = /^[a-z.-0-9]*[a-z0-9]$/i;
    return !/\s/.test(hostname) && regex.test(hostname);
};

/*
Username Format
Length between 3 and 8 characters.
Allowed characters: letters (both uppercase and lowercase), numbers, underscores, and hyphens.
Cannot start or end with an underscore or hyphen.
No consecutive underscores or hyphens.
Must start with a letter
*/
export const usernameFormat = (username: string): boolean => {
    const regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,7}$/;
    return regex.test(username);
};
/*
Password format:
Length between 8 and 30 characters.
At least one uppercase letter, one lowercase letter, one number, and one special character.
Allowed special characters: !@#$%^&*()-_=+[]{}|;:,.<>?`~/\
No spaces allowed.
*/
export const passwordFormat = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).{8,30}$/;
    return !/\s/.test(password) && regex.test(password);
};

export const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};
