<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const onInput = ($event) => {
  emits('update:modelValue', $event.target.value)
}
</script>

<template>
  <input
    v-model="modelValue"
    @input="onInput"
    :class="
      cn(
        'flex h-11 w-full rounded-md border border-gray-300 bg-transparent p-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    " />
</template>
