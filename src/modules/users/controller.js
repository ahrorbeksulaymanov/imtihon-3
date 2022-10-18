import model from "./model.js";
import jwt from "../../lib/jwt.js";
const controller = {
  GET: async (req, res) => {
    const data = await model.GET();
    return res.status(200).send({
      status: 200,
      data: data,
      message: "success",
    });
  },
  

  LOGIN: async (req, res) => {
    const data = await model.LOGIN();
    if(data[0].username == req.body?.username && data[0].password == req.body?.password){
      return res.status(200).send({
        status: 200,
        data: data,
        token: jwt.sign(data[0]?.id),
        message: "success"
      });
    }
    return res.status(401).send({
      status: 401,
      message: "Unauthorized",
    });
  },
};

export default controller;
