<template>
	<div id="wrap">
		<nav-header/>
		<div class="main_center_content wrapContent">
			<router-view name="body"></router-view>
			
		</div>
	</div>
</template>

<script>
	import navHeader from './components/header/navHeader.vue';
	export default {
		data(){
			return{

			}
		},
		components:{
			navHeader
		},
		mounted(){


		},
		methods:{


		}


	}
</script>

<style lang="less" scoped>
	.wrapContent{
		padding-top: 20px;
		
	}
</style>
