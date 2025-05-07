const express = require("express");
const router = express.Router();
const controller = require("../controllers/requestController");

router.post("/", controller.createRequest);
router.get("/", controller.getRequests);
router.get("/:id", controller.getRequestById);
router.put("/:id", controller.updateRequest);
router.delete("/:id", controller.deleteRequest);

module.exports = router;
