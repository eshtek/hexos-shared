import _ from 'lodash';
import type { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import type { Choices } from '@shared/truenas/webui/interfaces/choices.interface';
import type { MapOption, Option } from '@shared/truenas/webui/interfaces/option.interface';

/**
 * Convert choices to options
 * @returns Option[]
 */
export function choicesToOptions(): OperatorFunction<Choices, Option[]> {
    return map((choices) => {
        return Object.entries(choices).map(([value, label]) => ({ label, value }));
    });
}

export function arrayToOptions(): OperatorFunction<MapOption[], Option[]> {
    return map((choices) => {
        return choices.map(([value, label]) => ({ label, value }));
    });
}

export function singleArrayToOptions(): OperatorFunction<(string | number)[], Option[]> {
    return map((choices) => {
        return choices.map((choice) => ({ label: String(choice), value: choice }));
    });
}

export function redundantListToUniqueOptions(): OperatorFunction<string[], Option[]> {
    return map((redundantArray) => {
        return _.uniq(redundantArray).map((item: string) => ({ label: item, value: item }));
    });
}

export function idNameArrayToOptions(): OperatorFunction<{ id: number; name: string }[], Option[]> {
    return map((options) => {
        return options.map((option) => ({ label: option.name, value: option.id }));
    });
}
