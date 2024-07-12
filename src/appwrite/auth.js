import config from '../config/configVar';
import {Client, Account, ID} from 'appwrite';

export class AuthService {
    clinet = new Client()
    account;

    constructor(){
        console.log('AuthService constructor invoked....');
        this.clinet.setEndpoint(config.appwriteUrl);
        this.clinet.setProject(config.appwriteProjectId);

        this.account = new Account(this.clinet);
    }

    async register(email, password, name) {
        console.log('AuthService register method invoked....');
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return await this.account.createEmailPasswordSession(email, password);
            }else{
                return userAccount;
            }
        }catch (error){
            console.log('Exception occured while calling register...');
            throw error;
        }
    }

    async login(email, password){
        console.log('AuthService login method invoked....');
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }catch (error){
            console.log('Exception occured while calling login...');
            throw error;
        }
    }

    async getCurrentUser(){
        console.log('AuthService getCurrentUser method invoked....');
        try{
            return await this.account.get();
        }catch (error){
            console.log('Exception occured while calling getCurrentUser...');
            throw error;
        }

        return null;
    }

    async logout(){
        console.log('AuthService logout method invoked....');
        try{
            return await this.account.deleteSessions();
        }catch (error){
            console.log('Exception occured while calling logout...');
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;