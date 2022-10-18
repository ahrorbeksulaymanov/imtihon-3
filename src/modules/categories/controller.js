import model from "./model.js";

const controller = {
  GET: async (req, res) => {
    const data = await model.GET();
    return res.status(200).send({
      status: 200,
      data: data,
      message: "success",
    });
  },
  
  POST: async (req, res) => {
    const data = await model.POST(req.body);
    return res.status(200).send({
      status: 200,
      data: data,
      message: "success",
    });
  },

  DELETE: async (req, res) => {
    const data = await model.DELETE(req.params);
    return res.status(200).send({
      status: 200,
      message: "deleted",
    });
  },

  UPDATE: async (req, res) => {
    const data = await model.UPDATE(req.params?.id, req.body?.name);
    return res.status(200).send({
      status: 200,
      data: data,
      message: "updated",
    });
  },
};

export default controller;
