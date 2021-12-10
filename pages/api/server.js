import { Connection } from "./Database/Connection";

export default function handler(req, res) {
    if (Connection) {
        res.status(200).json('Connected')
    }
    else {
        res.status(400).json('Error')
    }
}