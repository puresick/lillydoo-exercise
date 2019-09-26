<template>
	<ul>
		<li
			v-for="item in items"
			:key="item"
		>
			{{ item }}
		</li>
	</ul>
</template>

<script>
export default {
	name: "AppList",
	props: {
		items: {
			default: () => [],
			type: Array
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	ul {
		padding-left: 1rem;
		margin: 0 0 $gap--list 0;
	}

	li {
		margin: 0 0 $gap--list--item 0;
	}
</style>
