interface IEnv {
  port: number;
  accessTokenSecret: string;
}

const envs: IEnv = {
  port: parseInt(process.env.PORT || "3001", 10),
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
};

export default envs;
