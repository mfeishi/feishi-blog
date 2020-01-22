<template>
	<div id="wrap">
		<div class="mainContent">
			<nav-header v-if="isShowNav"/>
			<div class="main_center_content wrapContent">
				<router-view name="body"></router-view>
			</div>
		</div>
		<div class="noNav_content">
			<router-view name="noNav"></router-view>
		</div>
	</div>
</template>

<script lang="ts">
	import navHeader from './components/header/navHeader.vue';
	import {
		Component,
		Prop,
		Vue,
		Watch
	} from 'vue-property-decorator';
	import {
		Route
	} from "vue-router";
	
	@Component({
		components:{
			navHeader
		},
		props: [],
		computed: {},
		watch: {
			"$route"(newval: Route, oldVal: Route): void{
				let {meta} = newval
				if(meta === true){
					this.isShowNav = false
				}else{
					this.isShowNav = true
				}
			}
		},
		mounted () {
			console.error('app')
		},
		created () {}
	})
	export default class App extends Vue {
		private isShowNav:boolean = true;
		


	}
</script>

<style lang="less">
	.wrapContent{
		padding: 20px 10px 0 10px;
	}
</style>
