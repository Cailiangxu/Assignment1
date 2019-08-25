module.exports = (app)=>{
const channel =[
    new groups('channel','thiss is channel'),
];
app.get('/api/channel',(req,res)=>{
    res.send(channel);
});
};

class channel{
    constructor(
        name,
        desription
    ){
        this.name = name;
        this.desription = desription;
    }
}