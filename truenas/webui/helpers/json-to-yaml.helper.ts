const T = (str: string) => str;
import { dump } from 'js-yaml';

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
        return T('Error occurred');
    }
}
