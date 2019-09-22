<template>
	<AppSection>
		<HowToFragment
			v-for="fragment in content.fragments"
			:fragment="fragment"
		/>
	</AppSection>
</template>

<script>
	import AppSection from "./AppSection"
	import HowToFragment from "./HowToFragment"

	export default {
		name: "HowTo",
		components: {
			AppSection,
			HowToFragment
		},
		props: {
			content: {
				default: {},
				type: Object
			}
		}
	}
</script>
