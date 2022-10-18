import model from "./model.js";

const controller = {
  GET: async (req, res) => {
    const data = await model.GET(req.query);
    return res.status(200).send({
      status: 200,
      data: data,
      message: "success",
    });
  },

  GETONE: async (req, res) => {
    const data = await model.GETONE(req.params?.id);
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
    const data = await model.UPDATE(req.params?.id, req.body);
    return res.status(200).send({
      status: 200,
      data: data,
      message: "updated",
    });
  },

  
  CHECKPERMISSION: async (req, res) => {
    const data = await model.checkPermission(req.params?.id, req.body.status);
    return res.status(200).send({
      status: 200,
      data: data,
      message: "permission is changed!",
    });
  },
};

export default controller;
