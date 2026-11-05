import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from Express!</h1>");
});

app.get("/api/", (req, res) => {
    res.json({ "Status": "OK" });
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://127.0.0.1:${PORT}\nPress Ctrl + c to stop the server.`);
})