<template>
	<div class="container">
		<app-header></app-header>
		<div class="row" style="padding-top: 15px;">
			<div class="col-md-12">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
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

<style type="text/css">
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 0.3s;
	}

	.fade-leave {

	}

	.fade-leave-active {
		transition: opacity 0.3s;
		opacity: 0;
	}
</style>