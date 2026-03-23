import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ error: "Token não fornecido"});
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded);
        req.user = decoded;

        return next();

    }catch(error){
        return res.status(401).json({ error: "Token inválido"});
    }
}