/*global Vue*/
Vue.createApp({
  data() {
    return {
      storageKey: "todoList",
      newTodo: "",
      todoList: [],
    };
  },
  methods: {
    add() {
      if (this.newTodo.trim() === "") {
        return;
      }
      for (let i = 0; i < this.todoList.length; i++) {
        this.todoList[i].done = false;
      }
      this.todoList.push({ text: this.newTodo, editText: "" });
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      this.newTodo = "";
    },
    remove(index) {
      this.todoList.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
    },
    update(index) {
      const todo = this.todoList[index];
      if (todo.editText !== "") {
        todo.text = todo.editText;
        todo.editText = "";
        localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      }
    },
    setEditTodoValue(todo, index) {
      this.todoList[index].editText = todo.text;
      for (let i = 0; i < this.todoList.length; i++) {
        this.todoList[i].done = false;
      }
      this.todoList[index].done = true;
    },
  },
  created() {
    const dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todoList = JSON.parse(dataStr);
      for (let i = 0; i < this.todoList.length; i++) {
        this.todoList[i].done = false;
      }
    }
  },
}).mount("#app");
