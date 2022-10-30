/// <reference types="node" />

export default function encodeStr(str: string, lengthMod: number = 0): string {
    const arr = str.split('');

    // Allows us to correct for oddities with CLI parameters
    const correctLength = str.length + lengthMod ;

    for (let i = 0; i < correctLength - 2; i++) {
        const char = arr[i]!;
        arr[i] = `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`;
    }

    return arr.join('');
}

const sendInputMsg = '[4m[1m[34mEnter a string to encode:[0m[93m';

/** Requests user input from STDIN and returns it for further manipulation */
export function requestInput(): NodeJS.Socket {
    const stdin = process.openStdin();
    stdin.setEncoding('utf8');

    console.log(`\n${sendInputMsg}`);

    stdin.on('data', (input) => {
        console.log(`[0m[92m${encodeStr(input)}[0m\n${sendInputMsg}`);
    });

    return stdin;
}
