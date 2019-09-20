<template>
	<ul>
		<li v-for="item in items">
			{{ item }}
		</li>
	</ul>
</template>

<script>
	export default {
		name: "AppList",
		props: {
			items: {
				default: [],
				type: Array
			}
		}
	}
</script>

<style scoped>
</style>
