import httpClient from "@/httpClient";

export default class NodesService {
	static API_ENDPOINT = "substation";

	static async getAll() {
		const response = await httpClient().get(`nodes`);

		return response.data;
	}
}
