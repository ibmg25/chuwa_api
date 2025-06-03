const service = require("../services/productService");

exports.createProduct = async (req, res) => {
  try {
    const id = await service.createProduct(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { id, restaurantID } = req.query;

    if (id) {
      const product = await service.getProductById(id);
      if (!product) return res.status(404).json({ error: "No encontrado" });
      return res.json(product);
    }

    if (restaurantID) {
      const products = await service.getProductsByRestaurant(restaurantID);
      if (!products) return res.status(404).json({ error: "No encontrado" });
      return res.json(products);
    }

    const products = await service.getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await service.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "No encontrado" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await service.updateProduct(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await service.deleteProduct(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
