<template>
	<div>
		<button
			v-for="item in items"
			:key="item.id"
			:class="{ selected: item.id === activeItem.id }"
			@click="selectProduct(item)"
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
			default: () => ({}),
			type: Object
		},
		items: {
			default: () => ([]),
			type: Array
		},
		selectProduct: {
			default: () => {},
			type: Function
		}
	},
	mounted() {
		this.selectProduct(this.items[0])
	}
}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
	@import "../stylesheets/mixins";

	div {
		display: flex;
		flex-wrap: wrap;

		@include respond-from("medium") {
			flex-wrap: nowrap;
		}

		@include respond-from("base") {
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
		max-width: $size--max-width--button-input;
		margin-bottom: $gap--picker-input;
		margin-right: $gap--picker-input;
		min-height: $size--min-height--button-input;
		transition: $transition--button;
		padding: $padding--button__picker;

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

	p:first-child {
		font-size: $font__size--headline__sub;
	}

	p:last-child {
		font-size: $font__size--button--detail;
	}
</style>
