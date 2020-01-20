<template>
	<div id="wrap">
		<nav-header/>
		<router-view name="body"></router-view>
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

<style>
</style>
