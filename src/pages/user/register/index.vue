<template>
	<div class="register">
		<mu-container>
		  <mu-form  label-position="left" label-width="65" ref="registerForm" :model="registerForm" class="mu-demo-form">
		    <mu-form-item label="用户名:" placeholder="请输入用户名" help-text="" prop="username" :rules="usernameRules">
		      <mu-text-field v-model="registerForm.username" prop="username"></mu-text-field>
		    </mu-form-item>
		    <mu-form-item label="密码:"  placeholder="请输入密码" help-text="" prop="password" :rules="passwordRules">
		        <mu-text-field type="password" v-model="registerForm.password" prop="password"></mu-text-field>
		    </mu-form-item>
<!-- 		 <mu-form-item prop="isAgree" :rules="argeeRules">
		      <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
		    </mu-form-item> -->
		    <mu-form-item>
		      <mu-button color="primary" @click="submitForm">提交</mu-button>
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
	import {registerForm} from './config/interface';
	@Component
	export default class Register extends Vue {
		mounted(){
			
		}
		private registerForm:registerForm = {
			username:"",
			password:"",
		}
		private usernameRules:object[] = [
		        { validate: (val:string) => !!val, message: '必须填写用户名'},
		        { validate: (val:string) => val.length >= 3, message: '用户名长度大于3'}
		      ]		
		private passwordRules:object[] = [
		        { validate: (val:string) => !!val, message: '必须填写密码'},
		        { validate: (val:string) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
		      ]
		
		private submitForm():void{
			(this.$refs.registerForm as HTMLFormElement).validate().then((result:boolean) => {					
			        console.error('form valid: ', result)
						
			});	
		}
		private resetForm():void{
				// const ref: any = this.$refs.registerForm
				// ref.clear()
				// <WhateverForm>this.$refs.registerForm.clear()			    
				// (this.$refs.registerForm as Vue & { validate: () => boolean }).clear()
				(this.$refs.registerForm as HTMLFormElement).clear();
			    this.registerForm = {
			        username: '',
			        password: '',
			    };	
			
		}
		
		
	}
	
	
	
	
</script>

<style lang="less" scoped>
	.register{
		
		
		
		
	}	
</style>
