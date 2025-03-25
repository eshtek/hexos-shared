import type { ServerFolder, ServerPool } from './server';
import { ServerStorageIcon } from './server';
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
    const regex = /^[a-zA-Z][a-zA-Z0-9-]{0,13}[a-zA-Z0-9]$/;
    return (
        !/\s/.test(hostname) && // Ensure no whitespace
        hostname.length <= 15 && // Limit length to 15
        regex.test(hostname) // Match pattern
    );
};

/**
 * Checks if a given ip address follows a specific format.
 * @param ip - The ip address to check.
 * @returns - Returns true if the ip address is valid, otherwise false.
 */
export const ipFormat = (ip?: string): boolean => {
    if (!ip) return false;
    const regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    return !/\s/.test(ip) && regex.test(ip);
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
    const regex = /^.{6,}$/; // Requires at least 6 characters
    return !/\s/.test(password) && regex.test(password); // Ensures no whitespace and meets length
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} s - The string to capitalize.
 * @returns {string} - Returns the string with the first letter capitalized.
 */
export const capitalize = (s: string) => {
    if (!s || s.length === 0) return s;
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
 * Gets the icon for a pool
 * @param {ServerPool} pool - The server pool.
 * @returns {ServerFolderIcons} - Returns the icon for the pool.
 */
export const getPoolIcon = (pool: ServerPool): ServerStorageIcon => {
    switch (pool.disks_type) {
        case DiskType.Hdd:
            return ServerStorageIcon.HDD_GROUP;
        case DiskType.Ssd:
            return ServerStorageIcon.SSD_GROUP;
        case DiskType.Nvme:
            return ServerStorageIcon.NVME_GROUP;
        default:
            return ServerStorageIcon.HDD_GROUP;
    }
};

/**
 * Returns the correct VMIcons based on the VM type.
 * @param vm - The virtual machine object, which can be of type VMInfo, VMInfoDetailed, or VMListing.
 * @returns The corresponding VMIcons based on the VM type.
 */
export function getVMIcon(vm: VMType | VMInfo | VMInfoDetailed | undefined): VMIcons {
    let vmType: VMType;
    if (!vm) return VMIcons.Custom;

    if (typeof vm === 'string') {
        // vm is of type VMType
        vmType = vm as VMType;
    } else if (vm.settings?.os) {
        // vm is of type VMInfo or VMInfoDetailed and has settings with an os property
        vmType = vm.settings.os;
    } else {
        throw new Error('Unable to determine VM type');
    }

    switch (vmType) {
        case VMType.Windows:
            return VMIcons.Windows;
        case VMType.Ubuntu:
            return VMIcons.Ubuntu;
        case VMType.FreeBSD:
            return VMIcons.FreeBSD;
        case VMType.Chrome:
            return VMIcons.Chrome;
        case VMType.Custom:
            return VMIcons.Custom;
        default:
            // Fallback icon or error handling can be added here if needed
            throw new Error(`Unsupported VM type: ${vmType}`);
    }
}

/**
 * Maps media types to their corresponding icons.
 */
const mediaTypeToIconMap: Record<string, string> = {
    '10baseT/Half': 'networking/ethernet-10',
    '10baseT/Full': 'networking/ethernet-10',
    '100baseT/Half': 'networking/ethernet-100',
    '100baseT/Full': 'networking/ethernet-100',
    '1000baseT/Full': 'networking/ethernet-1g',
    '2500baseT/Full': 'networking/ethernet-2.5g',
    '5000baseT/Full': 'networking/ethernet-5g',
    '10000baseT/Full': 'networking/ethernet-10g',
    '20000baseT/Full': 'networking/ethernet-20g',
    '25000baseT/Full': 'networking/ethernet-25g',
    '40000baseT/Full': 'networking/ethernet-40g',
    '50000baseT/Full': 'networking/ethernet-50g',
    '100000baseT/Full': 'networking/ethernet-100g',
};

/**
 * Gets the icon for the maximum supported media speed.
 * @param {string[]} supportedMedia - An array of supported media types.
 * @returns {string} - Returns the icon for the maximum supported media speed.
 */
export const getMaxSpeedIcon = (supportedMedia?: string[]): string => {
    const last = supportedMedia?.length ? supportedMedia[supportedMedia.length - 1] : undefined;
    const unknown = 'networking/ethernet';
    return last ? mediaTypeToIconMap[last] ?? unknown : unknown;
};

/**
 * Determines if it is a system folder or not.
 * @param {ServerFolder} folder - The server folder.
 * @returns {boolean}
 */
export const isSystemFolder = (folder: ServerFolder): boolean => {
    if (folder.label.toLowerCase() === 'applications' && folder.access === ServerAccess.PRIVATE) {
        return true;
    } else if (
        (folder.label.toLowerCase() === 'virtualization' || folder.label.toLowerCase() === 'ix-virtualization') &&
        folder.access === ServerAccess.PRIVATE
    ) {
        return true;
    } else {
        return false;
    }
};

/**
 * Gets the label for the icon of a server folder.
 * @param {ServerFolder} folder - The server folder.
 * @returns {string} - Returns the label for the icon.
 */
export const getServerFolderIconLabel = (folder: ServerFolder): string => {
    if (isSystemFolder(folder)) {
        return 'System';
    } else if (folder.access === ServerAccess.PRIVATE) {
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
import { buildNormalizedFileSize } from '../truenas/webui/helpers/file-size.utils';
import type { VMInfo, VMInfoDetailed, VMListing } from './vms';
import { VMIcons, VMType } from './vms';
import type { ResolvedLocationPreference, LocationPreferenceId, ResolvedLocationPreferenceNode } from './preferences';
import { DiskType } from '../truenas/webui/enums/disk-type.enum';

/**
 * Utility function to create a serialized union schema
 * @param {ZodTypeAny} schema - The schema to be used for validation and parsing
 * @returns {ZodUnion<[ZodString, ZodTypeAny]>} - A union schema that accepts both the original schema and its serialized (JSON string) form
 */
export const createSerializedUnionSchema = (schema: ZodTypeAny): ZodUnion<[ZodString, ZodTypeAny]> => {
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

    // Ensure the result has the correct number of decimal places
    const result = number.toFixed(precision);

    // Check if the result has fewer decimals than required and pad if necessary
    const [integerPart, decimalPart] = result.split('.');
    const paddedDecimalPart = (decimalPart || '').padEnd(precision, '0');
    if (precision === 0) {
        return `${integerPart}`;
    } else {
        return `${integerPart}.${paddedDecimalPart}`;
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

/**
 * Converts a temperature from Celsius to Fahrenheit.
 *
 * @param {number|string} celsius - The temperature in Celsius.
 * @returns {number} The temperature converted to Fahrenheit.
 */
export function celsiusToFahrenheit(celsius: number | string): number {
    const celsiusNum = typeof celsius === 'string' ? parseFloat(celsius) : celsius;
    if (isNaN(celsiusNum)) {
        throw new Error('Invalid input: Temperature must be a number or a string representing a number');
    }
    return (celsiusNum * 9) / 5 + 32;
}

/**
 * Converts a temperature from Fahrenheit to Celsius.
 *
 * @param {number|string} fahrenheit - The temperature in Fahrenheit.
 * @returns {number} The temperature converted to Celsius.
 */
export function fahrenheitToCelsius(fahrenheit: number | string): number {
    const fahrenheitNum = typeof fahrenheit === 'string' ? parseFloat(fahrenheit) : fahrenheit;
    if (isNaN(fahrenheitNum)) {
        throw new Error('Invalid input: Temperature must be a number or a string representing a number');
    }
    return ((fahrenheitNum - 32) * 5) / 9;
}

/**
 * Function to format a given speed in bytes per second to a human-readable string with a specified precision.
 *
 * @param value - The speed returned from the api
 * @param precision - The number of decimal places to include in the formatted output. Defaults to 0.
 * @returns A string representing the formatted speed with the appropriate unit.
 */
export function getSpeedFormatted(value: number | undefined, precision: number = 1): string {
    if (!value) return '0.0 kb/s';
    const result = buildNormalizedFileSize(value * 1024, 'b', 10);
    const parts = result.split(' ');
    return `${toFixed(parts[0], precision)} ${parts[1]}/s`;
}

/**
 * Function to determine the highest value in a 2D array, excluding the timestamp (first element of each row).
 *
 * @param data - A 2D array where each sub-array contains a timestamp as the first element followed by numerical values.
 * @returns The highest numerical value found in the array, excluding the timestamps.
 */
export function getHighestValue(data: number[][]): number {
    // Initialize the highest value to negative infinity to ensure any number will be higher
    let highestValue = -Infinity;

    // Iterate over each row in the data array
    for (const row of data) {
        // Start iterating from the second element (index 1) to exclude the timestamp
        for (let i = 1; i < row.length; i++) {
            // Update highestValue if the current element is greater
            if (row[i] > highestValue) {
                highestValue = row[i];
            }
        }
    }

    // Return the highest value found
    return highestValue;
}

/**
 * Calculates the appropriate step size for a slider based on the desired number of steps and a range of values.
 * The function ensures that the step size is a multiple of one of the acceptable step sizes provided.
 *
 * @param range - The difference between the maximum and minimum values of the slider.
 * @param steps - The desired number of steps on the slider. This determines how many increments the slider will have.
 * @param acceptableSteps - An optional array of acceptable step sizes. Defaults to [1, 5, 10, 20, 25, 50, 100, 1000].
 * @returns The step size that is closest to the calculated raw step size and is a multiple of one of the acceptable step sizes.
 */
export function getStepSize(range: number, steps: number = 10, acceptableSteps: number[] = [1, 5, 10, 20, 25]): number {
    const rawStep = range / steps;
    return acceptableSteps.reduce((prev, curr) => {
        return Math.abs(curr - rawStep) < Math.abs(prev - rawStep) ? curr : prev;
    });
}

/**
 * Converts flat preferences locations into a hierarchical structure.
 * @param locations Record<LocationPreferenceId, ResolvedLocationPreference>
 * @returns Tree structure of locations for easier rendering
 */
export const buildLocationHierarchy = (locations: Record<LocationPreferenceId, ResolvedLocationPreference>): ResolvedLocationPreferenceNode[] => {
    // Map of parentId (string or 'root' for undefined) to its children
    const groupedByParent: Record<string, ResolvedLocationPreferenceNode[]> = {};

    // Initialize the map
    for (const location of Object.values(locations)) {
        const parentId = location.parentId ?? 'root'; // Use 'root' for locations with no parent

        if (!groupedByParent[parentId]) {
            groupedByParent[parentId] = [];
        }

        // Add the location to the appropriate parent group
        groupedByParent[parentId].push({ ...location, children: [] });
    }

    // Recursive function to build the hierarchy
    const buildHierarchy = (parentId: string): ResolvedLocationPreferenceNode[] => {
        return (groupedByParent[parentId] || []).map((location) => {
            // Recursively build children
            location.children = buildHierarchy(location.id);
            return location;
        });
    };

    // Start building from the root locations (parentId is 'root')
    return buildHierarchy('root');
};
