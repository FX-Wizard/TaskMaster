<template>
    <header class="header">
        <h1>Task Master</h1>
        <label class="label" title="Import Tasks">
            <input type="file" ref="fileload" @change="loadFileEvent">
            <font-awesome-icon icon="file-import" size="2x"/>
        </label>
        <label class="label" title="Export Tasks" @click="$emit('export-file')">
            <font-awesome-icon icon="file-export" size="2x"/>
        </label>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        loadFileEvent(event) {
            this.$emit('import-file', event.target.files[0])
        }
    }
}
</script>

<style scoped>
    .header {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }

    .header a {
        color: #fff;
        padding-right: 5px;
    }

    .label {
        cursor: pointer;
        padding: 10px;
    }

    input[type="file"] {
        display: none;
    }
</style>