<template>
    <modal :width="600" :height="100" @close="onClose" name="add-task-modal">
        <div class="card-input">
            <label class="label" for="input" ref="inputField">
                <input type="text" id="input" v-model="name" name="name" v-on:keyup.enter="addTask" />
                <span class="placeholder">Task Name</span>
                <span class="border"></span>
            </label>
            <button class="add-btn" @click="addTask">
                <font-awesome-icon icon="arrow-right" size="2x"/>
            </button>
        </div>
    </modal>
</template>

<script>
export default {
    name:'AddTask',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addTask(event) {
            event.preventDefault()
            this.$emit('add-task', this.name)
            this.name = ''
            this.$modal.hide('add-task-modal')
        },
        onClose() {
            this.name = ''
        }
    },
    mounted() {
        // this.$refs.inputField.focus()
    }
}
</script>

<style scoped>
    .card-input {
        display: flex;
        padding: 10px;
        height: 100%;
        width: 100%;
    }
    * {
        box-sizing: border-box;
    }
    .label {
        position: relative;
        margin: auto;
        width: 100%;

    }
    .label .placeholder {
        position: absolute;
        top: 16px;
        left: 0;
        font-size: 16px;
        color: #9098a9;
        font-weight: 500;
        transform-origin: 0 0;
        transition: all 0.2s ease;
    }
    .label .border {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: #07f;
        transform: scaleX(0);
        transform-origin: 0 0;
        transition: all 0.15s ease;
    }
    .label input {
        /* -webkit-appearance: none; */
        width: 100%;
        border: 0;
        font-family: inherit;
        padding: 12px 0;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 2px solid #c8ccd4;
        background: none;
        border-radius: 0;
        color: #223254;
        transition: all 0.15s ease;
    }
    .label input:hover {
        background: rgba(34,50,84,0.03);
    }
    .label input:not(:placeholder-shown) + span {
        color: #5a667f;
        transform: translateY(-26px) scale(0.75);
    }
    .label input:focus {
        background: none;
        outline: none;
    }
    .label input:focus + span {
        color: #07f;
        transform: translateY(-26px) scale(0.75);
    }
    .label input:focus + span + .border {
        transform: scaleX(1);
    }
    .add-btn {
        border: none;
        background: none;
        transition: 0.2s
    }
    .add-btn:hover {
        color: aquamarine;
    }
</style>
