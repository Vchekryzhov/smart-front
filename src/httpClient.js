import axios from "axios"

const httpClient = () => {
	const baseUrl = process.env.VUE_APP_API_ENDPOINT;

	return axios.create({
		baseURL: baseUrl,
		headers: {
			"Content-Type": "application/json"
		}
	})
}

export default httpClient;
