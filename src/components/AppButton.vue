<template>
	<button>
		{{ label }}
	</button>
</template>

<script>
	export default {
		name: "AppButton",
		props: {
			label: {
				default: "ButtonLabel",
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	button {
		color: $color--shade-2;
		background: $color--accent-0;
		border: none;
		font-size: $font__size--2;
		line-height: 2.8;
		text-transform: uppercase;
		height: 45px;
		width: 90%;
		cursor: pointer;

		&:hover {
			background: $color--accent-1;
		}
	}
</style>
