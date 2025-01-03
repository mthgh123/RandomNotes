<template>
  <div class="jun_layout">
    <Header></Header>

    <div class="jun_main">
      <LeftMenu></LeftMenu>

      <!-- 通过动态组件渲染的content区域 -->
      <div class="jun_content">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in" appear>
            <component :is="Component" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Header from "./Header.vue";
import LeftMenu from "./LeftMenu.vue";
</script>

<style scoped lang="scss">
.jun_layout {
  width: 100%;
  height: 95vh;

  .jun_main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

  }
}
</style>
