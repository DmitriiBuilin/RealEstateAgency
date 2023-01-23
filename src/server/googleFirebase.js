import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import objectsDataBase from "./server";


export const Firebase = () => {
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://antalya-realty.firebaseio.com",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

//   set(ref(database), {
//     objectsDataBase;
//   });
  
  console.log(database);
};

export default Firebase;
