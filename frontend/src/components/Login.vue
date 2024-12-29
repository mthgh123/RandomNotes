<template>
	<div class="container">
		<div class="login_layout">
			<el-form
				style="max-width: 600px"
				:model="state"
				status-icon
				label-width="auto"
				class="demo-ruleForm"
			>
				<el-form-item label="邮件" prop="email">
					<el-input
						v-model="state.email"
					/>
				</el-form-item>
				<el-form-item label="Password" prop="password">
					<el-input v-model="state.password" type="password" autocomplete="off" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm">登录</el-button>
					<el-button @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang='ts'>
	import { reactive } from 'vue';
	import { useRouter } from 'vue-router'

	const router = useRouter();

	interface Account {
		email: string,
		password: string,
	}

	const state = reactive<Account>({
		email: '',
		password: '',
	})

	const submitForm = () => {
		console.log('开始登录');

		// 登录成功
		if (true) {
			console.log('登录成功');
			router.push({ path: '/' });
		}
	}

	const resetForm = () => {
		//重置
		state.email = '';
		state.password = '';
	}


</script>

<style scoped lang='scss'>
	.container {
		width: 800px;
		height: 600px;
		display: flex;
		background-color: antiquewhite;

		border-radius: 30px;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		box-shadow: 10px 10px 5px 0px #bddadc;

		.login_layout {
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
 	}
</style>