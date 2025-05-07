const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurantController");

router.post("/", controller.createRestaurant);
router.get("/", controller.getRestaurants);
router.get("/:id", controller.getRestaurantById);
router.put("/:id", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);

module.exports = router;
