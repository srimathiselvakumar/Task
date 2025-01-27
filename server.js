const express = require('express'); // Corrected the import statement
const server = express(); // Initialize Express
const port = 5000;
const items=[
     { id:1,name:'jeans'},
     {id:2,name:'tops'}


];
server.use(express.json());

// Define a route for the root path
server.get('/', (req, res) => {
    res.end("Server is running"); // Changed to res.send for a proper HTTP response
});
server.get('/product',(req,res)=>{
    res.json(items);
})
server.post('/product',(req,res)=>
{
     newitem={id:items.length+1,name:req.body.name};
     items.push(newitem);
     res.status(201).json(newitem);

});
server.put('/product/:id',(req,res)=>
{
   const itemid=parseInt(req.params.id);
   const updateditems=items.findIndex((item) => item.id===itemid);
   if(updateditems !==  -1)
   {
      items[updateditems].name=req.body.name;
      res.json(items[updateditems]);

   }
   else{
     res.status(404).json("items not found in data base")
   }
}
);

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
