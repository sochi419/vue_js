/*global Vue*/
Vue.createApp({
  data() {
    return {
      storageKey: "todoList",
      newTodo: "",
      todoList: [],
      editTodoValue: "",
      selectTodo: "",
    };
  },
  methods: {
    add() {
      if (this.newTodo.trim() === "") {
        return;
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
      if (this.editTodoValue !== "") {
        todo.text = this.editTodoValue;
        localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
      }
    },
  },
  created() {
    const dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todoList = JSON.parse(dataStr);
    }
  },
}).mount("#app");
