/**
 * Created by rdevansjr on 6/14/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:dte', function(req, res, next) {
    if (!req.params.dte) {
        next();
        return;
    }

    inDate =  Number.isInteger(+req.params.dte) ? new Date(req.params.dte * 1000) : new Date(req.params.dte);

    if(inDate.getTime())
        res.send({
            "unix": inDate.getTime() / 1000,
            "natural": inDate.toDateString()
        });
    else
        res.send({
            "unix": null,
            "natural": null
        });

});

module.exports = router;