import { uploadBytes , ref } from "firebase/storage";
import { storage } from "./googleFirebase";


export const storageRef = ref(storage);
export const imagesRef = ref(storage, 'images');
export const imgRef = ref(storage, 'images/10.jpg');

const metadata = {
    contentType: 'image/jpeg',
  };

// const file = ;

// 'file' comes from the Blob or File API
// uploadBytes(storageRef, file, metadata).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//   });