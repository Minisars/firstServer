var Login = module.exports;

Login.id = 123;
Login.name = "sars";

Login.userId=function(funData,callBack,callTar)
{
    console.log("3----",funData);
    if(funData.p.name == this.name)
    {
        var rd = { "name":"你是","age" : "12","address" : "1231","code":0};
    }else{
        var rd = { "err":"用户名不对"};
    }
        callBack.call(callTar,JSON.stringify(rd));
}

//module.exports = Login;