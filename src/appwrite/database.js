import config from '../config/configVar';
import {Client, Databases, Query} from 'appwrite';

export class DatabaseService{
    clinet = new Client()
    databse;

    constructor(){
        console.log('DatabaseService constructor invoked....');
        this.clinet.setEndpoint(config.appwriteUrl);
        this.clinet.setProject(config.appwriteProjectId);

        this.databse = new Databases(this.clinet);
    }

    async createPost(slug, {title, content, featuredImage, status, userId}){
        console.log('DatabaseService createPost method invoked....');
        try{
            console.log("title : ", title, "content : ", content, "featuredImage : ", featuredImage, "status : ", status, "userId : ", userId);
            return await this.databse.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log('Exception occured while calling createPost...');
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}){
        console.log('DatabaseService updatePost method invoked....');
        try{
            return await this.databse.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log('Exception occured while calling updatePost...');
            throw error;
        }
    }

    async deletePost(slug){
        console.log('DatabaseService deletePost method invoked....');
        try{
            await this.databse.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        }catch(error){
            console.log('Exception occured while calling deletePost...');
            return false;
        }
    }

    async getPost(slug){
        console.log('DatabaseService getPost method invoked....');
        try{
            return await this.databse.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log('Exception occured while calling getPost...');
            return false;
        }
    }

    async getPosts(){
        console.log('DatabaseService getPosts method invoked....');
        try{
            return await this.databse.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [
                    Query.equal("status", "active")
                ]
            )
        }catch(error){
            console.log('Exception occured while calling getPosts...');
            return false;
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;