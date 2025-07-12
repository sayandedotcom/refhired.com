import { type CookieOptions, type Request, type Response } from "express";

const ONE_MINUTE = 60;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_MONTH = 30 * ONE_DAY;
const ONE_YEAR = 12 * ONE_MONTH;

class CookieService {
  options: CookieOptions = {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: ONE_YEAR,
  };

  cookieKeys = {
    token: "token",
  };

  setTokenCookie({ res, token }: { res: Response; token: string }) {
    res.cookie(this.cookieKeys.token, token, this.options);
  }

  getTokenCookie({ req }: { req: Request }) {
    return req.cookies.token;
  }

  clearTokenCookie({ res }: { res: Response }) {
    res.clearCookie(this.cookieKeys.token, this.options);
  }
}

export const cookieService = new CookieService();
