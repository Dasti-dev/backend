const nft = require('../model/nft.json');

async function bid(req,res) {
    // money value get , check if has enough , raises alert at other side
}

async function deal(req,res) {
    const value = req.body.deal;
    if(value)
    {
        // payment
        // user name change and value updated
    }
    else{
        // push notification decline
    }
}

async function page(req,res) {
    const data = nft;
    res.json(data);
}

async function node(req,res)
{
    const name = body.params.id;
    const data = user.find(function(item){
        return (item.name === name);
    })
    res.status(500).json(data);
}

module.exports = {
    bid , page , deal , node
}