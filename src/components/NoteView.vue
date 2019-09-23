<template>
    <div class="wrap-collabsible">
        <input id="collapsible" class="toggle" type="checkbox" />
        <label for="collapsible" class="label-toggle">Notes</label>
        <div class="collapsible-notes">
            <div class="content-inner">
                <p>notes go here</p>
            </div>
        </div>
    </div>
</template>

<script>
import NoteItem from './NoteItem.vue'

export default {
    name: 'NoteView',
    components: [
        NoteItem
    ],
    props: {

    },
}
</script>

<style scoped>
    input[type='checkbox'] {
    display: none;
    }

    .label-toggle {
        display: block;

        font-weight: bold;
        font-family: monospace;
        font-size: 1.2rem;
        text-transform: uppercase;
        text-align: center;

        padding: 1rem;

        color: #A77B0E;
        background: #FAE042;

        cursor: pointer;

        border-radius: 7px;
        transition: all 0.25s ease-out;
    }

    .label-toggle:hover {
        color: #7C5A0B;
    }

    .label-toggle::before {
        content: ' ';
        display: inline-block;

        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid currentColor;

        vertical-align: middle;
        margin-right: .7rem;
        transform: translateY(-2px);

        transition: transform .2s ease-out;
    }

    .collapsible-notes .content-inner {
        background: rgba(250, 224, 66, .2);
        border-bottom: 1px solid rgba(250, 224, 66, .45);

        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        padding: .5rem 1rem;
    }

    .collapsible-notes {
        max-height: 0px;
        overflow: hidden;

        transition: max-height .25s ease-in-out;
    }

    .toggle:checked + .label-toggle + .collapsible-notes {
        max-height: 350px;
    }

    .toggle:checked + .label-toggle::before {
        transform: rotate(90deg) translateX(-3px);
    }

    .toggle:checked + .label-toggle {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
</style>