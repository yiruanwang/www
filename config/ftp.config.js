/**
 * @Author: git config user.name && git config user.email
 * @Create Time: 2023-11-21 19:01:23
 * @Modified by: git config user.name && git config user.email
 * @Modified time: 2023-11-21 19:03:53
 * @Description: qingshu.work
 */

import { deploy, excludeDefaults } from '@samkirkland/ftp-deploy'

async function deployMyCode() {
	console.log('🚚 Deploy started')
	await deploy({
		server: "${host}",
		username: "${username}",
		password: "${password}",
		'local-dir': 'docs/.vuepress/dist',
		// 'server-dir': '/',
		exclude: [...excludeDefaults, 'dontDeployThisFolder/**'],
		//一般不需要添加,对于有些服务器禁止上传.ftp-deploy-sync-state.json文件的时候需要自定义下
		'state-name':'ftp-deploy-sync-state.json'
	})
	console.log('🚀 Deploy done!')
}

deployMyCode()
