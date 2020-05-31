
const express = require('express');

const router = express.Router();

router.get('/course/list', function (req, res, next) {
    console.log('/course/list');

    return res.json({
        status: {
            code: 200
        },
        list: [
            {name: 'web架构师', price: 10000},
            {name: 'js高级工程师', price: 9000}

        ]
    });

});

module.exports = router;
