import { fetch, fetchAll } from "../../lib/postgres.js";
import {
  DELETECATEGORY,
  GETCATEGORY,
  POSTCATEGORY,
  UPDATECATEGORY,
} from "./query.js";

const GET = async () => {
  try {
    const categoris = await fetchAll(GETCATEGORY, []);

    return categoris;
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({ name }) => {
  try {
    return await fetch(POSTCATEGORY, [name]);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ id }) => {
  try {
    return await fetch(DELETECATEGORY, [id, 0]);
  } catch (error) {
    console.log(error);
  }
};

const UPDATE = async (id, name) => {
  try {
    return await fetch(UPDATECATEGORY, [id, name]);
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, DELETE, UPDATE };
