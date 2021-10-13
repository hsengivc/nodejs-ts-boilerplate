import express, { Application } from "express";

const appServer = () => {
  const app: Application = express();
  app.use(express.json());
  app.use("/", () => {
    console.log("home route");
  });

  return app;
};

export default appServer;
