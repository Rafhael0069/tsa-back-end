class Config {
  public env: any;
  public PORT: any;
  public API_BASE: any;
  public DATABASE_HOST: any;
  public JWT_SECRET: any;
  public TOKEN_DURATION: any;
  public PUBLIC_ROUTES: any;

  constructor() {
    this.env = "production";
    this.PORT = process.env.PORT || 3000;
    this.API_BASE = "/api";
    this.DATABASE_HOST =
      "postgres://tsa_db_user:Dg2fo9O5zak2BUzd2KZGTGzCLO2gXEVd@dpg-cd41hj1a6gdlt3hatjr0-a.oregon-postgres.render.com/tsa_db";
    this.JWT_SECRET = "NsGh&ewAru$u43mLoo145ln^L6!!YK";
    this.TOKEN_DURATION = "120";
    this.PUBLIC_ROUTES = ["/", "/api/auth/signup", "/api/auth/signin"];
  }
}
export default new Config();
