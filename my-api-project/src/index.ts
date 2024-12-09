import express from "express";
import { ApiHandler } from "./handler";

const app = express();
const port = 3000;

const handler = new ApiHandler();

app.get("/", (req: any, res: any) => handler.handleRequest(req, res));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
