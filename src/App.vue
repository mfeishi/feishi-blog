<template>
	<div id="wrap">
		<div class="mainContent" v-if="isShowNav">
			<nav-header/>
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
			
			// window.addEventListener('resize',()=>{
			// 	console.error('resize')
			// 	window.location.reload()
			// },false)
		},
		created () {
			// console.error('create')
		},
		
	})
	export default class App extends Vue {
		private isShowNav:boolean = true;
		
		beforeRouteEnter(to: any, from: any, next: () => void): void { //路由钩子
		     console.error('beforeRouteEnter111');
			next();
		}


	}
</script>

<style lang="less">
	#wrap{
		height: 100%;
		.mainContent{
			padding-top: 50px;
			.wrapContent{
				padding: 20px 10px 0 10px;
				
			}
		}
		
		.noNav_content{
			height: 100%;
		}
	}
	
</style>
