<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>

        <div class="px-4 py-2">
            <slot name="hello">
                No slot content defined.
            </slot>

            <slot name="bye">
                No slot content defined.
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Hello World'
        }
    }
}
</script>

<style scoped>

</style>
