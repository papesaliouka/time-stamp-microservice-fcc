

function dateController(req,res){
    let date = req.params.date;
    console.log(date.length)
    if(new Date(date) !== 'Invalid Date' && date.length>=4){
        return res.json({unix: new Date(date).valueOf(), utc: new Date(date).toString()})
    }
    res.json({error: 'Invalid Date'})
}




module.exports = {dateController};