/*global Vue*/
Vue.createApp({
  data() {
    return {
      storageKey: "todoList",
      newTodo: "",
      todoList: [],
      editText: "",
    };
  },
  methods: {
    add() {
      if (this.newTodo.trim() === "") {
        return;
      }
      for (let i = 0; i < this.todoList.length; i++) {
        this.todoList[i].edit = false;
      }
      this.todoList.push({ text: this.newTodo });
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      this.newTodo = "";
    },
    remove(index) {
      this.todoList.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
    },
    update(index) {
      const todo = this.todoList[index];
      if (this.editText !== "") {
        todo.text = this.editText;
        this.editText = "";
        localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      }
    },
    setEditTodoValue(todo, index) {
      this.editText = todo.text;
      for (let i = 0; i < this.todoList.length; i++) {
        this.todoList[i].edit = false;
      }
      this.todoList[index].edit = true;
    },
  },
  created() {
    const dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todoList = JSON.parse(dataStr);
      for (let i = 0; i < this.todoList.length; i++) {
        this.todoList[i].edit = false;
      }
    }
  },
}).mount("#app");
