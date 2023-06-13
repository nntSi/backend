// import
const db = require("../database.js");
const bcrypt = require('bcryptjs');

const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const count = await db.admin.count({
      where: {
        username: username
      }
    });
    if(count > 0){
      return res.json({msg: 'มี username แล้ว', sts: false});
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const result = await db.admin.create({
      username: username,
      password: hash
    });
    res.json({ msg: `Success`, body: result });
  } catch (err) {
    res.json({ msg: `Error is ${err}` });
  }
};

module.exports = {
  createAdmin,
};
