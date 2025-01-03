<template>
  <div class="left_container">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="false"
      @open="handleOpen"
      @close="handleClose"
			:router="true"
    >
      <el-menu-item index="toDoItem">
        <el-icon><icon-menu /></el-icon>
        <template #title>任务</template>
      </el-menu-item>
      <!-- <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import router from "./router";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.left_container {
  height: 100%;
  display: flex;
  flex-direction: column;

	.el-menu-vertical:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
}

</style>
