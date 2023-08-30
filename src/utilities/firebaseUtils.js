import { db } from "../firebase"; 

export const fetchData = async () => {
    const docRef = db
        .collection("Users")
        .doc("YOUR_DOCUMENT_ID"); // add document ID

    const doc = await docRef.get();
    if (doc.exists) {
        return doc.data();
    } else {
        console.log("Document not found");
    }
};

