import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    console.log("AUTH REQUIRED")
    console.log(req.headers.authorization.split(' ')[1])
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)

    if (!token) return res.status(401).json({ message: 'No token, authorization denied' })

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: 'Invalid token' })

        req.user = user
        console.log(user)
        next()
    })



}