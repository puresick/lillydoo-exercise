<template>
	<AppSection
		:headline="content.headline"
	>
		<PackageContentFragment
			v-for="fragment in fragments"
			:fragment="fragment"
		/>
	</AppSection>
</template>

<script>
	import AppSection from "./AppSection"
	import PackageContentFragment from "./PackageContentFragment"

	export default {
		name: "PackageContent",
		components: {
			AppSection,
			PackageContentFragment
		},
		props: {
			content: {
				default: {},
				type: Object
			},
			fragments: {
				default: () => {},
				type: Array
			}
		}
	}
</script>

<style scoped>
</style>
