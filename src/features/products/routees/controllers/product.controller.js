//product controllers

const Product = require('../../../../../config/models/product.model');

module.exports = {
    //listing all the product
    listProducts: async (req, res) => {
        let productList = await Product.find({})
        if (!productList) {
            res.status(500).json({ success: false })
        }
        console.log("Listed all products ")
        res.send({ data: { products: [productList] } })

    },
    // //adding a new product
    addProduct: function (req, res) {
        const newProduct = new Product({
            id: req.body._id,
            name: req.body.name,
            quantity: req.body.quantity
        })
        Product.findOne({ name: req.body.name })
            .then(existingProduct => {
                if (existingProduct) {
                    return res.status(400).send("A product already exists with the same name");
                }
                // If no product with the same name exists, proceed to create and save the new product
                const newProduct = new Product({ id: req.body.id, name: req.body.name, quantity: req.body.quantity });
                newProduct.save()
                    .then(() => {
                        console.log("product saved")
                        res.status(200).send({ data: { product: newProduct } });
                    })
                    .catch((err) => {
                        console.error('Error adding product:', err);
                        res.status(500).send("error in adding product");
                    });
            })
            .catch(err => {
                console.error('Error checking for existing product:', err);
                res.status(500).send("Error checking for existing product");
            });


    },
    deleteProduct: async (req, res) => {
        let productId = req.params.id
        console.log(productId)
        try {
            let result = await Product.findByIdAndDelete(productId)
            res.send({data:{message:"product deleted"}}).json()
        } catch (err) {
            console.log("eror in deleting", err)
            res.status(500).send({ error: "error in deleting" })
        }

    },
    // updating a product
    updateProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const updates = req.body;
            const result = await Product.findByIdAndUpdate(productId, updates,{new:true})
            res.send({data:{products:{result},message:"updated successfully"}})
        } catch {
            console.log("error")
        }
    }

};



