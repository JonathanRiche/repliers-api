export const client = {
	/**
	 *
	 * @param apiKey
	 * @param fetchMethod replace with node-fetch if not in DOM or a framework like Sveltekit/Next etc
	 */
	init: (apiKey: string, fetchMethod?: any) => {
		client.options.headers['REPLIERS-API-KEY'] = apiKey;
		if (fetchMethod) client.fetch = fetchMethod;
	},
	fetch: fetch,
    endPointOrigin :'https://sandbox.repliers.io',
    options : {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'REPLIERS-API-KEY': '' }
    }
};