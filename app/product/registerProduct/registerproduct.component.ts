/**
 * Created by Gaurav on 18-11-2016.
 */
import {Component, OnInit} from '@angular/core';
import {FBService} from "../../facebook.service";
import {Router} from '@angular/router'
import {Product} from "../../model/Product";
import {User} from "../../model/User";
import {ProductsService} from "../products.service"
import {Mapper} from "../util/mapper";



@Component({
    moduleId: module.id,
    selector: 'register-product',
    templateUrl: 'registerproduct.html',
    styleUrls: ['registerproduct.css']
})
export class RegisterProductComponent implements OnInit{

    files: File[];
    categories: string[];
    category: string;
    firebase :any;
    protected isLoggedIn: boolean = false;
    private userLoginName: string;

    log(para) {
        console.log(para);
    }

    constructor(private _productService: ProductsService, private _router: Router, private fb: FBService) {
        //Observable.fromEvent($('#myform'),"");
        this.files = [];
        this.firebase =(<any>window).firebase;
        console.log("Prining firebase"+ this.firebase);
        console.log();

    }

    ngOnInit(): void {
        this.fb.checkStatus().then((response) => {
            this.isLoggedIn = response;
            console.log(response);
            if (response) {
                this.fb.getName().then((response) => {
                    this.userLoginName = response;
                    console.log(response);
                });
            }
            else{
                this._router.navigate(['/home']);
            }
        });

        //call REST service and assign it Categories
        this.categories = ["shoes", "toys", "cloths", "books"];
    }


    selectFile(fileInput) {
        console.log(fileInput);
        let fileList: FileList = fileInput.target.files;
        for (var i = 0; i < fileList.length; i++) {
            console.log(fileList[i]);
            this.files.push(fileList[i]);

        }
        console.log(this.files);
    }

    /*
     * public name:string,//done
     public category:string,//category done
     public price:number,//done
     public isAvailable:boolean,//done
     public imageUrl:string,//ToDo: HardCoded Image Url should be removed and Fected from ImageService
     public owner:User,
     public buyer:User,//buyer done
     public location:string*/

    /*ControlGroup --> Formgroup*/
    onSubmit(form) {
        console.log(form);
        var name = form.value.firstname;
        var desc = form.value.descr;
        /*console.log(this.category);
        console.log(form.value.category);
        console.log(name);
        console.log(desc);*/
        console.log(this.files[0]);

        let auth = this.firebase.auth();
        let storageRef = this.firebase.storage().ref();
        var metadata = {
            'contentType': this.files[0].type
        };
        storageRef.child('images/' + this.files[0].name).put(this.files[0], metadata).then(snapshot => {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log(snapshot.metadata);
            var url = snapshot.metadata.downloadURLs[0];
            console.log('File available at', url);
            let product: Product = new Product(null,form.value.productname, form.value.category, form.value.price, true,
                url, new User(this.userLoginName, form.value.firstname, form.value.firstname, form.value.email), null,
                form.value.loc, form.value.descr,null,null);
            console.log("Printing product before storing it"+ product);
            let mapper: Mapper = new Mapper();
            let firebaseObject = mapper.mapToFireBaseProduct(product);
            this._productService.postProduct(firebaseObject).subscribe(resp => {
                    console.log(resp);
                    console.log('routing to products-list page');
                    this._router.navigate(['/products-list']);
                }
            );

        }).catch(function(error) {
            // [START onfailure]
            console.error('Upload failed:', error);
            // [END onfailure]
        });

        //ToDo: User Ids


    }

}