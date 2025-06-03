const service = require("../services/restaurantService");

exports.createRestaurant = async (req, res) => {
  try {
    const id = await service.createRestaurant(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const { id } = req.query;

    if (id) {
      const restaurant = await service.getRestaurantById(id);
      if (!restaurant) return res.status(404).json({ error: "No encontrado" });
      return res.json(restaurant);
    }

    const restaurants = await service.getRestaurants();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await service.getRestaurantById(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "No encontrado" });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    await service.updateRestaurant(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    await service.deleteRestaurant(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
