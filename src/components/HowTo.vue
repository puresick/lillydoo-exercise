<template>
	<AppSection
		:headline="content.headline"
	>
		<HowToFragment
			v-for="fragment in content.fragments"
			:key="fragment.title"
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
			default: () => ({}),
			type: Object
		}
	}
}
</script>
