const T = (str: string) => str;

export enum Direction {
    Push = 'PUSH',
    Pull = 'PULL',
}

export const directionNames = new Map<Direction, string>([
    [Direction.Push, T('PUSH')],
    [Direction.Pull, T('PULL')],
]);
