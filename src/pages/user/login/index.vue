<template>
	<div class="login">
		<mu-container>
			<mu-form label-position="left" label-width="65" ref="loginForm" :model="loginForm" class="mu-demo-form">
				<mu-form-item label="用户名:" placeholder="请输入用户名" help-text="" prop="username" :rules="usernameRules">
					<mu-text-field v-model="loginForm.username" prop="username"></mu-text-field>
				</mu-form-item>
				<mu-form-item label="密码:" placeholder="请输入密码" help-text="" prop="password" :rules="passwordRules">
					<mu-text-field type="password" v-model="loginForm.password" prop="password"></mu-text-field>
				</mu-form-item>
				<mu-form-item>
					<mu-button color="primary" @click="submitForm">登录</mu-button>
					<mu-button @click="resetForm">重置</mu-button>
				</mu-form-item>
			</mu-form>
		</mu-container>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Prop,
		Vue
	} from 'vue-property-decorator';
	import {loginForm,validateFace} from './config/interface';
	@Component
	export default class Login extends Vue {
		mounted(){
			
		}
		private loginForm:loginForm = {
			username:"",
			password:"",
		}
		private usernameRules:validateFace[] = [
		        { validate: (val:string) => !!val, message: '必须填写用户名'},
		        { validate: (val:string) => val.length >= 3, message: '用户名长度大于3'}
		      ]		
		private passwordRules:validateFace[] = [
		        { validate: (val:string) => !!val, message: '必须填写密码'},
		        { validate: (val:string) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
		      ]
		
		private submitForm():void{
			(this.$refs.loginForm as HTMLFormElement).validate().then((result:boolean) => {					
			        console.error('form valid: ', result)
					
			});	
		}
		private resetForm():void{
				(this.$refs.loginForm as HTMLFormElement).clear();
			    this.loginForm = {
			        username: '',
			        password: '',
			    };
			
		}

	}
</script>

<style lang="less" scoped>
	.login {}
</style>
