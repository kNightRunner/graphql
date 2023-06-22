const Task = require("./model/Task");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
    async getTasks(_, args) {
      const task = await Task.findById(args.id);
      return task;
    },
  },
  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args.task;
      const task = new Task({ title, description });
      await task.save();
      return task;
    },
    async deleteTask(_, { id }) {
      const task = await Task.findByIdAndDelete(id);
      return "Task deleted";
    },
    async updateTask(_, { id, task }) {
      const taskUpdated = await Task.findByIdAndUpdate(
        id,
        {
          $set: task,
        },
        { new: true }
      );
      //para que es new: true?
      return taskUpdated;
    },
  },
};

module.exports = { resolvers };
