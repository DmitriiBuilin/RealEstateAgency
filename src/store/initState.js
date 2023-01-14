import objectsDataBase from "../server/server"

/* parse json */
const objects = JSON.parse(objectsDataBase);

export const initState = {
    currency: "usd",
    languge: "rus",
    page: "rent",
    pageParam: "",
    fullDataBase: objects,
  }