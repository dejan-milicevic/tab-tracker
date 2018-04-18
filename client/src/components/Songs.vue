<template>
    <v-flex column>
        <v-flex xs6 offset-xs3>
            <panel>
                <div slot="hello">
                    <h3>Yo Yo Yo</h3>
                </div>

                <div slot="bye">
                    <h3>BYE</h3>
                </div>
            </panel>
        </v-flex> 
    </v-flex>
</template>

<script>
import Panel from '@/components/Panel';
export default {
    components: {
        Panel
    }
}
</script>

<style scoped>

</style>
