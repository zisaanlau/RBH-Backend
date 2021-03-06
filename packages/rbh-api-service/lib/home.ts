import { ApiClient, HttpClient } from './http_client';

export class HomeApi extends ApiClient {
    public createHome = async (fullname: string, adminname: string, adminid: numId) =>
        this.httpClient.request<stringId>('post', `/api/home?fullname=${fullname}&adminname=${adminname}&adminid=${adminid}`);

    public getHome = async (userId: numId) => this.httpClient.request<IUser2Home[]>('get', `/api/home?userId=${userId}`);

    public getHomeDetail = async (houseId: numId) => this.httpClient.request<IUserInfo[]>('get', `/api/home/detail?houseId=${houseId}`);

    public removeRoommate = async (userName: string, houseId: numId) =>
        this.httpClient.request<Boolean>('delete', `/api/home?userName=${userName}&houseId=${houseId}`);

    public deleteHome = async (houseId: numId) => this.httpClient.request<Boolean>('delete', `/api/home/houseId?houseId=${houseId}`);

    public getUserbalanceByHome = async (userName: string, houseId: numId) =>
        this.httpClient.request<IUserBalanceResponse>('get', `/api/home/balance?userName=${userName}&houseId=${houseId}`);
    public transerOwnership = async (houseId: number, userName: string) =>
        this.httpClient.request<Boolean>('put', `/api/home/transfer?houseId=${houseId}&userName=${userName}`);
}

export default (client: HttpClient) => new HomeApi(client);
