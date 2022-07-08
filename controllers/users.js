const { response, request } = require('express')

const usersGet= (req = request, res = response) => {

    res.json({
        msg: 'get API - controlador',
        q
    });
};

const usersPost= (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - controlador',
        body
    });
};

const usersPut= (req, res = response) => {

    const { id } = req.params;
    const { q, name, apiKey } = req.query;

    res.json({
        msg: 'post API - controlador',
        id,
        q,
        name,
        apiKey
    });
};

module.exports = {
    usersGet,
    usersPost,
    usersPut
}