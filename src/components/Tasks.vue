<template>
<div class="main">
    <draggable v-model="tasks" ghost-class="ghost" @end="updateOrder">
        <transition-group type="transition" name="flip-list">
            <div class="sortable" :id="task.id" v-for="task in tasks" :key="task.id">
                <TaskItem v-bind:task="task"
                    v-on:del-task="$emit('del-task', task.id)"
                />
            </div>
        </transition-group>
    </draggable>
</div>
</template>

<script>
import draggable from 'vuedraggable'
import TaskItem from './TaskItem.vue'

export default {
    name: 'Tasks',
    components: {
        draggable,
        TaskItem
    },
    props: ['tasks'],
    data() {
        return {
            oldIndex: '',
            newIndex: ''
        }
    },
    methods: {
        updateOrder() {
            let tasks = this.tasks.map((task, index) => {
                console.log(task.name, index)
                return {task: task, order: index}
            })
        }
    }
}
</script>

<style scoped>
    .sortable {
        margin-bottom: 2px;
    }

    .main .sortable-drag {
        opacity: 0;
    }

    .flip-list-move {
        transition: transform 0.3s;
    }

    .ghost {
        border-left: 6px solid rgb(0, 255, 221);
        box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.15);
        opacity: 0.7;
    }
</style>
