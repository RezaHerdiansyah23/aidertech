`use strict`;

const route = require(`express`).Router({mergeParams : true});
const axios = require(`@services/axios`);

//const middleware = require('./middleware')

//WEBSITE
route.get(`/`, async (req,res) => { 
    res.render(`page/index`) 
});

route.get('/index', (req,res) => {
    res.render('page/index');
});

route.get('/login', (req,res) => {
    res.render('page/login');
});

route.get('/login2', (req,res) => {
    res.render('page/login2');
});

route.get('/register', (req,res) => {
    res.render('page/register');
});


route.get('/bahan', (req,res) => {
    res.render('page/bahan');
});

route.get('/kategoribhn', (req,res) => {
    res.render('page/kategoribhn');
});

route.get('/produk', (req,res) => {
    res.render('page/produk');
});

route.get('/kategoripdk', (req,res) => {
    res.render('page/kategoripdk');
});

route.get('/laporanuser', (req,res) => {
    res.render('page/laporanuser');
});

route.get('/laporanadmin', (req,res) => {
    res.render('page/laporanadmin');
});

route.get('/pengguna', (req,res) => {
    res.render('page/pengguna');
});

route.use('/', (req,res) => {
    res.render('page/404');
});








module.exports = route