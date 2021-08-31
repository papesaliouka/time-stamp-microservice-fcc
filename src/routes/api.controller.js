

function dateController(req,res){
    let date = req.params.date;
    if(date.length==13 && new Date(date) == 'Invalid Date'){
        let format =new Date(date*1).toString()
        return res.send({unix:Number(date), utc: new Date(format).toGMTString()})
    }
    if(new Date(date) == 'Invalid Date') {
      return res.send({error: 'Invalid Date' })
    }
    if(date.length>=4){
        return res.json({unix: new Date(date).valueOf(), utc: new Date(date).toGMTString()})
    }
    res.send({error: "Invalid Date"})
}




module.exports = {dateController};