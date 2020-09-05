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

// uuid
import { v4 } from "https://deno.land/std/uuid/mod.ts";

// Generate a v4 uuid
const uid = v4.generate();
console.log("uid:", uid);

// fs modeula
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

await writeJson(
  "ninjas.json",
  { "ninjas": ["Ninja1", "Ninja2", "Ninja3"] },
  { spaces: 2 },
);
const jsnObj = await readJson("ninjas.json");
console.log(jsnObj);

// httpmodule
import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 3000 });
console.log("http://localhost:3000/");
for await (const req of server) {
  const { url } = req;
  req.respond({ body: `You visited ${url}.` });
}
