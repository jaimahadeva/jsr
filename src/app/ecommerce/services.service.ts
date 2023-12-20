import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  baseUrl = "http://localhost:8080";
  //  baseUrl="https://prepshopbackend.onrender.com"
  addProductUrl = this.baseUrl + '/ecommerce/addNewProduct';
  getProductsByidUrl = this.baseUrl + '/ecommerce/getProductsListByuserId';
  searchedProductUrl = this.baseUrl + '/ecommerce/getSearchedProduct/';
  filterProjectsearchesUrl = this.baseUrl + '/ecommerce/filterProductBy/';
  SearchedSuggessionsAsperUserUrl = this.baseUrl + '/ecommerce/ProductSugessions';
  CartSaveProductsUrl = this.baseUrl + '/ecommerce/addToCartSave';
  CartsCountsUrl = this.baseUrl + '/ecommerce/getCartsCount';
  GetCartsDetailsPageUrl = this.baseUrl + '/ecommerce/getProductsByCarts';
  BuyProductUrl = this.baseUrl + '/ecommerce/BuyProduct';
  GetAllBuyedProductsUrl = this.baseUrl + '/ecommerce/GetAllBuyedProducts';
  BuyedProductStatusUpdateUrl = this.baseUrl + '/ecommerce/BuyedProductStatusUpdate/';
  BuyedProductStatusUrl = this.baseUrl + '/ecommerce/BuyedProductStatus';
  BuyProductRequiredForStatusUrl = this.baseUrl + '/ecommerce/BuyProductRequiredForStatus';
  SubmitReviewUrl = this.baseUrl + '/ecommerce/SubmitReview';
  ProductreviewsUrl = this.baseUrl + '/ecommerce/Productreviews/';
  addProductonHomepageUrl = this.baseUrl + '/ecommerce/AddNewProductHome';
  getAllProductsHomeUrl = this.baseUrl + '/ecommerce/getAllProductsHome/';
  // GetFeedBacksUrl=this.baseUrl + '/ecommerce/GetFeedBacks';
   // submitFeedbackUrl=this.baseUrl + '/ecommerce/submitFeedback';
  GetFeedBacksUrl='https://prepshopbackend.onrender.com/ecommerce/GetFeedBacks';
  submitFeedbackUrl= 'https://prepshopbackend.onrender.com/ecommerce/submitFeedback'
  ApiCalling11: boolean = false;

  constructor(private http: HttpClient) { }
  pageNumberOff: boolean = false;
  onluForLocal: boolean = false;
  //                common in local and prod              //
  ecomLoader: boolean = true;
  cartsCount: any = [];
  searchedProduct: any = '';
  searchedResults: any = [];
  brandNames: any = [];
  buyItem: any = {};
  getSearchedProducts: number = 0;
  pageNumber: number = 0;
  ApiCalling: boolean = false;
  //            home                              //  
  addProductonHomepage(req: any) {
    return this.http.post(`${this.addProductonHomepageUrl}`, req)
  }
  getAllProductsHome(req: any) {
    this.ApiCalling = true;
    return this.http.get(`${this.getAllProductsHomeUrl + req.pageNumber}`)
  }
  // add a new product
  //            sell product                              //
  addProductS(req: any) {
    this.ApiCalling = true;
    return this.http.post(`${this.addProductUrl}`, req)
  }
  getProductsListByuserId(req: any) {
    this.ApiCalling = true;
    return this.http.post(`${this.getProductsByidUrl}`, req);
  }
  //            productpage                              //  
 
  getSearchedProduct(req: any) {
    this.ApiCalling = true;
    return this.http.post(`${this.searchedProductUrl + req.pageNumber}`, req)
  }
  filterProjectsearches(req: any) {
    this.ApiCalling = true;
    return this.http.post(`${this.filterProjectsearchesUrl + req.brand}`, req)
  }
  SearchedSuggessionsAsperUser(req: any) {
    this.ApiCalling = true;
    return this.http.post(`${this.SearchedSuggessionsAsperUserUrl}`, req)
  }
  //                 Carts                  //
  CartSaveProducts(req: any) {
    return this.http.post(`${this.CartSaveProductsUrl}`, req)
  }
  CartsCounts(req: any) {
    return this.http.post(`${this.CartsCountsUrl}`, req)
  }
  GetCartsDetailsPage(req: any) {
    return this.http.post(`${this.GetCartsDetailsPageUrl}`, req)
  }
  //            buyNow                              //
  BuyProduct(req: any) {
    return this.http.post(`${this.BuyProductUrl}`, req)
  }
  GetAllBuyedProducts(req: any) {
    return this.http.post(`${this.GetAllBuyedProductsUrl}`, req)
  }
  BuyedProductStatusUpdate(req: any) {
    return this.http.post(`${this.BuyedProductStatusUpdateUrl + req.productid}`, req)
  }
  BuyedProductStatus(req: any) {
    return this.http.post(`${this.BuyedProductStatusUrl}`, req)
  }
  BuyProductRequiredForStatus(req: any) {
    return this.http.post(`${this.BuyProductRequiredForStatusUrl}`, req)
  }
  //            myorder                              //
  SubmitReview(req: any) {
    return this.http.post(`${this.SubmitReviewUrl}`, req)
  }
  Productreviews(req: any) {
    return this.http.post(`${this.ProductreviewsUrl + req.productid}`, req)
  }
  //            Suugeestions                              //
  submitFeedback(req: any) {
    return this.http.post(`${this.submitFeedbackUrl}`, req)
  }
  GetFeedBacks(){
    return this.http.get(`${this.GetFeedBacksUrl}`)
  }

}
