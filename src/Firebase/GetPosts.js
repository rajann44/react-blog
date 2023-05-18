import { Query, getDocs, orderBy, query } from "firebase/firestore";
import { postReference } from "./FireApp";

//Get list of posts
export const getPostsDetailsFromDb = async () => {
  const orderedQuery = query(postReference, orderBy("published_at", "desc"));
  const querySnapshot = await getDocs(orderedQuery);
  //const postList = await getDocs(postReference, orderBy("published_at"));
  return querySnapshot;
};
