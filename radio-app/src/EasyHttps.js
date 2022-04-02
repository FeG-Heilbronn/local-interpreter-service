class EasyHttpClient {
    async get(url) {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    }

    async delete(url) {
        await fetch(url, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        });
        const result = await 'Resource deleted';
        return result;
    }
}

const httpClient = new EasyHttpClient();
export {
    httpClient,
}