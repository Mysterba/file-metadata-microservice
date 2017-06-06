exports.Index = function(request, response){
    response.title = 'File size sniffer - By Dennis van Wattingen';
    response.render('Home/Index', response);
};