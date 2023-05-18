import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { postReference, storage } from "./FireApp";

export const createNewPost = async (postData) => {
  try {
    // Upload the file to Firebase storage and get its download URL
    const fileRef = ref(storage, `${Date.now()}-${postData.filePath.name}`);
    await uploadBytes(fileRef, postData.filePath);
    const downloadUrl = await getDownloadURL(fileRef);
    // Create a new document in the "posts" collection with the form data and file URL
    await addDoc(postReference, {
      title: postData.title,
      content: postData.content,
      imgURL: downloadUrl,
      published_at: serverTimestamp(),
    });
    // Log a success message to the console
    console.log("Post added successfully!");
  } catch (error) {
    console.error("Error adding post: ", error);
  }
};
