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


export function getStringWithHighlightedSymbols(message: string, indexesToColor: number[]): string {
    const coloredString = message
      .split('')
      .map((char, index) => (indexesToColor.includes(index) ? chalk.red(char) : char))
      .join('');
    return coloredString;
}

export function printStringWithHighlightedSymbols(message: string, indexesToColor: number[]) {
    // const coloredString = message
    //   .split('')
    //   .map((char, index) => (indexesToColor.includes(index) ? chalk.red(char) : char))
    //   .join('');
    // // return coloredString;
    const res = getStringWithHighlightedSymbols(message, indexesToColor)
    console.log(res);
}
