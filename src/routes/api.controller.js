

function dateController(req,res){
    if(req.params.date){
        let date = Date.now();
        let str = Date(req.params.date).toString();
        let data = {unix: date, utc: str}
        res.send(data)
    }else{
        res.send({error: 'Invalid Date'})
    }
    res.end()
}

function emptyDateController(req,res){
    res.send({unix: Date.now(), utc: Date().toString()})
}


module.exports = {dateController, emptyDateController};