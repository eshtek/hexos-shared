import { AppStatus, translateAppStatus } from '../truenas/webui/enums/app-status';
import { ChartReleaseStatus } from '../truenas/webui/enums/chart-release-status.enum';
import { ApiEventTyped } from '../truenas/webui/interfaces/api-message.interface';
import { ChartRelease } from '../truenas/webui/interfaces/chart-release.interface';
import type { ServerFolder } from './server';
import { ServerAccess, ServerFolderIcons } from './server';

export type ID = `${number}` | number;

/**
 * Generates a unique ID.
 * @returns {string} - Returns a unique ID.
 */

export function generateUniqueId(): string {
    // If running in a Node.js environment, use the 'crypto' module.
    const crypto = typeof window === 'undefined' ? require('crypto') : window.crypto;

    // Generate a random array of 16 bytes.
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);

    // Convert the array to a UUID-like string.
    const id = array.reduce((acc, byte, i) => {
        // Add a hyphen after the 4th, 6th, 8th, and 10th bytes.
        if (i === 4 || i === 6 || i === 8 || i === 10) {
            acc += '-';
        }
        // Add the byte as a two-digit hexadecimal string.
        acc += byte.toString(16).padStart(2, '0');
        return acc;
    }, '');

    return id;
}

/**
 * Checks if a given IP address is a private IP.
 * @param {string} ip - The IP address to check.
 * @returns {boolean} - Returns true if the IP address is private, otherwise false.
 */

export function isPrivateIP(ip: string) {
    //console.log('isPrivateIP', ip);
    if (!ip) return false;
    const parts = ip.split('.');
    const result =
        parts[0] === '10' ||
        parts[0] === '127' ||
        (parts[0] === '172' && parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31) ||
        (parts[0] === '192' && parts[1] === '168');
    //console.log('isPrivateIP', { ip, result });
    return result;
}

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

import type { ZodString, ZodTypeAny, ZodUnion } from 'zod';
import { z } from 'zod';

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

/**
 * Converts a number or string to a floating point number with a specified precision.
 * @param input - The number or string to be converted.
 * @param precision - The maximum number of decimal places for the output. Defaults to 2.
 * @returns The converted floating point number with the specified precision or 0 if conversion fails.
 */
export function toFixed(input: number | string | undefined, precision: number = 2): string {
    // Check if input is undefined or cannot be converted to a number
    if (input === undefined || isNaN(Number(input))) {
        return (0).toFixed(precision);
    }

    // Convert input to a number and then to a floating point number with specified precision
    const number = Number(input);
    return number.toFixed(precision);
}

/**
 * Determines the application status based on the provided app status and job event.
 * @param {ChartRelease | undefined} appStatus - The status of the chart release.
 * @param {ApiEventTyped<"core.get_jobs"> | undefined} jobEvent - The API event related to job status.
 * @returns {AppStatus | undefined} - The determined application status, or undefined if the app status is not provided.
 */ export function getAppStatus({
    appStatus,
    jobEvent,
    translated = true,
}: {
    appStatus?: ChartRelease;
    jobEvent?: ApiEventTyped<'core.get_jobs'>;
    translated?: boolean;
}): AppStatus | string | undefined {
    const app: ChartRelease | undefined = appStatus;
    const job = jobEvent?.fields;

    let status: AppStatus;

    if (!app) {
        return undefined;
    }
    switch (app.status) {
        case ChartReleaseStatus.Active:
            status = AppStatus.Started;
            break;
        case ChartReleaseStatus.Deploying:
            status = AppStatus.Deploying;
            break;
        case ChartReleaseStatus.Stopped:
            status = AppStatus.Stopped;
            break;
    }

    if (job) {
        const params = (job.arguments as any)?.params;
        console.log('params', params);
        /*
        if ([JobState.Waiting, JobState.Running].includes(job.state) && params.replica_count >= 1) {
            status = AppStatus.Starting;
        }
        if (
            [JobState.Waiting, JobState.Running].includes(job.state) &&
            params.replica_count === 0
        ) {
            status = AppStatus.Stopping;
        }
        if (
            job.state === JobState.Success &&
            params.replica_count >= 1 &&
            app.status !== ChartReleaseStatus.Deploying
        ) {
            status = AppStatus.Started;
        }
        if (
            job.state === JobState.Success &&
            params.replica_count === 0 &&
            app.status !== ChartReleaseStatus.Deploying
        ) {
            status = AppStatus.Stopped;
        }*/
    }
    if (translated) {
        return translateAppStatus(status);
    } else {
        return status;
    }
}

/**
 * Debounce function to limit the rate at which a function can fire.
 * @param {Function} func - Function to be debounced.
 * @param {number} wait - Time in milliseconds to wait before invoking the function.
 * @returns {Function} - Debounced function.
 */
export function debounce(func: () => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | null;

    const debounced = () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func();
        }, wait);
    };

    debounced.cancel = () => {
        if (timeout) {
            clearTimeout(timeout);
        }
    };

    return debounced;
}
