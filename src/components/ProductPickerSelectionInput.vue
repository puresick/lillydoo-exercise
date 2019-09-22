<template>
	<div>
		<button
			v-for="item in items"
			@click="selectProduct(item)"
			:class="{ selected: item.id === activeItem.id }"
		>
			<p>{{ item.label.main }}</p>
			<p>{{ item.label.detail }}</p>
		</button>
	</div>
</template>

<script>
	export default {
		name: "ProductPickerSelectionInput",
		props: {
			activeItem: {
				default: {},
				type: Object
			},
			items: {
				default: [],
				type: Array
			},
			selectProduct: {
				default: () => {},
				type: Function
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	div {
		display: flex;
		justify-content: space-between;

		& > * {
			margin-right: 1rem;
		}

		& > *:last-child {
			margin-right: 0;
		}
	}

	button {
		border: 0.0625rem solid $color--concrete;
		background: none;
		cursor: pointer;
		width: 100%;
		height: 4rem;

		&:hover,
		&.selected {
			color: $color--snow;
			border-color: $color--lillydoo;
			background: $color--lillydoo
		}
	}

	p {
		margin: 0;
	}
</style>
