class Config {
  public env: any;
  public PORT: any;
  public API_BASE: any;
  public DATABASE_HOST: any;
  public JWT_SECRET: any;
  public PUBLIC_ROUTES: any;

  constructor() {
    this.env = "production";
    this.PORT = process.env.PORT || 3000;
    this.API_BASE = "/api";
    this.DATABASE_HOST = "salt.db.elephantsql.com";
    this.JWT_SECRET = "HZADgA9ttB$S!dy!hu3Rauvg!L27";
    this.PUBLIC_ROUTES = ["/", "/api/auth/signup", "/api/auth/signin"];
  }
}
export default new Config();
