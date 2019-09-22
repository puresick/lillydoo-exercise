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
	@import "../stylesheets/mixins";

	div {
		display: flex;
		flex-wrap: wrap;

		& > * {
			margin-bottom: 1rem;
		}

		@include respond-from("large") {
			justify-content: space-between;
			flex-wrap: nowrap;
		}

		@include respond-from("base") {
			& > * {
				margin-right: 1rem;
			}

			& > *:last-child {
				margin-right: 0;
			}
		}
	}

	button {
		border: 0.0625rem solid $color--concrete;
		background: none;
		cursor: pointer;
		width: 100%;
		max-width: 100%;
		@include respond-from("base") { max-width: 6rem; }
		@include respond-from("large") { max-width: 100%; }
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
