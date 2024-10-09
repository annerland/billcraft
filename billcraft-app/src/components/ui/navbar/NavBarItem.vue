<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "vue-router";

const props = defineProps<{
  icon: IconDefinition;
  name: string;
  to: string;
}>();
</script>

<template>
  <RouterLink :to="props.to" v-slot="{ isActive }">
    <div
      :class="[
        'flex gap-3 text-gray-500 items-center cursor-pointer hover:opacity-75 text-[15px]',
        { 'font-medium text-primary': isActive },
      ]">
      <FontAwesomeIcon :icon="props.icon" :class="[{ 'text-primary': isActive }, 'text-gray-500']" />
      {{ props.name }}
    </div>
  </RouterLink>
</template>
