module.exports = (app)=>{
const groups =[
    new groups('group1','thiss is group1'),
];
app.get('/api/groups',(req,res)=>{
    res.send(groups);
});
};

class group{
    constructor(
        name,
        desription
    ){
        this.name = name;
        this.desription = desription;
    }
}