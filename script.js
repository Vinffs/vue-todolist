const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        {
          id: 1,
          text: "Do the dishes",
          done: false,
        },
        {
          id: 2,
          text: "Do laundry",
          done: true,
        },
        {
          id: 3,
          text: "Take the trash out",
          done: false,
        },
        {
          id: 4,
          text: "Vacuum the living room",
          done: true,
        },
      ],
      taskText: "",
    };
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    newTask() {
      const newId = Math.max(...this.tasks.map((task) => task.id)) + 1;
      this.tasks.push({
        id: newId,
        text: this.taskText,
        done: false,
      });
      this.taskText = "";
      console.log(this.tasks);
    },
    isCrossed(obj) {
      obj.done = !obj.done;
    },
    finishedTasks() {
      if (this.tasks.length === 0) {
        return "img/source2.png";
      } else {
        return "img/source1.png";
      }
    },
  },
}).mount("#app");
