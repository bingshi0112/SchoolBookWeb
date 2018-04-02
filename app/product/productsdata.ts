/**
 * Created by Gaurav on 15-11-2016.
 */
import {Product} from '../model/Product'
import {User} from "../model/User"

export const productList : Product[] =
    [new Product("id1","a","shoes",200,true,
        'http://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
        new User("1","Owner1","Owner1","test@sjsu.edu"),
        null,'San Jose',"desc",null,null),
    new Product("id2","b","Laptop",200,true,
        'http://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
        new User("1","Owner2","Owner2","test@sjsu.edu"),null,'San Jose',"desc",null,null),
    new Product("id3","test","Laptop",200,true,
        'http://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
        new User("1","Owner2","Owner2","test@sjsu.edu"),null,'San Jose',"desc",null,null),
    new Product("id4","test","Laptop",200,true,'http://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',new User("1","Owner2","Owner2","test@sjsu.edu"),null,'San Jose',"desc",null,null)];


