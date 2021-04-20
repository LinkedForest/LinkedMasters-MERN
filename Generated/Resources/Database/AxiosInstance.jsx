import axios from 'axios';

const AxiosInstance = (History = null) => {

    const BaseURL = process.env.REACT_APP_DATABASE_URL;
    let   Headers = {};

    if (localStorage.AuthDashboard) {
        Headers.Authorization = `Bearer ${localStorage.AuthDashboard}`;
    }

    const AxiosCreation = axios.create({
        baseURL: BaseURL,
        headers: Headers,
    })

    AxiosCreation.interceptors.response.use(
        (Response) =>
            new Promise((Resolve) => {
                Resolve(Response);
            }),
        (Error) => {
            if (Error.response.status === 401) {
                localStorage.removeItem('AuthDashboard');
                localStorage.removeItem('AuthFrontView');
                if (History) {
                    History.push('/');
                } else {
                    window.location = '/';
                }
            } else {
                return new Promise((Resolve, Reject) => {
                    Reject(Error);
                })
            }
        }
    )
    return AxiosCreation;
}

export default AxiosInstance;