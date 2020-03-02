<template>
	<div class="navHeader">
		<div class="nav_content">
			<div class="nav_content_wrap">
				<div class="main_center_content clear">
					<div class="iconLeft left">111</div>
					<div class="tabsContent left">
						<mu-tabs class="muTabs" :value.sync="activeTabNum" inverse color="primary" indicator-color="primary" left>
							<mu-tab @click=changeRoute(item) v-for="(item,idx) in navList" :key="item.index">{{item.label}}</mu-tab>
						</mu-tabs>
					</div>
					<div class="rightContent right">
						<mu-button flat :ripple="false" color="primary" @click=goLogin>登陆</mu-button>
						<mu-button color="primary" @click=goRegister>注册</mu-button>
					</div>
					<div class="mobileRightContent right">
						<span class="iconfont icon-menu" @click="open = !open"></span>
					</div>
				</div>
			</div>
		</div>
		<mu-drawer :open.sync="open" :docked="docked" :right="true">
		    <mu-list>
		      <mu-list-item button>
		        <mu-list-item-title>Menu Item 1</mu-list-item-title>
		      </mu-list-item>
		      <mu-list-item button>
		        <mu-list-item-title>Menu Item 2</mu-list-item-title>
		      </mu-list-item>
		    </mu-list>
		 </mu-drawer>
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
	import {
		NavListItem
	} from './config/interface';
	import {
		Route
	} from "vue-router";



	@Component
	export default class navHeader extends Vue {
		private activeTabNum: number = 0;
		private navList: NavListItem[] = navList;
		private docked: boolean = false;
		private open: boolean = false;
		mounted() {

		}
		//watch路由
		@Watch("$route")
		initActiveTab(newval: Route, oldVal: Route): void { //初始化activeNum
			let {
				name
			} = newval;
			let activeTabNum = navList.find((item) => item.value === name) !.index
			this.activeTabNum = activeTabNum
		}

		private changeRoute(item: NavListItem): (boolean | void) { //改变路由
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
		
		private goLogin():void{ //跳转登陆页
			this.$router.push({
				path: `/user/login`
			})	
		}
		
		private goRegister():void{ //跳转注册页
			this.$router.push({
				path: `/user/register`
			})	
		}
			
	}
</script>

<style lang="less">
	@media screen and (max-width:768px) {
		//移动端nav适配
		.rightContent {
			display: none !important;
		}
		.mobileRightContent {
			display: flex;
			align-items: center;
			height: 48px;
			margin-right: 15px;
		}
	}
	@media screen and (min-width:769px) {
		//移动端nav适配
		.rightContent {
			display: block;
		}

		.mobileRightContent {
			display: none;
		}
	}
	@import "../../../assets/font/menu/iconfont.css";
	.navHeader {
		@white: #FFFFFF;
		border-bottom: 1px solid #f0f0f0;
		.nav_content_wrap {
			width: 100%;
			height: 100%;
			background: @white;
			.muTabs {
				background-color: @white;
			}
			.iconLeft {}
			.rightContent {
				display: flex;
				height: 48px;
				align-items: center;
				button:nth-child(2) {
					margin-left: 5px;
				}
			}
			.iconfont{
				font-size: .24rem;
			}
		}

	}
</style>
