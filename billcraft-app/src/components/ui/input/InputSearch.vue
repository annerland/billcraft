<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const emit = defineEmits(['search'])

const search = (e) => {
  emit('search', e.target.value);
}

</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="search"
      type="text"
      @input="search"
      placeholder="Search customer"
      class="pl-10" />
    <span
      class="absolute start-0 inset-y-0 flex items-center justify-center pl-3">
      <FontAwesomeIcon :icon="faSearch" class="text-gray-500" />
    </span>
  </div>
</template>
