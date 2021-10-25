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

route.get('/register', (req,res) => {
    res.render('page/register');
});

route.get('/profile', (req,res) => {
    res.render('page/profile');
});

route.get('/detailproduk', (req,res) => {
    res.render('page/detailproduk');
});

route.get('/createproduk', (req,res) => {
    res.render('page/createproduk');
});

route.get('/step', (req,res) => {
    res.render('page/step');
});

route.get('/home', (req,res) => {
    res.render('page/home');
});

route.get('/pagejasa', (req,res) => {
    res.render('page/pagejasa');
});

route.get('/pageiklan', (req,res) => {
    res.render('page/pageiklan');
});

route.get('/editprofile', (req,res) => {
    res.render('page/editprofile');
});

route.get('/about', (req,res) => {
    res.render('page/about');
});


route.get('/produksaya', (req,res) => {
    res.render('page/produksaya');
});

route.get('/editproduk', (req,res) => {
    res.render('page/editproduk');
});

route.get('/formeditproduk', (req,res) => {
    res.render('page/formeditproduk');
});

// 404

route.use('/', (req,res) => {
    res.render('page/404');
});








module.exports = route