<template>
	<section>
		<AppHeadline>
			Headline
		</AppHeadline>
		<AppSubHeadline>
			SubHeadline
		</AppSubHeadline>
		<AppButton
			label="Label"
		/>
	</section>
</template>

<script>
	import AppButton from "./AppButton"
	import AppHeadline from "./AppHeadline"
	import AppSubHeadline from "./AppSubHeadline"

	export default {
		name: "App",
		components: {
			AppButton,
			AppHeadline,
			AppSubHeadline
		}
	}
</script>
