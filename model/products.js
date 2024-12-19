const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    price :{
        type : String,
        required : true
    },
    disc_price :{
        type : number,
        required : false
    },
    rating :{
        type : number,
        required : false, 
    },
    description :{
        type : string,
        required : false,
    },
    
    img :{
        type : string,
        required : false,
    },
     categary_type :{
            type : mongoose.Schema.Types.ObjectId,
            required : false,
            ref: 'users'
      },
})

module.exports = mongoose.model('products' , productsSchema);