<template>	
	<div class="timesindex" style="display: none"></div>
</template>
<script>
export default {
	data() {
		return {
			cnHost: '//cn.yiruan.wang',
			Host:'//www.yiruan.wang'
		}
	},
	// created() {
	// 	// console.log('object :>> ', `object`)
	// 	this.userWebUrl()
	// },
	mounted() {
		let language = navigator.language
			let domain = document.domain
			if (domain == 'cn.yiruan.wang' || domain == 'localhost') {
				console.log(domain)
			} else {
				console.log(`1111`)
				if (language == 'zh-CN') {
					location.href = '//cn.yiruan.wang'
				} else {
					location.href = '//www.yiruan.wang'
				}
			}

	},
	methods: {
		userWebUrl() {
			// if (typeof global.navigator === 'undefined') global.navigator = {};
			let language = navigator.language
			let domain = document.domain
			if (domain == 'cn.yiruan.wang' || domain == 'localhost') {
				console.log(domain)
			} else {
				console.log(`1111`)
				if (language == 'zh-CN') {
					location.href = '//cn.yiruan.wang'
				} else {
					location.href = '//www.yiruan.wang'
				}
			}
		}
	}
}
</script>

<style>
.timesindex{
	display:none
}</style>
