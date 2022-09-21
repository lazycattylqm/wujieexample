

<template>
  <div>
    <h1>root</h1>
    <div @click=toAns>go to ancestor</div>
    <div @click=toShow>go to show</div>
    <div @click=toHello>go to hello world</div>
    <div @click=toRoot>go to root</div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toAns = () => router.push("/ancestor");
const toShow = () => router.push("/show");
const toHello = () => router.push("/helloworld");
const toRoot = () => router.push("/");
</script>
