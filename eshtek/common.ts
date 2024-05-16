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
        return 'Protected';
    } else if (folder.access === ServerAccess.PROTECTED) {
        return 'Protected';
    } else if (folder.access === ServerAccess.PUBLIC) {
        return 'Public';
    } else {
        return 'Folder';
    }
};

/**
 * Checks if a given folder name follows a specific format.
 * @param {string} folderName - The folder name to check.
 * @returns {boolean} - Returns true if the folder name follows the format, otherwise false.
 * Length between 1 and 255 characters.
 * Allowed characters: letters (both uppercase and lowercase), numbers, spaces, underscores, and hyphens.
 * Cannot start or end with an underscore, hyphen, or space.
 * No consecutive underscores, hyphens, or spaces.
 */
export const foldernameFormat = (folderName: string): boolean => {
    const regex = /^(?![_\-\s])(?!.*[_\-\s]$)(?!.*[_\-\s]{2})[a-zA-Z0-9_\-\s]{1,255}$/;
    return regex.test(folderName);
};

/**
 * Converts a username into a folder name format.
 * @param {string} username - The username to convert.
 * @returns {string} - Returns the folder name generated from the username.
 */
export const getFolderNameFromUsername = (username: string | undefined): string | undefined => {
    if (!username) return undefined;
    // Replace spaces and special characters with underscores
    const sanitizedUsername = username.replace(/[^\w]/g, '_');
    // Ensure folder name is not empty
    if (sanitizedUsername.length === 0) {
        return undefined;
    }
    return capitalize(sanitizedUsername);
};

// Utility function to serialize an object to a JSON string
export const serialize = (obj: any): string | undefined => {
    if (!obj) return undefined;
    try {
        return JSON.stringify(obj);
    } catch (error) {
        // If serialization fails, return an empty JSON object as default
        console.error('Serialization error:', error);
        return '{}';
    }
};

// Utility function to deserialize a JSON string to an object
export const deserialize = (val: string | object | undefined): any => {
    if (!val) return undefined;
    if (isObject(val)) {
        return val;
    }
    try {
        return JSON.parse(val);
    } catch (error) {
        // If deserialization fails, return the original string as fallback
        console.error('Deserialization error:', error);
        return val;
    }
};

import { z, ZodString, ZodTypeAny, ZodUnion } from 'zod';

/**
 * Utility function to create a serialized union schema
 * @param {ZodTypeAny} schema - The schema to be used for validation and parsing
 * @returns {ZodUnion<[ZodString, ZodTypeAny]>} - A union schema that accepts both the original schema and its serialized (JSON string) form
 */
export const createSerializedUnionSchema = (
    schema: ZodTypeAny,
): ZodUnion<[ZodString, ZodTypeAny]> => {
    // Schema to handle the serialized (JSON string) form of the data
    const serializedSchema = z.preprocess((str) => {
        // Attempt to parse the JSON string
        if (typeof str === 'string') {
            try {
                return JSON.parse(str);
            } catch {
                // If parsing fails, return the original string to trigger validation error
                return str;
            }
        }
        // If not a string, return as is to trigger validation error
        return str;
    }, schema);

    // Return a union schema that accepts either the original schema or the serialized schema
    return z.union([z.string(), serializedSchema]);
};

// Utility function to check if value is an object
export const isObject = (value: any) => typeof value === 'object' && value !== null;
