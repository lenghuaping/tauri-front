/**
 * gitlab请求配置
 */
export const GITLAB_CONFIG = {
	baseURL: 'https://gitlab.com/api/v4',
	token: 'jMeAUQbW1L-EEoe5qAtr'
}

/**
 * gitlab请求头
 */
export const GITLAB_HEADER = {
	'PRIVATE-TOKEN': GITLAB_CONFIG.token
}

/**
 * gitlab 组织id
 */
export const GITLAB_GROUP_ID = 183;

/**
 * 权限级别
 */
export const DEVELOP_LEVEL = {
	/**
	 * gitlab管理员
	 */
	admin: 60,
	/**
	 * 项目持有者
	 */
	maintainer: 40,
	/**
	 * 开发者
	 */
	developer: 30,
}
