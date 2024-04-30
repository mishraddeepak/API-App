const express = require('express')
const router=express.Router()
const productManger = require('../controllers/product.controller')

router.get('/',productManger.listProducts)
router.post('/',productManger.addProduct)
router.delete('/:id',productManger.deleteProduct)
router.patch('/:id',productManger.updateProduct)




 
module.exports=router