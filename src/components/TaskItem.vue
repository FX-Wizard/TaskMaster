<template>
    <div class="task-item">
        <label class="task-label" v-bind:class="{'is-complete':task.complete}">
            <input type="checkbox" class="checkbox" v-on:change="makeComplete" />
            <span class="task-check"></span>
            <span class="task-text">{{task.name}}</span>

        </label>
        <button class="note-btn">
            <font-awesome-icon icon="sticky-note" size="2x"/>
        </button>
        <button @click="$emit('del-task', task.id)" class="del">
            <font-awesome-icon icon="times-circle" size="2x"/>
        </button>
        <NoteView v-if="task.notes" />
    </div>
</template>

<script>
import NoteView from './NoteView.vue'

export default {
    name: 'TaskItem',
    props: ['task'],
    components: {
        NoteView
    },
    methods: {
        makeComplete() {
            this.task.complete = !this.task.complete
        },
        addNote() {
            
        }
    }
}
</script>

<style scoped>
    .task-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1pc;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .task-check {
        display: flex;
        align-self: center;
        position: relative;
        height: 20px;
        width: 20px;
        margin: 0 20px;
        border: 2px solid #5c5c5c;
        border-radius: 2px;
        cursor: pointer;
    }

    .task-check:hover {
        border: 2px solid #17ca71;
    }

    .task-text {
        display: flex;
        align-self: center;
        position: relative;
        cursor: pointer;
        padding: 20px;
        border-left: 1px solid #ecf0f1;
    }
    
    .task-text:after {
        content: '';
        display: block;
        width: 0%;
        height: 2px;
        background-color: #000;
        position: absolute;
        top: 50%;
        left: 7.5%;
        transform: translateY(-50%);
        transition: width 100ms ease-in-out;
    }

    .is-complete {
        text-decoration: line-through;
    }

    .del {
        display: flex;
        background: none;
        color: #5c5c5c;
        border: none;
        align-self: center;
        padding: 20px;
        cursor: pointer;
        /* float: right; */
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
    }

    .del:hover {
        color: #ff0000;
    }

    .note-btn {
        display: flex;
        margin-left: auto;
        color: #5c5c5c;
        border: none;
        cursor: pointer;
        align-self: center;
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
    }

    .note-btn:hover {
        color: #17ca71;
    }
    
    .task-label {
        font-size: 20px;
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .checkbox {
        position: absolute;
        top: -9999px;
        left: -9999px;
        appearance: none;
    }

    .checkbox:checked + .task-label {
        background-color: rgb(117, 117, 117);
    }

    .checkbox:checked + .task-item {
        background-color: rgb(211, 211, 211);
    }

    .checkbox:checked + .task-check {
        background-color: #17ca71;
    }

    .checkbox:checked + .task-check:after {
        content: '';
        display: block;
        position: absolute;
        top: 1px;
        left: 6px;
        width: 6px;
        height: 12px;
        border: solid #000;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
    }

    .checkbox:checked + .task-text:after {
        width: 85%;
    }

</style>