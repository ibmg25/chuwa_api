const service = require("../services/userService");

exports.createUser = async (req, res) => {
  try {
    const id = await service.createUser(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const { id } = req.query;

    if (id) {
      const user = await service.getUserById(id);
      if (!user) return res.status(404).json({ error: "No encontrado" });
      return res.json(user);
    }

    const users = await service.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "No encontrado" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await service.updateUser(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await service.deleteUser(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
