<template>
	<article>
		<picture>
			<img
				:src="fragment.image"
				/>
		</picture>
		<div>
			<AppSubHeadline>
				{{ fragment.title }}
			</AppSubHeadline>
			<AppList
				:items="fragment.list"
			/>
		</div>
	</article>
</template>

<script>
	import AppList from "./AppList"
	import AppSubHeadline from "./AppSubHeadline"

	export default {
		name: "PackageContentFragment",
		components: {
			AppList,
			AppSubHeadline
		},
		props: {
			fragment: {
				default: {},
				type: Object
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
	@import "../stylesheets/mixins";

	article {
		display: flex;
		width: 100%;
	}

	picture {
		display: flex;
		margin: $gap--picture;
		width: 20%;
	}

	img {
		object-position: top;
		object-fit: contain;
		width: 100%;
	}

	div {
		display: flex;
		flex-direction: column;
		width: 80%;
	}
</style>
