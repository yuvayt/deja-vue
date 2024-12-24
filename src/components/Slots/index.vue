<script setup lang="ts">
import Input from '../common/Input.vue'
import {ref} from 'vue'

const items = ref<string[]>([])

const newItem = ref("")

const add = () => {
    if (!newItem.value) return

    items.value.push(newItem.value)
}

const result = ref<string[]>([]) 

const spin = () => {
    result.value = ["abc"]
}

</script>

<template>
    <div>
        <div>
            {{ items.toString() }}
        </div>
        <form @submit.prevent="add">
            <label for="add-item">Item</label>
            <Input id="add-item" type="text" v-model="newItem"/>
            <input type="submit" value="Submit">
        </form>
       
        <div>
            {{ result.toString() }}
        </div>
        <button @click="spin">
            Spin the fkn sht
        </button>
    </div>
</template>

<style scoped>

</style>
