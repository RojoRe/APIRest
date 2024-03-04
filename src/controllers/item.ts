import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"


const getItem = (req:Request, res:Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
      
    }

}


const getItems = (req:Request, res:Response) =>{
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')

       
    }
}

const updateItem = (req:Request, res:Response) =>{
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATES_ITEM')

    }
}

const postItem = ({body}:Request, res:Response) =>{
    try{
        res.send(body);
    } catch (e) {
    }
}

const deleteItem = (req:Request, res:Response) =>{
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM', e)

        
    }
}

export {getItem, getItems, postItem, updateItem, deleteItem }