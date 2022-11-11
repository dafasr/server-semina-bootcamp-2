// import model category
// const { findById } = require('./model');
// const Categories = require('./model');
//karena udah gk pakai model lagi

const { StatusCodes } = require('http-status-codes');
const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require('../../../services/mongoose/categories');

// buat function create
const create = async (req, res, next) => {
  try {
    // // membuat categories baru menggunakan data dari `name`
    // const { name } = req.body;

    // // simpan Category yang baru dibuat ke MongoDB
    // const result = await Categories.create({ name });

    const result = await createCategories(req);

    // berikan response kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(err);
  }
};

//untuk get all categories
const index = async (req, res, next) => {
  try {
    const result = await getAllCategories();
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//untuk cari
const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//untuk update
const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//untuk hapus
const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Export fungsi create pada controller categories
module.exports = {
  index,
  find,
  create,
  update,
  destroy,
};
