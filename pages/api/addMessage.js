import { db } from "./Database/Connection"
import { collection, addDoc } from "firebase/firestore"

export default async function addMessage(req, res) {
    if (req.method === 'POST') {
        try {

            const docRef = await addDoc(collection(db, 'Chat'), {
                name: req.body.name,
                email: req.body.email,
                image: req.body.image,
                message: req.body.message
            })

            console.log({ "DOCUMENT ID: ": docRef.id })

        } catch (error) {
            res.status(500).json('ERROR REQUEST')
        }
    } else {
        res.status(400).json('INVALID METHOD')
    }
}