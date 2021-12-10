import { db } from "./Database/Connection";
import { collection, getDocs } from "firebase/firestore";

export default async function getMessage(req, res) {
    const querySnapshot = await getDocs(collection(db, 'Chat'));
    let datalist = []
    querySnapshot.forEach((doc) => {
        datalist.push(doc.data())
    })

    return await datalist
}