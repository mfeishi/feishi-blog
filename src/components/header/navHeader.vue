<template>
	<div class="navHeader">
			{{msg}}
			
	</div>
	
</template>

<script lang="ts">
	import {
		Component,
		Prop,
		Vue
	} from 'vue-property-decorator';
	
	
	@Component
	export default class navHeader extends Vue {
		private msg: string = 'www';
		
	
	
	
	}
</script>

<style lang="less" scoped>
	.navHeader{
		
		
		
	}
	
</style>
