const express = require("express");
const router = express.Router();
const controller = require("../controllers/tableController");

router.post("/", controller.createTable);
router.get("/", controller.getTables);
router.get("/:id", controller.getTableById);
router.put("/:id", controller.updateTable);
router.delete("/:id", controller.deleteTable);

module.exports = router;
