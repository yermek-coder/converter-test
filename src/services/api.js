// @ts-check
// API Service
class API {
    get(path, config = null) {
        return this.exec("get", path, null, config);
    }

    exec(method, path, body = null, config = {}) {
        // Execute fetch
        return fetch(path, {
            body,
            method,
            ...config,
            headers: { ...config?.headers }
        }).then(async res => {
            if (res.status == 401) {
                document.dispatchEvent(new Event("api/unauthorized"));
                throw "Unauthorized";
            } else if (res.status >= 400) {
                let payload = { message: await res.text() };
                try {
                    payload = JSON.parse(payload.message);
                } catch (e) {}

                throw { status: res.status, statusText: res.statusText, ...payload };
            }

            // Parse json
            const text = await res.text();
            try {
                return JSON.parse(text);
            } catch (err) {
                return text;
            }
        });
    }
}

export default new API();
