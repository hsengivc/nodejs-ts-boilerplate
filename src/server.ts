import "dotenv/config";
import appServer from "./app";

const server = () => {
  const app = appServer();

  if (!process.env.PORT) {
    process.exit(1);
  }

  const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

server();
