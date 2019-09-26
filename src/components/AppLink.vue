<template>
	<a
		:href="href"
		:class="{ centered }"
	>
		<slot />
	</a>
</template>

<script>
export default {
	name: "AppLink",
	props: {
		centered: {
			default: false,
			type: Boolean
		},
		href: {
			default: "",
			type: String
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	a {
		text-decoration: none;
		color: $color--lillydoo;

		&:hover {
			color: $color--deepwater;
		}
	}
	.centered {
		text-align: center;
	}
</style>
