const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.header(
    "Content-Security-Policy",
    "frame-ancestors *.ngrok.io *.slido-staging.com:* studio.staging.socio.events studio.development.socio.events integration.vidcast.io localhost:4444"
  );
  res.send(TEMPLATE);
});

let TEMPLATE = "";
fs.readFile(path.resolve(__dirname, "template.html"), "utf8", (err, data) => {
  TEMPLATE = data;
  app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
});