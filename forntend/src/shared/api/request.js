export const request = async ({ url = '', method = 'GET', data = {}, query = {} }) => {
	const endpoint = `/api/${url.replace(/^\/+/, '')}`;

	const queryString = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : '';

	const response = await fetch(endpoint + queryString, {
		method,
		body: method !== 'GET' && Object.keys(data).length ? JSON.stringify(data) : undefined,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return await response.json();
};
