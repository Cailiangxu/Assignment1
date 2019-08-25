module.exports = (app)=>{
    const users =[
        new User('super','1-1-2019',11,'email@super.com','super,false'),
        new User('group','1-1-2019',11,'email@group.com','group,false'),
        new User('super','1-1-2019',11,'email@assi.com','ass,false'),
        new User('user1','1-1-2019',11,'email@user1.com','user1,false'),
    ];
    app.get('/api/users',(req,res)=>{
        res.send(users);

    });
    app.post('/api/login',(req,res)=>{
        if(!req.body){
            return res.sendStatus(400);
        }
        const username = req.body.username;
        const password = req.body.password;

        // console.log({body:req});
        const result = users.find(user=>user.username===username && user.password===password);
        if(!result) return res.status(404).send('can not login, username or password is wrong.');
        result.valid =true;
        res.send(result);
    });

};

class User{
    constructor (
        username,
        birtDate,
        age,
        email,
        password,
        valid

    )
    {
        this.username=username;
        this.birtDate=birtDate;
        this.age=age;
        this.email=email;
        this.password=password;
        this.valid=valid;
    }
}