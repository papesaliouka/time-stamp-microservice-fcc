

function dateController(req,res){
    let date = new Date(req.params.date);
    if(req.params.date.length<4){
        res.json({error: 'Invalid Date'})
        res.end()
    }else{
        let data = {unix: date.valueOf(), utc: date.toString()}
        res.json(data);
        res.end()
    }
}

function emptyDateController(req,res){
    res.send({unix: Date.now(), utc: Date().toString()})
}


module.exports = {dateController, emptyDateController};