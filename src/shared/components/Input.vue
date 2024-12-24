<script setup lang="ts">
import { useAttrs, computed } from "vue";
import { cn } from "../../shared/utils/cn";

const model = defineModel();

interface Attrs {
    class?: string
}

const attrs = useAttrs() as Attrs

const classes = computed(() => {
    return cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        attrs.class
    );
});
</script>

<template>
    <input :class="classes" v-model="model" />
</template>

<style scoped></style>
