import { BaseService } from './base.service';
import Cookies from 'js-cookie';

const token = Cookies.get('accessToken');

export class AuthService extends BaseService {
  async signUp(payload) {
    const { data } = await this.httpClient.post('/auth/register', payload);
    return data;
  }

  async signIn(signInPayload) {
    const { data } = await this.httpClient.post('/auth/login', signInPayload);
    return data;
  }

  async logout(payload) {
    const response = await this.httpClient.post('/auth/logout', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  async resendVerifyAccountEmail(payload) {
    const { data } = await this.httpClient.post('/auth/verify-account/new', payload);
    return data;
  }

  async refreshToken(payload) {
    const { data } = await this.httpClient.post('/auth/refresh', payload);
    return data;
  }

  setToken(accessToken) {
    this.httpClient.setCustomConfigs({
      authentication: {
        token: accessToken,
      },
    });
  }
}

export const authService = new AuthService();
