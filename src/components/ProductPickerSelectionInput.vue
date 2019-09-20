<template>
	<div>
		<button
			v-for="item in items"
			@click="selectProduct(item)"
			:class="{ selected: item.id === selectedItem.id }"
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
			items: {
				default: [],
				type: Array
			}
		},
		data() {
			return {
				selectedItem: {
					id: 0
				}
			}
		},
		methods: {
			selectProduct({ id }) {
				console.log(id)
				this.selectedItem = {
					id
				}
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
