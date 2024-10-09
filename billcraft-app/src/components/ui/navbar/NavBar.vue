<script setup lang="ts">
import navLogo from "@/assets/nav-logo.svg";
import NavBarItem from "./NavBarItem.vue";
import { navBarItems } from "@/constants/navBarItems";
</script>

<template>
  <nav
    class="bg-accent-light text-foreground p-8 h-[100%] w-[250px] border border-accent hidden md:block">
    <img :src="navLogo" alt="logo" />
    <div class="bg-accent h-[1px] w-[190px] my-6 -m-4" />
    <div class="my-10 flex flex-col gap-8">
      <NavBarItem
        v-for="item in navBarItems"
        :name="item.name"
        :icon="item.icon"
        :to="item.to" />
    </div>
  </nav>
</template>
