<template>
	<article>
		<img
			:src="fragment.image"
		/>
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

<style scoped>
</style>
