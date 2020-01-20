<template>
	<div class="navHeader">
		<div class="nav_content">
			<div style="width: 100%;height: 100%;background: white;">
				<div class="main_center_content clear">
					<div class="iconLeft left">111</div>
					<div class="tabsContent left">
						<mu-tabs style="background: white;" :value.sync="activeTab" inverse color="secondary" textColor="yellow" left>
							<mu-tab v-for="(item,index) in navList" :key="index">{{item.label}}</mu-tab>
						</mu-tabs>
					</div>
					<div class="rightContent right">
						222
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
	import {navList} from './config';

	@Component
	export default class navHeader extends Vue {
		private msg: string = 'www';
		private activeTab:number =0;
		private navList:any[] = navList;
		
		
		


	}
</script>

<style lang="less" scoped>
	.navHeader {}
</style>
