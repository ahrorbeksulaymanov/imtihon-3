import { fetchAll } from "../../lib/postgres.js";
import {
  GETUSERS,
} from "./query.js";

const GET = async () => {
  try {
    const categoris = await fetchAll(GETUSERS, []);

    return categoris;
  } catch (error) {
    console.log(error);
  }
};

const LOGIN = async () => {
  try {
    return await fetchAll(GETUSERS, []);
  } catch (error) {
    console.log(error);
  }
};

export default { GET, LOGIN };
