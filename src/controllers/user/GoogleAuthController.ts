import { Request, Response } from "express";
import { GoogleAuthService } from "../../services/user/GoogleAuthService";

class GoogleAuthController{
    async googleCallback(req: Request, res: Response) {
    const { code } = req.query;

    if (!code || typeof code !== "string") {
      return res.status(400).json({ error: "Code not provided" });
    }

    const service = new GoogleAuthService();
    const result = await service.execute(code);

    return res.json(result);
  }

  async redirectToGoogle(req: Request, res: Response) {
        const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
        response_type: "code",
        scope: "openid email profile",
        access_type: "offline",
        prompt: "consent",
        });

        res.redirect(
        `https://accounts.google.com/o/oauth2/v2/auth?${params}`
        );
    }
}

export { GoogleAuthController };