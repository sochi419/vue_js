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
      this.todoList.push({ text: this.newTodo });
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      this.newTodo = "";
    },
    remove: function (index) {
      this.todoList.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
    },
    update: function (index) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
    },
    setEditTodoValue: function (todo, index) {
      this.todoList[index].text = todo.text;
    },
  },
  created: function () {
    const dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todoList = JSON.parse(dataStr);
    }
  },
});
