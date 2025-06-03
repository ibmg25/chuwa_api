const service = require("../services/tableService");

exports.createTable = async (req, res) => {
  try {
    const id = await service.createTable(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTables = async (req, res) => {
  try {
    const { id, restaurantID, linkCode } = req.query;

    if (id) {
      const table = await service.getTableById(id);
      if (!table) return res.status(404).json({ error: "No encontrado" });
      return res.json(table);
    }

    if (restaurantID) {
      const tables = await service.getTablesByRestaurant(restaurantID);
      if (!tables) return res.status(404).json({ error: "No encontrado" });
      return res.json(tables);
    }

    if (linkCode) {
      const tables = await service.getTableByLinkCode(linkCode);
      if (!tables) return res.status(404).json({ error: "No encontrado" });
      return res.json(tables);
    }

    const tables = await service.getTables();
    res.json(tables);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getTableById = async (req, res) => {
  try {
    const table = await service.getTableById(req.params.id);
    if (!table) return res.status(404).json({ error: "No encontrado" });
    res.json(table);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTable = async (req, res) => {
  try {
    await service.updateTable(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTable = async (req, res) => {
  try {
    await service.deleteTable(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
