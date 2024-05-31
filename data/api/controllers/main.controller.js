function init(req, res){
    res.status(200).send('Back-end status active. <br><br>Powered by: EasyBK - Aurora Studios Template');
}

function notfound(req, res){
    res.status(404).send('Server router: Not Found.');
}

module.exports = {
    init,
    notfound
}