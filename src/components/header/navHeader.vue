<template>
	<div class="navHeader">
		<div class="nav_content">
			<div class="nav_content_wrap">
				<div class="main_center_content clear">
					<div class="iconLeft left">111</div>
					<div class="tabsContent left">
						<mu-tabs class="muTabs" :value.sync="activeTabNum" inverse color="#409eff" indicator-color="#409eff" left>
							<mu-tab @click=changeRoute(item) v-for="(item,idx) in navList" :key="item.index">{{item.label}}</mu-tab>
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
		Vue,
		Watch
	} from 'vue-property-decorator';
	import {
		navList
	} from './config';
	import {NavListItem} from './config/interface';
	
		
	@Component
	export default class navHeader extends Vue {
		private activeTabNum: number = 0;
		private navList: NavListItem[] = navList;
		mounted() {
		
			
		}	
		//watch路由
		@Watch("$route")
		initActiveTab(newval: any, oldVal: any):void{ //初始化activeNum
			let {name} = newval;
			let activeTabNum = navList.find((item)=>item.value === name)!.index
			this.activeTabNum = activeTabNum
		}
		private changeRoute(item: any):(boolean | void) { //改变路由
			let {
				value
			} = item
			let {
				name
			} = this.$route
			if (value === name) {
				return false;
			}
			this.$router.push({
				path: `/${value}`
			})
		}

	}
</script>

<style lang="less" scoped>
	@blue: #409eff;
	@white: #FFFFFF;
	.navHeader {
		border-bottom: 1px solid #f0f0f0;
		.nav_content_wrap {
			width: 100%;
			height: 100%;
			background: @white;
			.main_center_content {
				.muTabs {
					background: @white;
				}
				.rightContent {
					display: flex;
					height: 48px;
					align-items: center;
					button:nth-child(2) {
						margin-left: 5px;
					}
				}
			}

		}

	}
</style>
