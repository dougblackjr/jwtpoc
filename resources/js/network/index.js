import {
	IAuthTokens,
	TokenRefreshRequest,
	useAuthTokenInterceptor
} from 'axios-jwt';

import axios from 'axios';

// your axios instance that you wish to apply the interceptor to
import api from '../apiClient';

const BASE_URL = process.env.MIX_JWT_BASE_AUTH_URL;

if (!BASE_URL) throw new Error('BASE_URL is not defined');

// type of response from login endpoint
export interface IAuthResponse {
	access_token,
	refresh_token
}

// refresh token endpoint
const refreshEndpoint = `${BASE_URL}/refresh`;

// transform response into IAuthTokens
// this assumes your auth endpoint returns `{'access_token': ..., 'refresh_token': ...}`
export const authResponseToAuthTokens = IAuthTokens => ({
	accessToken,
	refreshToken
});

// define token refresh function
const requestRefresh = async (refreshToken): Promise => {
	// perform refresh
	return (await axios.post(refreshEndpoint, { token })).data.access_token
};

// add interceptor to your axios instance
useAuthTokenInterceptor(apiClient, { requestRefresh });