//create a todo list api that will handle get post put delete requests and can be used in front end to create a todo list and fetch and delete todos

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [
    {
        id: 1,
        title: 'Learn Node.js',
        completed: false
    },
    {
        id: 2,
        title: 'Learn React.js',
        completed: false
    },
    {
        id: 3,
        title: 'Learn Angular.js',
        completed: false
    }
];

app.get('/todos', (req, res) => {
    res.json(todos);
}
);

app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.json(todo);
}
);

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id == id);
    todo.completed = !todo.completed;
    res.json(todo);
}
);

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id != id);
    res.json({ id });
}
);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
}
);


