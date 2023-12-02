import chalk from 'chalk';

export function printInColor(message: any, color: string, newline = true): void {
    if (newline) {
        console.log(chalk.hex(color)(message));
    } else {
        process.stdout.write(chalk.hex(color)(message));
    }
}

export function printInColorInline(message: any, color: string): void {
    printInColor(message, color, false);
}

export interface IMessageColorInline {
    message: any;
    color: string;
}

export function printSeveralInColorInline(messages: IMessageColorInline[]) {
    messages.forEach(obj => {
        printInColorInline(obj.message, obj.color);
    });
}
