import fs from "fs";
import path from "path";
import morgan from "morgan";
import * as url from "url";
import rfs from "rotating-file-stream";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const logsDir = path.join(__dirname, "../../", "logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: logsDir,
  maxFiles: 7,
  compress: "gzip",
});

const requestLogger = morgan(
  (tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      `Request Name: ${req.name}`, // Assuming req.name contains your request name
      tokens["response-time"](req, res), // Add other tokens as needed
      "ms",
    ].join(" ");
  },
  { stream: accessLogStream }
);

const errorLogger = (err, req, res, next) => {
  const errorLogStream = fs.createWriteStream(path.join(logsDir, "error.log"), {
    flags: "a",
  });
  errorLogStream.write(
    `${new Date().toISOString()} - ${req.name} - ${err.message}\n`
  ); // Include request name in error logs
  next(err);
};

export { requestLogger, errorLogger };
