<template>
	<panel title="Tab">
		<textarea
            readonly
            v-model="song.tab"
        ></textarea>
	</panel>
</template>

<script>
export default {
    props: [
    	'song'
    ]
};
</script>

<style scoped>
textarea {
    font-family: monospace;
    font-size: 12px;
    width: 100%;
    height: 600px;
    border: none;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
}
</style>
