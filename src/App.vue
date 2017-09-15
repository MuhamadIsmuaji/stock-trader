<template>
	<div class="container">
		<app-header></app-header>
		<div class="row" style="padding-top: 15px;">
			<div class="col-md-12">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Header from './components/Header.vue'

	export default {
		components: {
			appHeader: Header,
		},
		created() {
			this.$store.dispatch('initStocks');
		}
	}
</script>