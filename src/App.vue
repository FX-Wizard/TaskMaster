<template>
  <div id="app">
    <Header v-on:import-file="importFile" v-on:export-file="exportFile" />
    <List v-bind:lists="lists" v-on:change-list="filterList" v-on:show-add-modal="showAddModal" />
    <Tasks 
      v-bind:tasks="selected"
      v-bind:lists="lists"
      v-on:del-task="removeTask"
      v-on:del-list="removeList"
      v-on:add-to-list="addToList"
    />
    <AddTask v-on:add-task="addTask" />
  </div>
</template>

<script>
import Header from './components/layout/header.vue'
import Tasks from './components/Tasks.vue'
import List from './components/List.vue'
import AddTask from './components/AddTask.vue'
import uuid from 'uuid'
import Low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import {saveAs} from 'file-saver'

export default {
  name: 'app',
  components: {
    Header,
    Tasks,
    List,
    AddTask
  },
  data() {
    return {
      tasks: [],
      lists: [
        {
          name: 'Retro Rider',
          tasks: ['1a56021e-cad2-43e6-972c-d95bb10e3fa2']
        },
        {
          name: 'Sumo Trucks',
          tasks: ['5c8787e9-823d-4b73-93e9-fc717df6ea90',
          '308c1d7c-213a-4518-902a-153af5ed9ca7']
        }
      ],
      selected: []
    }
  },
  methods: {
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
      this.selected = this.tasks
      this.db.get('tasks')
      .remove({id: id})
      .write()
    },

    removeList(id) {
      this.lists = this.lists.filter(list => list.id !== id)
      this.db.get('lists')
      .remove({id: id})
      .write()
    },

    addToList(name, id) {
      this.lists.forEach(list => {
        if (list.name == name) {
          list.tasks.push(id)
        }
      })
    },

    filterList(name) {
      this.lists.forEach(list => {
        if (list.name == name) {
          console.log('tasks:', list)
            this.selected = list
            .map(task => task.id)
            .filter(task => list.tasks.indexOf(task) >= 0)
            .reduce((obj, task) => {
              obj[task] = lists
              return obj
            })
          console.log(this.selected)
        }
      })
    },

    showAddModal() {
      this.$modal.show('add-task-modal')
    },

    addTask(newTaskName) {
      if (!newTaskName) {
        return
      }
      let newTask = {
        id: uuid.v4(),
        name: newTaskName,
        complete: false
      }
      this.tasks = [...this.tasks, newTask]
      this.selected = this.tasks
      this.db.get('tasks')
      .push(newTask)
      .write()
    },

    importFile(event) {
      let loader = new FileReader()
      loader.onload = () => {
        this.tasks = JSON.parse(loader.result).tasks
      }
      loader.readAsText(event, "utf-8")
    },

    exportFile() {
      let blob = new Blob(
        [JSON.stringify(this.db.getState())],
        {type: "text/plain;charset=utf-8"}
      )
      saveAs(blob, 'TaskList.json')
    }
  },
  created() {
    // open database on application load
    const adapter = new LocalStorage('taskdb.json')
    const db = Low(adapter)

    db.defaults({tasks: this.tasks})
    .write()

    this.tasks = db.getState().tasks
    this.selected = this.tasks
    // this.lists = db.getState().lists
    this.db = db

    this.showAddDialog = false
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }
</style>
