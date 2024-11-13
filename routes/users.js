var express = require("express");
var router = express.Router();
const db = require("../models/index.js");

const allowedUpdates = ["about", "email", "password", "birthday", "address"];

/* GET users list */
router.get("/", async function (req, res, next) {
  const users = await db.User.findAll({ include: [db.UserAddress] });
  res.json({ users: users });
});

/* POST users */
router.post("/", async function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }
  const user = await db.User.create({
    email: req.body.email,
    password: req.body.password,
  });
  res.json({ user: user });
});

/* Patch users */
router.patch("/:id", async function (req, res, next) {
  const id = req.params.id;
  const user = await db.User.findByPk(id);

  for (let item of Object.keys(req.body)) {
    const key = item;
    const val = req.body[key];

    if (allowedUpdates.includes(key)) {
      if (key == "address") {
        var address = await db.UserAddress.findOne({ where: { UserId: id } });
        if (!address) {
          address = await db.UserAddress.create({ UserId: id });
        }
        address.address_line_1 = val["address_line_1"];
        address.address_line_2 = val["address_line_2"];
        address.city = val["city"];
        address.state = val["state"];
        address.zipcode = val["zipcode"];
        await address.save();
      } else {
        user.setDataValue(key, val);
      }
    }
  }
  await user.save();

  res.json({ success: true });
});

module.exports = router;
