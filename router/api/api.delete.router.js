const router = require("express").Router();
const { Drug } = require("../../db/models");

router.delete("/:drugId", async (req, res) => {
  try {
    const { drugId } = req.params;
    const result = await Drug.destroy({ where: { id: drugId } });
    if (result > 0) {
      res.json({ message: "success" });
      return;
    }
  } catch ({ message }) {
    res.json({ message: "router delete" });
  }
});

module.exports = router;
