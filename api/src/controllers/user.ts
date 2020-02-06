import { Response, Request } from "express";
import { User } from "../model/User";

export const getUsers = (req: Request, res: Response) => {
    User.find({}, '-_id', (err, users) => {
        if(err) {
            res.status(400).send(err)
        }

        res.send(users)
    })
}
