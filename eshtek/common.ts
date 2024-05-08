import { ServerAccess, ServerFolder, ServerFolderIcons } from './server';

export type ID = `${number}` | number;

/**
 * Checks if a given data has items.
 * @param {any} data - The data to check.
 * @returns {boolean} - Returns true if data has items, otherwise false.
 */
export const hasItems = (data: any) => {
    if (!data) return false;
    if (Array.isArray(data)) {
        return data.length > 0;
    } else if (data && typeof data === 'object') {
        return Object.keys(data).length > 0;
    }
    return false;
};

/**
 * Checks if a given hostname follows a specific format.
 * @param {string} hostname - The hostname to check.
 * @returns {boolean} - Returns true if the hostname follows the format, otherwise false.
 */
export const servernameFormat = (hostname: string): boolean => {
    const regex = /^[a-z.-0-9]*[a-z0-9]$/i;
    return !/\s/.test(hostname) && regex.test(hostname);
};

/**
 * Checks if a given username follows a specific format.
 * @param {string} username - The username to check.
 * @returns {boolean} - Returns true if the username follows the format, otherwise false.
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
/**
 * Checks if a given password follows a specific format.
 * @param {string} password - The password to check.
 * @returns {boolean} - Returns true if the password follows the format, otherwise false.
 Length between 8 and 30 characters.
At least one uppercase letter, one lowercase letter, one number, and one special character.
Allowed special characters: !@#$%^&*()-_=+[]{}|;:,.<>?`~/\
No spaces allowed.
*/
export const passwordFormat = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).{8,30}$/;
    return !/\s/.test(password) && regex.test(password);
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} s - The string to capitalize.
 * @returns {string} - Returns the string with the first letter capitalized.
 */
export const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Gets the icon for a server folder.
 * @param {ServerFolder} folder - The server folder.
 * @returns {ServerFolderIcons} - Returns the icon for the folder.
 */
export const getServerFolderIcon = (folder: ServerFolder): ServerFolderIcons => {
    if (folder.label.toLowerCase() === 'applications') {
        return ServerFolderIcons.APPLICATIONS;
    } else if (folder.label.toLowerCase() === 'virtualization') {
        return ServerFolderIcons.VIRTUALIZATION;
    } else if (folder.access === ServerAccess.PRIVATE) {
        return ServerFolderIcons.HIDDEN;
    } else if (folder.access === ServerAccess.PROTECTED) {
        return ServerFolderIcons.PROTECTED;
    } else if (folder.access === ServerAccess.PUBLIC) {
        return ServerFolderIcons.PUBLIC;
    } else {
        return ServerFolderIcons.FOLDER;
    }
};

/**
 * Gets the label for the icon of a server folder.
 * @param {ServerFolder} folder - The server folder.
 * @returns {string} - Returns the label for the icon.
 */
export const getServerFolderIconLabel = (folder: ServerFolder): string => {
    if (folder.label.toLowerCase() === 'applications' && folder.access === ServerAccess.PRIVATE) {
        return 'System';
    } else if (
        folder.label.toLowerCase() === 'virtualization' &&
        folder.access === ServerAccess.PRIVATE
    ) {
        return 'System';
    } else if (folder.access === ServerAccess.PRIVATE) {
        return 'Hidden';
    } else if (folder.access === ServerAccess.PROTECTED) {
        return 'Protected';
    } else if (folder.access === ServerAccess.PUBLIC) {
        return 'Public';
    } else {
        return 'Folder';
    }
};
