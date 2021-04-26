const router = require('express').Router();

const portfolio = require('./portfolio');

router.get('/', (req, res) => {
    res.json({
        'success': true
    })
});


router.use('/portfolio', portfolio);

module.exports = router;