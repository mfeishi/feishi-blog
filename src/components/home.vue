<template>
	<div class="home">
		{{msg}}
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg: string = 'www';
  
  
  
  
}
</script>


<style lang="less">
</style>
