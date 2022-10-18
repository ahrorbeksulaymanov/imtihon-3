import { fetch, fetchAll } from "../../lib/postgres.js";
import {
  GETDATA,
  POSTDATA,
  DELETEDATA,
  UPDATEDATA,
  CHECKPERMISSION,
  GETONEDATA,
  ADDCOUNT
} from "./query.js";

const GET = async ({search = '', date = '', sub_category_id = null, format = '', firstname = '', page = null, limit = null}) => {
  try {
    const allData = await fetchAll(GETDATA, [search, date, sub_category_id, format, firstname, page, limit]);
    // [search, date, sub_category_id, format, firstname, status]
    return allData;
  } catch (error) {
    console.log(error);
  }
};

const GETONE = async (id) => {
  try {
    const data = await fetchAll(GETONEDATA, [id]);
    await fetchAll(ADDCOUNT, [id, data[0].count+1]);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({
  title,
  firstname,
  lastname,
  position,
  time,
  format,
  date,
  number,
  description,
  sub_category_id,
}) => {
  try {
    return await fetch(POSTDATA, [
      title,
      firstname,
      lastname,
      position,
      time,
      format,
      date,
      1,
      number,
      description,
      sub_category_id,
    ]);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ id }) => {
  try {
    return await fetch(DELETEDATA, [id, 0]);
  } catch (error) {
    console.log(error);
  }
};

const UPDATE = async (id, body) => {
  try {
    return await fetch(UPDATEDATA, [
      id,
      body.title,
      body.firstname,
      body.lastname,
      body.position,
      body.time,
      body.format,
      body.date,
      body.status,
      body.description,
      body.view_count_id,
      body.sub_category_id,
    ]);
  } catch (error) {
    console.log(error);
  }
};

const checkPermission = async (id, status) => {
  try {
    return await fetch(CHECKPERMISSION, [id, status]);
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, DELETE, UPDATE, checkPermission, GETONE };
