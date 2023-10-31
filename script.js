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
      index: 0,
    };
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");
