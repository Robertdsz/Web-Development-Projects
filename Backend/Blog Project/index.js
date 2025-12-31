import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let posts = [];
let nextId = 1;

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.post("/post", (req, res) => {
    const { title, content } = req.body;
    if(title && content){
        posts.unshift({
            id: nextId++,
            title,
            content,
            date: new Date()
        });
    }
    res.redirect("/");
});


//delete post
app.post("/post/:id/delete", (req, res) =>{
    const id = Number(req.params.id);
    posts = posts.filter((post) => post.id !== id);
    res.redirect("/");
})

// editar post (atualiza e volta pra mesma página)
app.post("/post/:id/edit", (req, res) => {
const id = Number(req.params.id);
const { title, content } = req.body;
posts= posts.map((post) => {
    if (post.id === id) {
        return {
            ...post,
            title: title || post.title,
            content: content || post.content
        };
    }
    return post;
})
res.redirect("/");
})

app.listen(port, () =>{
    console.log(`Server is running in port ${port}`);
})