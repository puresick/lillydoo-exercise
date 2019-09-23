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
	article {
		display: flex;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	picture {
		display: flex;
	}

	img {
		object-position: center center;
		object-fit: contain;
	}
</style>
