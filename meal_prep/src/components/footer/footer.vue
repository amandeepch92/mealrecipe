<template>
   <v-footer color="brown lighten-4" padless>
			<v-layout justify-center wrap>
				<v-flex brown  py-4 text-center white--text xs12>
					{{ new Date().getFullYear() }} — <strong>{{footerDescription}}</strong>
				</v-flex>
			</v-layout>
		</v-footer>
</template>
<script>
export default {
  name: "app-footer",
  components: {},
  props: {
    footerDescription:{
      type:String
    }
  },
};
</script>
<style scoped>
.text-center {
  padding: 0px;
}
</style>