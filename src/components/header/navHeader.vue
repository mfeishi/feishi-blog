<template>
	<div class="navHeader">
		<div class="nav_content">
			<div class="nav_content_wrap">
				<div class="main_center_content clear">
					<div class="iconLeft left">111</div>
					<div class="tabsContent left">
						<mu-tabs class="muTabs" :value.sync="activeTab" inverse color="#409eff" indicator-color="#409eff" left>
							<mu-tab @click=changeRoute(item) v-for="(item,index) in navList" :key="index">{{item.label}}</mu-tab>
						</mu-tabs>
					</div>
					<div class="rightContent right">
						<mu-button flat :ripple="false" color="primary">登陆</mu-button>
						<mu-button color="secondary">注册</mu-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Prop,
		Vue
	} from 'vue-property-decorator';
	import {
		navList
	} from './config';
	@Component
	export default class navHeader extends Vue {
		private msg: string = 'www';
		private activeTab: number = 0;
		private navList: any[] = navList;
		
		mounted(){
			const route = this.$route
			console.error(this.$route)
		}
		private changeRoute(item:any){ //改变路由
		console.error(this.$route)
			let {value} = item
			let {name} = this.$route
			if(value == name){
				return false;
			}
			this.$router.push({
				path:`/${value}`
			})
		}




	}
</script>

<style lang="less" scoped>
	@blue: #409eff;
	@white:#FFFFFF;
	.navHeader {
		border-bottom: 1px solid #f0f0f0;
		.nav_content_wrap {
			width: 100%;
			height: 100%;
			background: @white;
			.main_center_content{
				
				.muTabs {
					background: @white;
				}
				.rightContent{
					display: flex;
					height: 48px;
					align-items: center;
					button:nth-child(2){
						margin-left: 5px;
					}
				}
			}
			
		}

	}
</style>
