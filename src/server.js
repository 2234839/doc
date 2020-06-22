import sirv from "sirv";
import polka from "polka";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import path from "path";
import fs from "fs";
import "./tailwind.css";
import ExpressSession from "express-session";
import { pathCheck } from "./lib/权限验证/path.ts";

const { PORT, NODE_ENV } = process.env;

// const PORT=9939
const dev = NODE_ENV === "development";
const server_path = __dirname;
const root_path = path.resolve(__dirname, "../../../");
const client_path = path.resolve(server_path, "../client");
const bodyParser = require("body-parser");
const FileStore = require("session-file-store")(ExpressSession);

// console.log({ root_path, __dirname, client_path });
function sendFile(filePath, res) {
  // 这里到时候再完善
  if (filePath.endsWith(".js")) {
    res.setHeader("content-type", "application/javascript; charset=utf-8");
  }
  fs.createReadStream(filePath).pipe(res);
}

polka() // You can also use Express
  .use(function logger(req, res, next) {
    console.log(`~> [${new Date().toLocaleString()}] ${req.method} on ${req.url}`);
    next(); // move on
  })
  .use(
    ExpressSession({
      secret: "keyboard cat",
      saveUninitialized: true,
      // cookie: { secure: true },
      store: new FileStore({
        path: "./src/data/sessions",
      }),
    }),
  )
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(root_path))
  .use(pathCheck)
  .use(function file_server(req, res, next) {
    const file_path = path.resolve(root_path, "./" + req.url);
    // console.log("[server.js]", req.url, "\t\t", file_path);
    if (req.method === "GET") {
      if (/\/client\//.test(req.url)) {
        const fileName = req.url.replace(/.*\/client\//, "");
        const client_file_path = path.resolve(client_path, "./" + fileName);
        sendFile(client_file_path, res);
      } else {
        next(); // move on
      }
    } else {
      next(); // move on
    }
  })
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware({
      session: (req, res) => Object.assign({}, req.session, { cookie: undefined }),
    }),
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
