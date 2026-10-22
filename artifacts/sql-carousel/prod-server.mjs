import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "dist/public");
const port = process.env.PORT || 3000;

const mime = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split("?")[0];
  let filePath = path.join(dir, urlPath === "/" ? "index.html" : urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(dir, "index.html"), (err2, html) => {
        if (err2) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(html);
        }
      });
    } else {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mime[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`SQL Carousel running on port ${port}`);
});
