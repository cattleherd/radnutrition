const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiarySchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    energy:{
        type: Number
    },
    carbs:{
        type: Number
    },
    fiber:{
        type: Number
    },
    sugar:{
        type: Number
    },
    fat:{
        type: Number
    },
    omega3:{
        type: Number
    },
    omega6:{
        type: Number
    },
    saturated:{
        type: Number
    },
    transfat:{
        type: Number
    },
    cholesterol:{
        type: Number
    },
    protein:{
        type: Number
    },
    b1:{
        type: Number
    },
    b2:{
        type: Number
    },
    b3:{
        type: Number
    },
    b5:{
        type: Number
    },
    b6:{
        type: Number
    },
    b12:{
        type: Number
    },
    folate:{
        type: Number
    },
    vitaminc:{
        type: Number
    },
    vitamind:{
        type: Number
    },
    vitamine:{
        type: Number
    },
    vitamink:{
        type: Number
    },
    calcium:{
        type: Number
    },
    copper:{
        type: Number
    },
    iron:{
        type: Number
    },
    magnesium:{
        type: Number
    },
    manganese:{
        type: Number
    },
    phosphorus:{
        type: Number
    },
    potassium:{
        type: Number
    },
    selenium:{
        type: Number
    },
    sodium:{
        type: Number
    },
    zinc:{
        type: Number
    }
})