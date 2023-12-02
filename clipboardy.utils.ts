import clipboardy from 'clipboardy';

export function clip(value: string) {
    clipboardy.writeSync(value);
}
