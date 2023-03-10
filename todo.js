/*global Vue*/
new Vue({
  el: "#app",
  data: function () {
    return {
      storageKey: "todolist",
      newtodo: "",
      todolist: [],
    };
  },
  methods: {
    addTodo: function () {
      this.todolist.push({ text: this.newtodo });
      localStorage.setItem(this.storageKey, JSON.stringify(this.todolist));
      this.newtodo = "";
    },
    remove: function (index) {
      this.todolist.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(this.todolist));
    },
    update: function (index) {
      this.todolist.splice(index, 1, { text: this.newtodo });
      localStorage.setItem(this.storageKey, JSON.stringify(this.todolist));
      this.newtodo = "";
    },
  },
  created: function () {
    var dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todolist = JSON.parse(dataStr);
    }
  },

  todolist: function () {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todolist));
  },
});
