`use strict`;

const axios = require(`axios`);

//const baseUrl = process.env.API_HOST || `http://localhost:4000/`;
const baseUrl='';

module.exports = {
    call : async(endpoint, method, data, token, param, query) => {
        try {
            var config = {
            }

            if(token != `` && token != null){
                config = {
                    headers: {
                        'Authorization': 'Bearer ' + token
                      }
                } 
            }

            var newUrl = endpoint.split("_")
            endpoint = newUrl[0]

            var url = baseUrl + endpoint
            if(param != `` && param != null) url = url + `/${param}`
            if(query != `` && query != null) url = url + `?${query}`
            
            if(newUrl[1] != `` && newUrl[1] != null) url = url + `/${newUrl[1]}`

            const response = await axios({
                url : url,
                method : method,
                data : data,
                headers : config.headers
            })

            return response
        } catch (error) {
            return error.response
        }
    }
}
