import objectsDataBase from "../server/server"

/* parse json */
const objects = JSON.parse(objectsDataBase);
console.log(objects)

export const initState = {
    currency: "usd",
    languge: "rus",
    page: "rent",
    pageParam: "",
    fullDataBase: objects,
  }