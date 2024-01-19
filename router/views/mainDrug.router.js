const router = require("express").Router();
const { Drug } = require("../../db/models");
const DrugDescriptionPage = require("../../components/DrugPage");
const DrugItemPage = require("../../components/DragListPage");

router.get("/", async (req, res) => {
  try {
    const drugs = await Drug.findAll({ order: [["id", "DESC"]] });
    const html = res.renderComponent(DrugItemPage, {
      title: " Drug Page",
      drugs,
    });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/drugs/:drugId', async (req, res) => {
  try {
    const { drugId } = req.params;
    const drug = await Drug.findOne({ where: { id: drugId } });
    const html = res.renderComponent(DrugDescriptionPage, { title: "О лекарстве", drug })
    res.send(html)
  } catch ({ message }) {
    res.json({ message })
  }
})

module.exports = router;
