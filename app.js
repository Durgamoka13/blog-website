const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const dbURI ='mongodb+srv://durga:Durga123@nodetuts.e8hwls9.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts';
mongoose.connect(dbURI)
 .then((result)=>app.listen(3000))
 .catch((err)=>{console.log(err)});
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


// app.get('/add-blog',(req,res)=>{
//    const blog = new Blog({
//       title:'The ELon Musk',
//       snippet:'The G.O.T',
//       body:'CEO of Tesla motors,CTO of SpaceX'
//    });

//    blog.save()
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((err)=>{
//       console.log(err);
//     });
// });

// app.get('/all-blogs',(req,res)=>{
//    Blog.find()
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
// })

// app.get('/single-blog',(req,res)=>{
//    Blog.findById('65f87e65f8e32d63b573ef48')
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
// })








app.get('/',(req,res)=>{
   //res.send('<p>Home Page</p>');
   //res.sendFile('./views/index.html',{root:__dirname});

//    const blogs = [
//     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'Uhana loves Durga', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   ];
//    res.render('index',{title:'Home',blogs});
  res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
  //res.send('<p>Home Page</p>');
  //res.sendFile('./views/about.html',{root:__dirname});
  res.render('about',{title:'About'});
})

app.use('/blogs',blogRoutes);


 app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});

 })

 
