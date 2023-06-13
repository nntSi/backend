// import
db = require("../database.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = "asdaw3oionfdasdwq";

const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin_user = await db.admin.findOne({
      where: { username: username },
    });
    if (!admin_user) {
      return res.json({ msg: `no user`, sts: false });
    }
    if (admin_user.active === 0) {
      return res.json({ msg: `active = 0`, sts: false });
    }
    if (admin_user.active === 2) {
      return res.json({ msg: `active = 2`, sts: false });
    }
    const match = bcrypt.compareSync(password, admin_user.password);
    if (!match) {
      return res.json({ msg: `Password is not match`, sts: false });
    }
    const token = jwt.sign({ username: username }, PRIVATE_KEY, {
      expiresIn: "1h",
    });
    const saveTokenToDatabase = await db.admin.update(
      { token: token },
      { where: { username: username } }
    );
    res.json({ sts: true, msg: `Login success!!`, token: token });
  } catch (err) {
    res.json({ msg: `Error is ${err}` });
  }
};

module.exports = {
  adminLogin
}
