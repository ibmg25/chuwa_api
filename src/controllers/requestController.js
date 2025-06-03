const service = require("../services/requestService");

exports.createRequest = async (req, res) => {
  try {
    const id = await service.createRequest(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const { id } = req.query;

    if (id) {
      const request = await service.getRequestById(id);
      if (!request) return res.status(404).json({ error: "No encontrado" });
      return res.json(request);
    }

    const requests = await service.getRequests();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRequestById = async (req, res) => {
  try {
    const request = await service.getRequestById(req.params.id);
    if (!request) return res.status(404).json({ error: "No encontrado" });
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRequest = async (req, res) => {
  try {
    await service.updateRequest(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    await service.deleteRequest(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
