import { getDocs } from "firebase/firestore";
import { postReference } from "./FireApp";

//Get list of posts
export const getPostsDetailsFromDb = async () => {
  const postList = await getDocs(postReference);
  return postList;
};
