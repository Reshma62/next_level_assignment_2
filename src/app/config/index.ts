import "dotenv/config";

const config = {
  port: process.env.PORT,
  mongo_url: process.env.MONGO_URI as string,
};

export default config;
