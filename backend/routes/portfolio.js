const router = require('express').Router();


router.get('/', (req, res) => {
    const data = [{
        id: 1,
        name: "my first project!",
        createdAT: '2020-01-25'
    },
    {
        id: 2,
        name: "my second project!!",
        createdAT: '2020-03-10'
    },
    {
        id: 3,
        name: "my other project!!!",
        createdAT: '2021-04-18'
    }
    ];
    res.json({
        'success': true,
        data: data
    })
});


module.exports = router