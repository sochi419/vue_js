/*global Vue*/
new Vue({
  el: "#app",
  data: function () {
    return {
      storageKey: "todoList",
      newTodo: "",
      todoList: [],
    };
  },
  methods: {
    add: function () {
      for (var i = 0; i < this.todoList.length; i++) {
        this.todoList[i].done = false;
      }
      this.todoList.push({ text: this.newTodo, editText: "" });
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      this.newTodo = "";
    },
    remove: function (index) {
      this.todoList.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
    },
    update: function (index) {
      var todo = this.todoList[index];
      if (todo.editText !== "") {
        todo.text = todo.editText;
        todo.editText = "";
        localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      }
    },
    setEditTodoValue: function (todo, index) {
      this.todoList[index].editText = todo.text;
    },
  },
  created: function () {
    const dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todoList = JSON.parse(dataStr);
      for (var i = 0; i < this.todoList.length; i++) {
        this.todoList[i].done = false;
      }
    }
  },
});
