import express from 'express';
import { dirname, basename, join } from 'path'
// import { URL } from 'url';

const __dirname = dirname(new URL(import.meta.url).pathname);
const PORT = process.env.PORT || 5000;
const serverName = process.env.APP_NAME;
const app = express();

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
    // res.send("<h1>It works!</h1>");
    console.log(`Request serve by ${serverName}`)
});

app.get("/api", (req, res) => {
    res.json({ Status: "OK" });
    console.log(`Request serve by ${serverName}`)
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://127.0.0.1:${PORT} \nPress CTRL + C to quit`);
});
