let http = require('http');
let users = [
    {id:100,name:'user1'},
    {id:101,name:'user2'},
    {id:1002,name:'user3'}
]
let server = http.createServer(function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  if(req.url === '/api/users'){
      res.json(users);
  }else{
      res.send('API Not Found');
  }
});
server.listen(3000,()=>{
    console.log('Server Run Port: 3000')
});