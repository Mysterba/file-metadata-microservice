var HomeController = require('./controllers/HomeController');
var path = require('path');
var multer = require('multer');

var storage = multer.memoryStorage();
var upload = multer({storage : storage});

// Routes
module.exports = function(app){
     
    // Main Routes
             
    app.get('/', HomeController.Index);
    
    app.post('/upload', upload.single('datafile'), function (req, res) {
        
        if (req.file) {
            var json = { filesize: req.file.size }
            res.json(json);
            res.end();
        } else {
            res.send("No file specified");
            res.end();
        }
        
    });
};