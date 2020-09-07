import { Application, Context } from "https://deno.land/x/abc@v1.0.3/mod.ts";

// server app
const app = new Application();

// static files
app.static("/", "./public");

// routes
app.get("/", async (ctx: Context) => {
  await ctx.file("./public/index.html");
});

// start server on port
app.start({ port: 3000 });
