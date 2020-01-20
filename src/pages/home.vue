<template>
	<div class="home">
		{{msg}}
		<mu-button color="primary">Primary</mu-button>
	
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Prop,
		Vue
	} from 'vue-property-decorator';

	@Component
	export default class HelloWorld extends Vue {
		private msg: string = 'www';




	}
</script>


<style lang="less">
</style>
