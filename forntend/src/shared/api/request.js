export const request = async ({ url, method, data, query }) => {
	const endpoint = `/api/${url.replace(/^\/+/, '')}`;

	const queryString = query ? `?${new URLSearchParams(query).toString()}` : '';

	const response = await fetch(endpoint + queryString, {
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};
