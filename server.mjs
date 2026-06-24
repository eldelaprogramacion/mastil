import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const requestedPort = Number(process.env.PORT) || 4173;
const files = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/styles.css", "styles.css"],
  ["/app.js", "app.js"]
]);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
  const file = files.get(pathname);

  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("No encontrado");
    return;
  }

  try {
    const body = await readFile(join(root, file));
    response.writeHead(200, { "Content-Type": contentTypes[extname(file)] });
    response.end(body);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("No se pudo cargar la aplicación");
  }
});

function listen(port, attemptsLeft = 10) {
  server.once("error", error => {
    if (error.code === "EADDRINUSE" && attemptsLeft > 0 && !process.env.PORT) {
      const nextPort = port + 1;
      console.warn(`El puerto ${port} está ocupado. Probando el ${nextPort}...`);
      listen(nextPort, attemptsLeft - 1);
      return;
    }

    if (error.code === "EADDRINUSE") {
      console.error(`No se puede iniciar: el puerto ${port} está ocupado.`);
    } else {
      console.error(`No se pudo iniciar el servidor: ${error.message}`);
    }
    process.exitCode = 1;
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`Mapa del diapasón disponible en http://127.0.0.1:${port}`);
  });
}

listen(requestedPort);
