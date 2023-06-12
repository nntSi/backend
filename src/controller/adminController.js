// import
const { connection } = require("../database");

const findAdmin = async (req, res) => {
  try {
    
  } catch (err) {
    res.json({ msg: `Error is ${err}` });
  }
};

const createAdmin = async (req, res) => {
  try {
    const data = req.body;
    res.json({ msg: `Success`, body: data });
  } catch (err) {
    res.json({ msg: `Error is ${err}` });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const data = req.body;

    res.json({ msg: `Success`, body: data });
  } catch (err) {
    res.json({ msg: `Error is ${err}` });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const data = req.body;

    res.json({ msg: `Success`, body: data });
  } catch (err) {
    res.json({ msg: `Error is ${err}` });
  }
};

module.exports = {
  findAdmin,
  createAdmin,
  deleteAdmin,
  updateAdmin,
};
