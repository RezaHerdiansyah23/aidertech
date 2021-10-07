
const route = require(`express`).Router({mergeParams : true})
const axios = require(`@services/axios`)

function parseCookies (request) { 
    var list = {},
        rc = request.headers.cookie

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=')
        list[parts.shift().trim()] = decodeURI(parts.join('='))
    });

    return list;
}

route.get('/namaroute', async(req,res) => {
    var cookie = parseCookies(req)
    console.log(cookie)
    let data = await axios.call(`v1/namaapi`, `GET`, null,null, null, null)
   // console.log(data.data)
    if(!data.data.message) return res.status(500).send({success : false, message : `Internal server error`})
    res.status(data.status).send(data.data)
})

route.get('/article', async(req,res) => {
    var cookie = parseCookies(req)
    console.log(cookie)
    let data = await axios.call(`https://newsapi.org/v2/everything?q=tesla&from=2021-05-24&sortBy=publishedAt&apiKey=32e26cd4954447d886741c9288125843`, `GET`, null,null, null, null)
    console.log(data)
    //if(!data.data.message) return res.status(500).send({success : false, message : `Internal server error`})
    res.status(data.status).send(data.data)
})

module.exports = route
