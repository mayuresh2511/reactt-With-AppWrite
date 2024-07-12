import config from '../config/configVar';
import {Client, Storage, ID} from 'appwrite';

export class StorageService{
    clinet = new Client()
    bucket;

    constructor(){
        console.log('StorageService constructor invoked....');
        this.clinet.setEndpoint(config.appwriteUrl);
        this.clinet.setProject(config.appwriteProjectId);

        this.bucket = new Storage(this.clinet);
    }

    async uploadFile(file){
        console.log('StorageService uploadFile method invoked....');
        try{
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log('Exception occured while calling uploadFile...');
            return false;
        }
    }

    async deleteFile(fileId){
        console.log('StorageService deleteFile method invoked....');
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        }catch(error){
            console.log('Exception occured while calling deleteFile...');
            return false;
        }
    }

    getFilePreview(fileId){
        console.log('StorageService getFilePreview method invoked....');
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}