# Full URI Escaper

This is a simple Node package to replace every character in a string with its URI-encoded equivalent. It can be used, for instance, to somewhat obfuscate query string parameters in a URI, for instance.

**full-uri-escaper** is designed to run both in the browser and in Node.

## Usage Examples

<h3><ins> Directly log escaped string </ins></h3>

```js
import fullURIEscaper from 'full-uri-escaper';

// Set `escaped` to
console.log( fullURIEscaper('Whatever you say, Mr. Boss-man!') );
```

Output:

```
%57%68%61%74%65%76%65%72%20%79%6f%75%20%73%61%79%2c%20%4d%72%2e%20%42%6f%73%73%2d%6d%61%6e%21
```

<h3><ins> Get input from STDIN </ins></h3>

```js
import fullURIEscaper from 'full-uri-escaper';

// Request user input and set the STDIN to a variable so we can manipulate it
const stdin = fullURIEscaper.requestInput()

// End the STDIN on input, effectively only allowing one input
stdin.on('data', () => {  stdin.end()  });
```

Examples of STDOUT output:

![EXAMPLE OUTPUT: "Enter a string to encode:"](https://i.imgur.com/ORwV2Al.png)

![EXAMPLE OUTPUT: Enter a string to encode:&#10;Whatever you say, Mr. Boss-man!&#10;%57%68%61%74%65%76%65%72%20%79%6f%75%20%73%61%79%2c%20%4d%72%2e%20%42%6f%73%73%2d%6d%61%6e%21&#10;&#10;Enter a string to encode:](https://i.imgur.com/egB3i9n.png)

<h3><ins> From Command Line </ins></h3>

```bat
npx full-uri-escaper "Whatever you say, Mr. Boss-man!"
```
```bat
full-uri-escaper "Whatever you say, Mr. Boss-man!"
```

Examples of CLI output:

![npx full-uri-escaper "Whatever you say, Mr. Boss-man!"&#10;%57%68%61%74%65%76%65%72%20%79%6f%75%20%73%61%79%2c%20%4d%72%2e%20%42%6f%73%73%2d%6d%61%6e%21](https://i.imgur.com/0so8zkA.png)
