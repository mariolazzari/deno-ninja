// write file
//const encoder = new TextEncoder();
const text = "Ciao Mario";
//await Deno.writeFile("readme.txt", encoder.encode(text));
await Deno.writeTextFile("readme.txt", text);

// read file
//const decoder = new TextDecoder("utf-8");
//const data = await Deno.readFile("readme.txt");
//console.log(decoder.decode(data));
const dataTxt = await Deno.readTextFile("readme.txt");
console.log(dataTxt);

// rename and delete
await Deno.rename("readme.txt", "deleteme.txt");

// fetch api
const res = await fetch("https://swapi.dev/api/films");
const data = await res.json();
console.log(data);
