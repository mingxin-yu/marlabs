const TodoModel = require("../model/todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    const createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (err) {
    next(err);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
  }
  catch(err)
  {
      next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
   try{
    const todoModel = await TodoModel.findById(req.params.todoId);
    if(todoModel){
        res.status(200).json(todoModel);
    }
    else{
        res.status(404).send();
    }
   }
   catch(err)
   {
       next(err);
   }
};
////////////////////////////new///////////////////////////////////
exports.updateTodo = async (req, res, next) => {
    try {
        const updateTodo = await TodoModel.update(req.body);
        if(updateTodo){
            res.status(200).json(updateTodo);
        }
        else{
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const deleteModel = await TodoModel.create(req.body);
        if(deleteModel){
            res.status(200).json(deleteModel);
        }
        else{
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};
