const express = require('express');
const router = express.Router();
const expenseHandler = require('../controllers/expenses');
const {CONST} = require('../utils/constants');

router.post('/', async (req, res) => {

    try{
    const amount = req.body[CONST.params.amount];
    const category = req.body[CONST.params.category];
    const description = req.body[CONST.params.description];
    const date = req.body[CONST.params.date];
    const user = req.body[CONST.params.user];

        try {
            const id = await expenseHandler.createExpense(amount, category, description, date, user);
            console.log(id);
            res.status(200).send(id);
        } catch(error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    } catch(error){
        console.log(error);
        res.status(400).send('Bad Request')
    } 
});

module.exports = router;