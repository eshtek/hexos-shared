const T = (str: string) => str;

export function dump(jsonData: unknown, options: { skipInvalid: boolean; styles: { [key: string]: string } }): string {
    const convertToYAML = (data: unknown): string => {
        if (data === null) {
            return 'null';
        }

        if (typeof data === 'boolean') {
            return data ? 'true' : 'false';
        }

        if (typeof data === 'number') {
            return data.toString();
        }

        if (typeof data === 'string') {
            return `"${data.replace(/"/g, '\\"')}"`; // Escape double quotes in strings
        }

        if (Array.isArray(data)) {
            return data.map((item) => `- ${convertToYAML(item)}`).join('\n');
        }

        if (typeof data === 'object') {
            return Object.entries(data)
                .map(([key, value]) => `${key}: ${convertToYAML(value)}`)
                .join('\n');
        }

        if (options.skipInvalid) {
            return '';
        }

        return 'null';
    };

    return convertToYAML(jsonData);
}

export function jsonToYaml(jsonData: unknown): string {
    try {
        return dump(jsonData, {
            skipInvalid: true,
            styles: {
                '!!null': 'camelcase',
                '!!bool': 'camelcase',
                '!!float': 'camelcase',
                '!!str': 'camelcase',
                '!!map': 'camelcase',
            },
        });
    } catch (error) {
        console.error(error);
        return 'Error occurred';
    }
}
