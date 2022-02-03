const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const students = require('../controller/students');

router.get('/', async (req, res) => {
  const studentsList = await students.getAllStudents();
  res.render('admin', { studentsList });
});

router.get('/delete/:id', async (req, res, next) => {
  await students.deleteStudent(req);
  res.redirect('/admin');
});

router.get('/create', async (req, res, next) => {
  res.render('adminCreate');
});

router.post('/create', upload.none(), async (req, res, next) => {
  await students.createStudent(req.body);
  res.send(`Hello ${req.body.name}`);
});

router.get('/:id', async (req, res, next) => {
  const student = await students.getStudentById(req.params.id);
  res.render('adminUpdate', { student });
});

router.post('/:id', upload.none(), async (req, res, next) => {
  await students.updateStudentById(req.body);
  res.send('update is ok');
});

module.exports = router;
