<template>
	<div class="login">
		login
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Prop,
		Vue
	} from 'vue-property-decorator';
	@Component
	export default class Login extends Vue {
		
		mounted(){		
			function array_func<T>(arg:T):T {
			    console.error(arg);
			    return arg;
			}		
			// let array_func2:<T>(arg: Array<T>)=>Array<T> = function(arg){
			// 	console.error(arg,arg.length);
			// 	return arg;
			// }
			
			array_func('wrrr')
			
			
		}
		
		
	}
</script>

<style lang="less" scoped>
		.login{
			
			
			
			
		}
	
</style>
