<template>
	<div class="articles">

		
		<p class="a">articles</p>
		<p class="b">articles</p>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Prop,
		Vue
	} from 'vue-property-decorator';

	@Component
	export default class Articles extends Vue {
		private msg: string = 'www';


		mounted(){
			
		}

	}
</script>


<style lang="less">
	.articles{
		.a{
			font-size: 24px;
		}
		.b{
			font-size: .24rem;
		}
	}
</style>
