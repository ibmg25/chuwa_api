const service = require("../services/orderService");

exports.createOrder = async (req, res) => {
  try {
    const id = await service.createOrder(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const { id } = req.query;

    if (id) {
      const order = await service.getOrderById(id);
      if (!order) return res.status(404).json({ error: "No encontrado" });
      return res.json(order);
    }

    const orders = await service.getOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await service.getOrderById(req.params.id);
    if (!order) return res.status(404).json({ error: "No encontrado" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    await service.updateOrder(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await service.deleteOrder(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
