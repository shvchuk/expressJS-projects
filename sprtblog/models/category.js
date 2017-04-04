const mongoose = require('mongoose');

//category schema
const categorySchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

const Category = module.exports = mongoose.model('Category', categorySchema);

// get categories
module.exports.getCategories = function(callback, limit){
    Category.find(callback).limit(limit).sort([['title', 'ascending']]);
};

// add category
module.exports.addCategory = function(category, callback){
    Category.create(category, callback);
};

// get single category by id
module.exports.getCategoryById = function(id, callback){
    Category.findById(id, callback);
};

// upodating category
module.exports.updateCategory = function(query, update, options, callback){
    Category.findOneAndUpdate(query, update, options, callback);
};

// removing category
module.exports.removeCategory = function(query, callback){
    Category.remove(query, callback);
};