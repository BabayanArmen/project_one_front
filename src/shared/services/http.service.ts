import axios, { type AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: ""
})

api.interceptors.request.use(
    (request) => {
        const token = "some token";

        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        if (error.response) {
            const status = error.resonse.status;
            switch (status) {
                case 401:
                console.log("Unauthorized");
                // logout / refresh token
                break;
    
                case 403:
                console.log("Forbidden");
                break;
    
                case 404:
                console.log("Not found");
                break;
    
                case 500:
                console.log("Server error");
                break;
            }
        }

        if (error.request) {
            console.log("Server did not respond");
        }

        console.log("Request error:", error.message);

        return Promise.reject(error);
    }
)

export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await api.get<T>(url, config);
    return response.data;
}

export async function post<TRequest, TResponse>(url: string, body: TRequest, config?: AxiosRequestConfig): Promise<TResponse> {
    const response = await api.post<TResponse>(url, body, config);
    return response.data;
}
