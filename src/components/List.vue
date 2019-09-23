<template>
    <div class="form">
        <v-select class="selector" :options="lists" label="name" @input="onChange"/>
        
        <button class="add-task-btn" @click="addTask">
            <font-awesome-icon icon="plus-circle" size="3x"/>
        </button>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
    name:'List',
    data() {
        return {
            name: ''
        }
    },
    components: {
        vSelect
    },
    props: ['lists'],
    methods: {
        addTask(event) {
            event.preventDefault()
            this.$emit('show-add-modal', this.name)
            this.name = ''
        },
        onChange(event) {
            this.$emit('change-list', event.name)
        }
    }
}
</script>

<style scoped>
    .form {
        display: flex;
    }

    .selector {
        flex-grow: 1;
        padding-top: 3px;
    }

    .add-task-btn{
        border: none;
        background: none;
        float: right;
        cursor: pointer;
        transition: 0.2s;
    }

    .add-task-btn:hover {
        color: #4fffad
    }
</style>
