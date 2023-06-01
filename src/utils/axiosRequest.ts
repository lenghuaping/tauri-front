import { message } from 'antd'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios';
import { GITLAB_HEADER } from './gitlab'

export interface IBaseResponse {
	success: boolean;
	message: string;
	data: any;
	status: number;
}

const request = async (options: AxiosRequestConfig<any>): Promise<IBaseResponse> => {
	const { headers = {}, ...rest } = options
	const res = await axios.request<IBaseResponse, IBaseResponse>({
		...rest,
		baseURL: "/shawicx/api",
		timeout: 10000,
		headers: {
			...headers,
			...GITLAB_HEADER
		}
	})
	const { message, data, success, status } = res;
	console.log(res, 'request')
	return new Promise((resolve) => {
		resolve({
			message,
			data,
			success,
			status
		})
	})
}

axios.interceptors.response.use(
	function (response) {
		const { data, ...rest } = response
		return Promise.resolve(data)
	},
	(error) => {
		const errorMessage = error.response.data?.message || 'unknown error';
		message.error(errorMessage);
		return Promise.resolve({
			code: 0,
			message: errorMessage,
			status: error.response.status,
			data: error.response.statusText
		})
	}
)

export default request
