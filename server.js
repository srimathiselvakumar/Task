const express = require('express'); 
const server = express(); 
const port = 5000;
const items=[
     { id:1,name:'jeans'},
     {id:2,name:'tops'}


];
server.use(express.json());


server.get('/', (req, res) => {
    res.end("Server is running"); 
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
server.delete('/product/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10); 
    const itemIndex = items.findIndex((item) => item.id === itemId);
    
    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1); 
        res.json({ message: 'Item deleted successfully', deletedItem }); 
    } else {
        res.status(404).send('Item not found in database'); 
    }
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


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
