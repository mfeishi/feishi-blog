<template>
	<div class="user">
		<div class="logoContent" @click="goIndex">
			<a>
				logo
				<!-- <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""> -->
			</a>
		</div>

		<div class="mainContent">
			<div class="mainWrap">

				<div class="title">
					<div class="normal-title">
						<a :class="activeIdx === 0 ?'active':''" @click="goLogin">登录</a>
						<b>.</b>
						<a :class="activeIdx === 1 ?'active':''" @click="goRegister">注册</a>
					</div>
				</div>

				<div class="userContainer">
					<router-view />
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
		Route
	} from "vue-router";
	@Component
	export default class UserIndex extends Vue {
		private activeIdx: number = 0;
		mounted() {
			let {
				name
			} = this.$route
			this.changeActiveIdx(name)
		}

		@Watch("$route") //watch路由
		watchRoute(newval: Route, oldVal: Route): void {
			let {
				name
			} = newval;
			this.changeActiveIdx(name)
		}
		private changeActiveIdx(name:any): void {
			if (name === 'register') {
				this.activeIdx = 1
			} else {
				this.activeIdx = 0
			}
		}
		private goIndex(): void {
			this.$router.push({
				path: '/'
			})
		}
		private goRegister(): void {
			this.$router.push({
				path: '/user/register'
			})
		}
		private goLogin(): void {
			this.$router.push({
				path: '/user/login'
			})
		}
	}
</script>


<style lang="less">
	@media (max-width: 768px) {//手机端
		.user {
			min-height: 0;
			background-color: transparent;
			height: auto;
			.logoContent {
				display: none;
			}
			.mainContent {
				background-color: white;
				.mainWrap {
					position: absolute;
					left: 50%;
					margin: 0 0 0 -2rem !important;
					box-shadow: none !important;
				}
			}
		}
	}
</style>
<style lang="less" scoped>
	.user {
		height: 100%;
		text-align: center;
		background-color: #f1f1f1;
		position: relative;
		.logoContent {
			position: absolute;
			top: .56rem;
			margin-left: .5rem;
			a {
				cursor: pointer;
				img {
					width: 1rem;
					vertical-align: middle;
				}
			}
		}
		.mainContent {
			height: 100%;
			&:before {
				content: "";
				display: inline-block;
				height: 85%;
				vertical-align: middle;
			}
			.mainWrap {
				width: 4rem;
				margin: 0 auto 0;
				padding: .5rem .5rem .3rem;
				background-color: white;
				border-radius: .04rem;
				box-shadow: 0 0 .08rem rgba(0, 0, 0, .1);
				vertical-align: middle;
				display: inline-block;
				.title {
					margin: 0 auto 50px;
					padding: 10px;
					font-weight: 400;
					color: #969696;
					font-size: .18rem;
					.normal-title {
						.active {
							font-weight: 700;
							color: #409eff;
							border-bottom: 2px solid #409eff;
						}
						a {
							padding: 10px;
							cursor: pointer;
						}
						b {
							padding: 10px;
						}
					}
				}
			}
		}
	}
</style>
