import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalecomService {

  
  CartSaveProducts: any;
  BuyProduct: any;
  BuyProductRequiredForStatus: any;
  SubmitReview: any;
  Productreviews: any;
  

  addProductonHomepage(req: any): Observable<any[]> {
    const a = [{}];
    return of(a);
  }
  addProductS(req: any): Observable<any[]> {
    throw new Error('Method not implemented.');
  }
  
  pageNumberOff:boolean=true;
  onluForLocal:boolean=true;

  //                common in local and prod              //
  ecomLoader: boolean = true;
  cartsCount: any = [];
  searchedProduct: any = '';
  searchedResults:any=[];
  searchedResultsNew: any =  [{
    "productid": 4,
    "userid": 2,
    "productname": "Samsung",
    "desciption": "SAMSUNG Crystal 4K iSmart Series 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV 2023 Edition  (UA43CUE60AKLXL)\n",
    "oldprice": 30000,
    "newprice": 52000,
    "discount": 30,
    "itemsLeft": 500,
    "store": "Bharat",
    "stringproductid": "4",
    "addtocart": false,
    "ratings": 0,
    "ratingsgiveby": 0,
    "category": "tv",
    "expecteddelivery": "string",
    "specialoffer": "string",
    "specialdesciption": "string",
    "totalorders": 0,
    "brandname": "Samsung",
    "totalansweredquestions": 0,
    "openboxpolicy": true,
    "aboutthisitem": "\n\nWith the excellent Samsung TV, which recognises your mood and aims to keep you delighted continually, you can take advantage of rich, clear, and original audiovisual material in its true form. With its real 4K resolution, the Samsung 108 cm (43) Ultra HD LED Smart Tizen TV allows you to see every hue. Thanks to the potent 4K upscaling, you can watch your preferred entertainment in excellent quality and with lifelike visuals. The TV can also express a wide range of colours thanks to PurColor for the best possible image quality and an enjoyable watching experience. Additionally, you can select your preferred genres, TV shows, and much more with the Smart Hub that is integrated into this TV so that you can spend more time enjoying your favourite films and games and less time browsing.\n",
    "addeddate": null,
    "orderedDate": null,
    "offers": [
      {
        "offerid": 10,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above"
      },
      {
        "offerid": 11,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 250 Instant Instant Discount on HDFC Bank Card 12 month and above Credit EMI Trxn. Min purchase value INR 15000"
      },
      {
        "offerid": 12,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 500 Instant Discount on HDFC Bank Card 9 month and above Credit EMI Trxn. Min purchase value INR 10000"
      }
    ],
    "keyfeatures": [
      {
        "featureId": 16,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
        "featurename": "Free Delivery"
      },
      {
        "featureId": 17,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "10 Days Replacement By Brand"
      },
      {
        "featureId": 18,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "1 Year Warranty"
      },
      {
        "featureId": 19,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png",
        "featurename": "Top Brand"
      }
    ],
    "productreviews": [],
    "questions": [
      {
        "questionid": 34,
        "productid": 0,
        "question": "Does wall mount costs extra?",
        "username": "Add Question",
        "userId": 0,
        "answers": [
          {
            "answerid": 34,
            "productid": 0,
            "username": "string",
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": "string"
          }
        ]
      },
      {
        "questionid": 35,
        "productid": 0,
        "question": "Is optical audio output available",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 35,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes it's available",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 36,
        "productid": 0,
        "question": "Can We Connect This Led from Phone",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 36,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 37,
        "productid": 0,
        "question": "Do we use two remotes with this tv one for setupbox and the one for tv?",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 37,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 38,
        "productid": 0,
        "question": "Can we use external game remote for playing games",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 38,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      }
    ],
    "specifications": [
      {
        "specificationid": 19,
        "productid": 0,
        "userid": 0,
        "heading": "Screen Size\n",
        "answer": "43 Inches"
      },
      {
        "specificationid": 20,
        "productid": 0,
        "userid": 2,
        "heading": "Brand",
        "answer": "Samsung"
      },
      {
        "specificationid": 21,
        "productid": 0,
        "userid": 2,
        "heading": "Supported",
        "answer": "Netflix, Prime Video, Zee5, SonyLiv,Youtube, Hotstar"
      },
      {
        "specificationid": 22,
        "productid": 0,
        "userid": 2,
        "heading": "Display Technology",
        "answer": "LED"
      },
      {
        "specificationid": 23,
        "productid": 0,
        "userid": 2,
        "heading": "Product Dimensions",
        "answer": "6D x 96.4W x 55.9H Centimeters"
      },
      {
        "specificationid": 24,
        "productid": 0,
        "userid": 2,
        "heading": "Resolution",
        "answer": "4K"
      },
      {
        "specificationid": 25,
        "productid": 0,
        "userid": 2,
        "heading": "Refresh Rate",
        "answer": "50 Hz\n"
      },
      {
        "specificationid": 26,
        "productid": 0,
        "userid": 2,
        "heading": "Special Feature",
        "answer": "Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc., Screen mirroring, Universal Guide,"
      },
      {
        "specificationid": 27,
        "productid": 0,
        "userid": 2,
        "heading": "Model Name",
        "answer": "UA43CUE60AKLXL\n"
      },
      {
        "specificationid": 28,
        "productid": 0,
        "userid": 2,
        "heading": "Included Components",
        "answer": "1 LED TV, 2 Battery (AAA Size), 1 REMOCON, 1 Stand-Left, 1 Stand-Right"
      }
    ],
    "images": [
      {
        "imageid": 16,
        "productid": 0,
        "userid": 0,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/l4ssfww0/television/8/1/x/-original-imagfm4bjkgbzxky.jpeg?q=70"
      },
      {
        "imageid": 17,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/x/r/n/-original-imagttjpgtshmnms.jpeg?q=70"
      },
      {
        "imageid": 18,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/s/a/o/-original-imagr6z9ybweghmp.jpeg?q=70"
      },
      {
        "imageid": 19,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/n/k/t/ua55cue60aklxl-samsung-original-imagp7uykyf87ewm.jpeg?q=70"
      },
      {
        "imageid": 20,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/e/e/o/ua55cue60aklxl-samsung-original-imagp7uybfycygwr.jpeg?q=70"
      }
    ]
  },
  {
    "productid": 5,
    "userid": 2,
    "productname": "VW Linus",
    "desciption": "VW 80 cm (32 inches) Linux Series Frameless HD Ready Smart LED TV VW32C2 (Black) | with 18 Months Warranty",
    "oldprice": 5880,
    "newprice": 10300,
    "discount": 40,
    "itemsLeft": 500,
    "store": "Bharat",
    "stringproductid": "5",
    "addtocart": false,
    "ratings": 0,
    "ratingsgiveby": 0,
    "category": "tv",
    "expecteddelivery": "string",
    "specialoffer": "string",
    "specialdesciption": "string",
    "totalorders": 0,
    "brandname": "VW",
    "totalansweredquestions": 0,
    "openboxpolicy": true,
    "aboutthisitem": "\n\nWith the excellent Samsung TV, which recognises your mood and aims to keep you delighted continually, you can take advantage of rich, clear, and original audiovisual material in its true form. With its real 4K resolution, the Samsung 108 cm (43) Ultra HD LED Smart Tizen TV allows you to see every hue. Thanks to the potent 4K upscaling, you can watch your preferred entertainment in excellent quality and with lifelike visuals. The TV can also express a wide range of colours thanks to PurColor for the best possible image quality and an enjoyable watching experience. Additionally, you can select your preferred genres, TV shows, and much more with the Smart Hub that is integrated into this TV so that you can spend more time enjoying your favourite films and games and less time browsing.\n",
    "addeddate": null,
    "orderedDate": null,
    "offers": [
      {
        "offerid": 13,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above"
      },
      {
        "offerid": 14,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 250 Instant Instant Discount on HDFC Bank Card 12 month and above Credit EMI Trxn. Min purchase value INR 15000"
      },
      {
        "offerid": 15,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 500 Instant Discount on HDFC Bank Card 9 month and above Credit EMI Trxn. Min purchase value INR 10000"
      }
    ],
    "keyfeatures": [
      {
        "featureId": 20,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
        "featurename": "Free Delivery"
      },
      {
        "featureId": 21,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "10 Days Replacement By Brand"
      },
      {
        "featureId": 22,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "1 Year Warranty"
      },
      {
        "featureId": 23,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png",
        "featurename": "Top Brand"
      }
    ],
    "productreviews": [],
    "questions": [
      {
        "questionid": 39,
        "productid": 0,
        "question": "Does wall mount costs extra?",
        "username": "Add Question",
        "userId": 0,
        "answers": [
          {
            "answerid": 39,
            "productid": 0,
            "username": "string",
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": "string"
          }
        ]
      },
      {
        "questionid": 40,
        "productid": 0,
        "question": "Is optical audio output available",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 40,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes it's available",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 41,
        "productid": 0,
        "question": "Can We Connect This Led from Phone",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 41,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 42,
        "productid": 0,
        "question": "Do we use two remotes with this tv one for setupbox and the one for tv?",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 42,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 43,
        "productid": 0,
        "question": "Can we use external game remote for playing games",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 43,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      }
    ],
    "specifications": [
      {
        "specificationid": 29,
        "productid": 0,
        "userid": 0,
        "heading": "Screen Size\n",
        "answer": "43 Inches"
      },
      {
        "specificationid": 30,
        "productid": 0,
        "userid": 2,
        "heading": "Brand",
        "answer": "vw"
      },
      {
        "specificationid": 31,
        "productid": 0,
        "userid": 2,
        "heading": "Supported",
        "answer": "Netflix, Prime Video, Zee5, SonyLiv,Youtube, Hotstar"
      },
      {
        "specificationid": 32,
        "productid": 0,
        "userid": 2,
        "heading": "Display Technology",
        "answer": "LED"
      },
      {
        "specificationid": 33,
        "productid": 0,
        "userid": 2,
        "heading": "Product Dimensions",
        "answer": "6D x 96.4W x 55.9H Centimeters"
      },
      {
        "specificationid": 34,
        "productid": 0,
        "userid": 2,
        "heading": "Resolution",
        "answer": "4K"
      },
      {
        "specificationid": 35,
        "productid": 0,
        "userid": 2,
        "heading": "Refresh Rate",
        "answer": "50 Hz\n"
      },
      {
        "specificationid": 36,
        "productid": 0,
        "userid": 2,
        "heading": "Special Feature",
        "answer": "Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc., Screen mirroring, Universal Guide,"
      },
      {
        "specificationid": 37,
        "productid": 0,
        "userid": 2,
        "heading": "Model Name",
        "answer": "UA43CUE60AKLXL\n"
      },
      {
        "specificationid": 38,
        "productid": 0,
        "userid": 2,
        "heading": "Included Components",
        "answer": "1 LED TV, 2 Battery (AAA Size), 1 REMOCON, 1 Stand-Left, 1 Stand-Right"
      }
    ],
    "images": [
      {
        "imageid": 21,
        "productid": 0,
        "userid": 0,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/l4ssfww0/television/8/1/x/-original-imagfm4bjkgbzxky.jpeg?q=70"
      },
      {
        "imageid": 22,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/l4ssfww0/television/t/i/p/-original-imagfm4bp5hxexzq.jpeg?q=70"
      },
      {
        "imageid": 23,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/l4n2oi80/television/p/6/g/-original-imagfhuhdez8zjks.jpeg?q=70"
      },
      {
        "imageid": 24,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/l4d2ljk0/television/5/y/n/-original-imagf9theqwkqyx8.jpeg?q=70"
      },
      {
        "imageid": 25,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/l4n2oi80/television/0/y/r/-original-imagfhuhmthrnfe9.jpeg?q=70"
      }
    ]
  },{
    "productid": 6,
    "userid": 2,
    "productname": "MOTOROLA",
    "desciption": "MOTOROLA EnvisionX 109 cm (43 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers  (43UHDGDMBSXP)\n",
    "oldprice": 23999,
    "newprice": 49999,
    "discount": 61,
    "itemsLeft": 1,
    "store": "Bharat",
    "stringproductid": "6",
    "addtocart": false,
    "ratings": 0,
    "ratingsgiveby": 0,
    "category": "tv",
    "expecteddelivery": "string",
    "specialoffer": "string",
    "specialdesciption": "string",
    "totalorders": 0,
    "brandname": "Motorola",
    "totalansweredquestions": 0,
    "openboxpolicy": true,
    "aboutthisitem": "This Motorola HDR10 TV brings to you 6 display modes, 4 sound modes, and 3D Dolby audio. It provides a crystal-clear display and offers 1.07 billion vibrant colours that elevate your entertainment experience. This bezel-less Google TV has a Mediatek quad-core processor that enables seamless navigation. You can mirror your favourite content on the TV screen from your smartphone with the built-in Chromecast feature.\n",
    "addeddate": null,
    "orderedDate": null,
    "offers": [
      {
        "offerid": 16,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above"
      },
      {
        "offerid": 17,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 250 Instant Instant Discount on HDFC Bank Card 12 month and above Credit EMI Trxn. Min purchase value INR 15000"
      },
      {
        "offerid": 18,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 500 Instant Discount on HDFC Bank Card 9 month and above Credit EMI Trxn. Min purchase value INR 10000"
      }
    ],
    "keyfeatures": [
      {
        "featureId": 24,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
        "featurename": "Free Delivery"
      },
      {
        "featureId": 25,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "10 Days Replacement By Brand"
      },
      {
        "featureId": 26,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "1 Year Warranty"
      },
      {
        "featureId": 27,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png",
        "featurename": "Top Brand"
      }
    ],
    "productreviews": [],
    "questions": [
      {
        "questionid": 44,
        "productid": 0,
        "question": "Does wall mount costs extra?",
        "username": "Add Question",
        "userId": 0,
        "answers": [
          {
            "answerid": 44,
            "productid": 0,
            "username": "string",
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": "string"
          }
        ]
      },
      {
        "questionid": 45,
        "productid": 0,
        "question": "Is optical audio output available",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 45,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes it's available",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 46,
        "productid": 0,
        "question": "Can We Connect This Led from Phone",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 46,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 47,
        "productid": 0,
        "question": "Do we use two remotes with this tv one for setupbox and the one for tv?",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 47,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 48,
        "productid": 0,
        "question": "Can we use external game remote for playing games",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 48,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      }
    ],
    "specifications": [
      {
        "specificationid": 39,
        "productid": 0,
        "userid": 0,
        "heading": "Screen Size\n",
        "answer": "43 Inches"
      },
      {
        "specificationid": 40,
        "productid": 0,
        "userid": 2,
        "heading": "Brand",
        "answer": "vw"
      },
      {
        "specificationid": 41,
        "productid": 0,
        "userid": 2,
        "heading": "Supported",
        "answer": "Netflix, Prime Video, Zee5, SonyLiv,Youtube, Hotstar"
      },
      {
        "specificationid": 42,
        "productid": 0,
        "userid": 2,
        "heading": "Display Technology",
        "answer": "LED"
      },
      {
        "specificationid": 43,
        "productid": 0,
        "userid": 2,
        "heading": "Product Dimensions",
        "answer": "6D x 96.4W x 55.9H Centimeters"
      },
      {
        "specificationid": 44,
        "productid": 0,
        "userid": 2,
        "heading": "Resolution",
        "answer": "4K"
      },
      {
        "specificationid": 45,
        "productid": 0,
        "userid": 2,
        "heading": "Refresh Rate",
        "answer": "50 Hz\n"
      },
      {
        "specificationid": 46,
        "productid": 0,
        "userid": 2,
        "heading": "Special Feature",
        "answer": "Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc., Screen mirroring, Universal Guide,"
      },
      {
        "specificationid": 47,
        "productid": 0,
        "userid": 2,
        "heading": "Model Name",
        "answer": "UA43CUE60AKLXL\n"
      },
      {
        "specificationid": 48,
        "productid": 0,
        "userid": 2,
        "heading": "Included Components",
        "answer": "1 LED TV, 2 Battery (AAA Size), 1 REMOCON, 1 Stand-Left, 1 Stand-Right"
      },
      {
        "specificationid": 49,
        "productid": 0,
        "userid": 2,
        "heading": "In The Box",
        "answer": "1 TV Unit, Remote, User Manual, AAA Batteries, Base Stand, Stand Screws, 1 Power Cord"
      }
    ],
    "images": [
      {
        "imageid": 26,
        "productid": 0,
        "userid": 0,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/x/c/a/-original-imagtkmpfat5qcrz.jpeg?q=70"
      },
      {
        "imageid": 27,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/w/u/q/-original-imagtkmpddary56g.jpeg?q=70"
      },
      {
        "imageid": 28,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/g/9/u/-original-imagtwtftebztgqv.jpeg?q=70"
      },
      {
        "imageid": 29,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/l/c/v/-original-imagu6z7q4m67pf9.jpeg?q=70"
      },
      {
        "imageid": 30,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/w/u/q/-original-imagtkmpddary56g.jpeg?q=70"
      }
    ]
  },
  {
    "productid": 7,
    "userid": 2,
    "productname": "MOTOROLA",
    "desciption": "SONY 138.8 cm (55 inch) Ultra HD (4K) LED Smart Google TV 2022 Edition  (KD-55X74K)\n",
    "oldprice": 55000,
    "newprice": 99999,
    "discount": 46,
    "itemsLeft": 0,
    "store": "Bharat",
    "stringproductid": "7",
    "addtocart": false,
    "ratings": 0,
    "ratingsgiveby": 0,
    "category": "tv",
    "expecteddelivery": "string",
    "specialoffer": "string",
    "specialdesciption": "string",
    "totalorders": 0,
    "brandname": "Sony",
    "totalansweredquestions": 0,
    "openboxpolicy": true,
    "aboutthisitem": "Experience a jitter-free and colour-enriched visual experience with the Sony TV which is designed to take your entertainment to an elevated level. This TV is driven by the X1 processor which helps in reducing the noise and boosts the visual quality. Furthermore, the impressive 4K X-Reality PRO of this TV amplifies the visuals and enables you to appreciate up to 4K picture clarity. Additionally, with Motionflow XR 100 sported in this TV, there is no stopping for your entertainment, and you can flawlessly enjoy stutter-free visuals no matter how graphically rich the content is\n",
    "addeddate": null,
    "orderedDate": null,
    "offers": [
      {
        "offerid": 19,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above"
      },
      {
        "offerid": 20,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 250 Instant Instant Discount on HDFC Bank Card 12 month and above Credit EMI Trxn. Min purchase value INR 15000"
      },
      {
        "offerid": 21,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Additional INR 500 Instant Discount on HDFC Bank Card 9 month and above Credit EMI Trxn. Min purchase value INR 10000"
      }
    ],
    "keyfeatures": [
      {
        "featureId": 28,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
        "featurename": "Free Delivery"
      },
      {
        "featureId": 29,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "10 Days Replacement By Brand"
      },
      {
        "featureId": 30,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "1 Year Warranty"
      },
      {
        "featureId": 31,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png",
        "featurename": "Top Brand"
      }
    ],
    "productreviews": [],
    "questions": [
      {
        "questionid": 49,
        "productid": 0,
        "question": "Does wall mount costs extra?",
        "username": "Add Question",
        "userId": 0,
        "answers": [
          {
            "answerid": 49,
            "productid": 0,
            "username": "string",
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": "string"
          }
        ]
      },
      {
        "questionid": 50,
        "productid": 0,
        "question": "Is optical audio output available",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 50,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes it's available",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 51,
        "productid": 0,
        "question": "Can We Connect This Led from Phone",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 51,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "No",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 52,
        "productid": 0,
        "question": "Do we use two remotes with this tv one for setupbox and the one for tv?",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 52,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 53,
        "productid": 0,
        "question": "Can we use external game remote for playing games",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 53,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 54,
        "productid": 0,
        "question": "Difference between x74k and x74",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 54,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "X74 is 2021 model with android version & X74K is 2022 latest model with google tv (latest android interface) Else no change in specifications ,go for google tv the latest version x74k",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 55,
        "productid": 0,
        "question": "Do they provide wall mounting with this TV?",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 55,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "Yes, but not in the TV box. Service engineer will bring when he comes for installation & demo.",
            "likescount": 0,
            "userphoto": null
          }
        ]
      }
    ],
    "specifications": [
      {
        "specificationid": 50,
        "productid": 0,
        "userid": 0,
        "heading": "Screen Size\n",
        "answer": "43 Inches"
      },
      {
        "specificationid": 51,
        "productid": 0,
        "userid": 2,
        "heading": "Brand",
        "answer": "vw"
      },
      {
        "specificationid": 52,
        "productid": 0,
        "userid": 2,
        "heading": "Supported",
        "answer": "Netflix, Prime Video, Zee5, SonyLiv,Youtube, Hotstar"
      },
      {
        "specificationid": 53,
        "productid": 0,
        "userid": 2,
        "heading": "Display Technology",
        "answer": "LED"
      },
      {
        "specificationid": 54,
        "productid": 0,
        "userid": 2,
        "heading": "Product Dimensions",
        "answer": "6D x 96.4W x 55.9H Centimeters"
      },
      {
        "specificationid": 55,
        "productid": 0,
        "userid": 2,
        "heading": "Resolution",
        "answer": "4K"
      },
      {
        "specificationid": 56,
        "productid": 0,
        "userid": 2,
        "heading": "Refresh Rate",
        "answer": "50 Hz\n"
      },
      {
        "specificationid": 57,
        "productid": 0,
        "userid": 2,
        "heading": "Special Feature",
        "answer": "Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc., Screen mirroring, Universal Guide,"
      },
      {
        "specificationid": 58,
        "productid": 0,
        "userid": 2,
        "heading": "Model Name",
        "answer": "UA43CUE60AKLXL\n"
      },
      {
        "specificationid": 59,
        "productid": 0,
        "userid": 2,
        "heading": "Included Components",
        "answer": "1 LED TV, 2 Battery (AAA Size), 1 REMOCON, 1 Stand-Left, 1 Stand-Right"
      },
      {
        "specificationid": 60,
        "productid": 0,
        "userid": 2,
        "heading": "In The Box",
        "answer": "1 TV Unit, Remote, User Manual, AAA Batteries, Base Stand, Stand Screws, 1 Power Cord"
      }
    ],
    "images": [
      {
        "imageid": 31,
        "productid": 0,
        "userid": 0,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/6/g/p/-original-imagvgcjagmhmxfz.jpeg?q=70"
      },
      {
        "imageid": 32,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/c/i/r/-original-imagm2e6nhdhjps8.jpeg?q=70"
      },
      {
        "imageid": 33,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/kx9as280/television/9/m/s/-original-imag9rf7vgtwcxpp.jpeg?q=70"
      },
      {
        "imageid": 34,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/6/g/p/-original-imagvgcjagmhmxfz.jpeg?q=70"
      },
      {
        "imageid": 35,
        "productid": 0,
        "userid": 2,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/4/9/x/kd-65x74k-sony-original-imaghsdyrur6bj9a.jpeg?q=70"
      }
    ]
  },{
    "productid": 1,
    "userid": 1,
    "productname": "Realme Narzo",
    "desciption": "realme narzo 50 5G (Hyper Blue, 4GB RAM+64GB Storage) Dimensity 810 5G Processor | 48MP Ultra HD Camera",
    "oldprice": 60000,
    "newprice": 70000,
    "discount": 10,
    "itemsLeft": 10,
    "store": "Balaji",
    "stringproductid": "1",
    "addtocart": false,
    "ratings": 0,
    "ratingsgiveby": 5,
    "category": "Mobiles",
    "expecteddelivery": "string",
    "specialoffer": "string",
    "specialdesciption": "string",
    "totalorders": 0,
    "brandname": "Realme ",
    "totalansweredquestions": 0,
    "openboxpolicy": true,
    "aboutthisitem": "The innovative features of the POCO X5 5G smartphone mesmerises you with its faultless performance as it delivers top functionality. The POCO X5 5G's Snapdragon 695 5G chipset and octa-core Qualcomm Kryo 660 CPU, which offers a clock speed of up to 2.2 GHz, enable great gaming performance thanks to a built-in 6 nm technology. Moreover, the large 16.94 cm (6.67) FHD+ AMOLED Display can surprise you with its immersive viewing experience. A refresh rate of 120 Hz allows for very smooth navigation. Furthermore, this phone includes a 33 W quick charger in the box to guarantee that you always have enough power for the day and can continue to function normally.\n",
    "addeddate": null,
    "orderedDate": null,
    "offers": [
      {
        "offerid": 1,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
      },
      {
        "offerid": 2,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
      },
      {
        "offerid": 3,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
      }
    ],
    "keyfeatures": [
      {
        "featureId": 1,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "7 days Replacement"
      },
      {
        "featureId": 2,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "7 Days Replacement Policy"
      },
      {
        "featureId": 3,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
        "featurename": "Free Delivery"
      },
      {
        "featureId": 4,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "1 Year Warranty"
      },
      {
        "featureId": 5,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "yrevileD nO yaP"
      }
    ],
    "productreviews": [
      {
        "reviewid": 5,
        "productid": 1,
        "likescount": 0,
        "dislikescount": 0,
        "replycount": 0,
        "date": "2023-11-27T20:46:38.506Z",
        "iscertifiedBuyer": true,
        "overallExperience": "Good Product",
        "review": "Its A good Product By Realme ..must buy it ",
        "userId": 1,
        "username": "Bharat",
        "ratings": 0,
        "replies": []
      },
      {
        "reviewid": 9,
        "productid": 1,
        "likescount": 0,
        "dislikescount": 0,
        "replycount": 0,
        "date": "2023-11-27T21:41:36.823Z",
        "iscertifiedBuyer": true,
        "overallExperience": null,
        "review": null,
        "userId": 1,
        "username": "Bharat",
        "ratings": 5,
        "replies": []
      },
      {
        "reviewid": 10,
        "productid": 1,
        "likescount": 0,
        "dislikescount": 0,
        "replycount": 0,
        "date": "2023-11-27T21:42:24.960Z",
        "iscertifiedBuyer": true,
        "overallExperience": "its Amaing",
        "review": "I Recommend All of you to buy this",
        "userId": 1,
        "username": "Bharat",
        "ratings": 5,
        "replies": []
      },
      {
        "reviewid": 12,
        "productid": 1,
        "likescount": 0,
        "dislikescount": 0,
        "replycount": 0,
        "date": "2023-11-27T21:45:18.227Z",
        "iscertifiedBuyer": true,
        "overallExperience": "Not Good ",
        "review": "",
        "userId": 1,
        "username": "Bharat",
        "ratings": 1,
        "replies": []
      },
      {
        "reviewid": 3,
        "productid": 1,
        "likescount": 0,
        "dislikescount": 0,
        "replycount": 0,
        "date": "2023-11-27T20:40:56.985Z",
        "iscertifiedBuyer": true,
        "overallExperience": "Very Good Product",
        "review": "Thanks Amazon for a wonderful deal on narzo 50 5g 6gb mobile..\nComing to phone, this phone has a hybrid slot.. people pls don't give wrong info about the mobile as people who want dedicated slot will feel decieved. Also Amazon should clearly mention that this phone has a hybrid sim slot (means you can use either two Sims or one sim and a memory card).\nAnother con : fm radio (a basic app) is missing but a lot of other bloatware is present (thankfully can be uninstalled)",
        "userId": 1,
        "username": "Bharat",
        "ratings": 0,
        "replies": []
      },
      {
        "reviewid": 18,
        "productid": 1,
        "likescount": 0,
        "dislikescount": 0,
        "replycount": 0,
        "date": "2023-11-30T14:41:38.701Z",
        "iscertifiedBuyer": true,
        "overallExperience": null,
        "review": null,
        "userId": 1,
        "username": "Bharat",
        "ratings": 0,
        "replies": []
      }
    ],
    "questions": [
      {
        "questionid": 1,
        "productid": 0,
        "question": "Is IR blast is available",
        "username": "Add Question",
        "userId": 0,
        "answers": [
          {
            "answerid": 1,
            "productid": 0,
            "username": "string",
            "userId": 0,
            "answer": "Yes",
            "likescount": 0,
            "userphoto": "string"
          }
        ]
      },
      {
        "questionid": 2,
        "productid": 0,
        "question": "Q:How much time take to full charge from 0 to 100",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 2,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:40 min",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 3,
        "productid": 0,
        "question": "Q:Is it suitable to play Pubg or Call Of Duty in this mobile???",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 3,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 4,
        "productid": 0,
        "question": "Q:Isbitbin display fingerprint",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 4,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:no",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 5,
        "productid": 0,
        "question": "Q:Airtel 5g support",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 5,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 6,
        "productid": 0,
        "question": "Q:Gaming prosess 778 8 gb 256 gb storage",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 6,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:This is x5 not x5 pro",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 7,
        "productid": 0,
        "question": "Q:Is it good for ff gaming",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 7,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:It is good for casual gaming not for hardcore gaming due to its mid level hardware.",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 8,
        "productid": 0,
        "question": "Q:Freefire ma voice changer ha",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 8,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 9,
        "productid": 0,
        "question": "Q:Gaming prosess 778 8 gb 256 gb storage",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 9,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:This is x5 not x5 pro",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 10,
        "productid": 0,
        "question": "Q:Are you really providing chargers plug",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 10,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:No",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 11,
        "productid": 0,
        "question": "Q:I am play free fire in Phone without no hang",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 11,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes you can easily play free fire game no hanging issue in this phone",
            "likescount": 0,
            "userphoto": null
          }
        ]
      }
    ],
    "specifications": [
      {
        "specificationid": 1,
        "productid": 0,
        "userid": 0,
        "heading": "Brand",
        "answer": "realme"
      },
      {
        "specificationid": 2,
        "productid": 0,
        "userid": 1,
        "heading": "Model Name",
        "answer": "realme narzo 50 5G"
      },
      {
        "specificationid": 3,
        "productid": 0,
        "userid": 1,
        "heading": "Network Service\n",
        "answer": "Unlocked for All Carriers\n"
      },
      {
        "specificationid": 4,
        "productid": 0,
        "userid": 1,
        "heading": "Operating System",
        "answer": "Android 12.0\n"
      },
      {
        "specificationid": 5,
        "productid": 0,
        "userid": 1,
        "heading": "Cellular Technology",
        "answer": "Cellular Technology"
      },
      {
        "specificationid": 6,
        "productid": 0,
        "userid": 1,
        "heading": "Colour: ",
        "answer": "Hyper Blue"
      }
    ],
    "images": [
      {
        "imageid": 1,
        "productid": 0,
        "userid": 0,
        "imagename": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/0/n/r/narzo-n53-rmx3761-realme-original-imagpygzxcuysz9k.jpeg?q=70"
      },
      {
        "imageid": 2,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/t/x/narzo-n53-rmx3761-realme-original-imagpygzfd9d4yjv.jpeg?q=70"
      },
      {
        "imageid": 3,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/k/c/narzo-n53-rmx3761-realme-original-imagpygzyhgpqzwg.jpeg?q=70"
      },
      {
        "imageid": 4,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/x/3/7/narzo-n53-rmx3761-realme-original-imagpygzn4r2qbph.jpeg?q=70"
      },
      {
        "imageid": 5,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/2/z/narzo-n53-rmx3761-realme-original-imagpygznvyznc2r.jpeg?q=70"
      }
    ]
  },
  {
    "productid": 3,
    "userid": 1,
    "productname": "Iphone",
    "desciption": "Apple iPhone 14 Plus (128 GB) - Blue",
    "oldprice": 60000,
    "newprice": 70000,
    "discount": 10,
    "itemsLeft": 20,
    "store": "Balaji",
    "stringproductid": "3",
    "addtocart": false,
    "ratings": 0,
    "ratingsgiveby": 0,
    "category": "Mobiles",
    "expecteddelivery": "string",
    "specialoffer": "string",
    "specialdesciption": "string",
    "totalorders": 0,
    "brandname": "Apple",
    "totalansweredquestions": 0,
    "openboxpolicy": true,
    "aboutthisitem": "The innovative features of the POCO X5 5G smartphone mesmerises you with its faultless performance as it delivers top functionality. The POCO X5 5G's Snapdragon 695 5G chipset and octa-core Qualcomm Kryo 660 CPU, which offers a clock speed of up to 2.2 GHz, enable great gaming performance thanks to a built-in 6 nm technology. Moreover, the large 16.94 cm (6.67) FHD+ AMOLED Display can surprise you with its immersive viewing experience. A refresh rate of 120 Hz allows for very smooth navigation. Furthermore, this phone includes a 33 W quick charger in the box to guarantee that you always have enough power for the day and can continue to function normally.\n",
    "addeddate": null,
    "orderedDate": null,
    "offers": [
      {
        "offerid": 7,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
      },
      {
        "offerid": 8,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
      },
      {
        "offerid": 9,
        "productid": 0,
        "offerstartDate": null,
        "offersEndDate": null,
        "name": "Bank Offer",
        "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
      }
    ],
    "keyfeatures": [
      {
        "featureId": 11,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "7 days Replacement"
      },
      {
        "featureId": 12,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        "featurename": "7 Days Replacement Policy"
      },
      {
        "featureId": 13,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
        "featurename": "Free Delivery"
      },
      {
        "featureId": 14,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "1 Year Warranty"
      },
      {
        "featureId": 15,
        "productid": 0,
        "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        "featurename": "yrevileD nO yaP"
      }
    ],
    "productreviews": [],
    "questions": [
      {
        "questionid": 23,
        "productid": 0,
        "question": "Is IR blast is available",
        "username": "Add Question",
        "userId": 0,
        "answers": [
          {
            "answerid": 23,
            "productid": 0,
            "username": "string",
            "userId": 0,
            "answer": "Yes",
            "likescount": 0,
            "userphoto": "string"
          }
        ]
      },
      {
        "questionid": 24,
        "productid": 0,
        "question": "Q:How much time take to full charge from 0 to 100",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 24,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:40 min",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 25,
        "productid": 0,
        "question": "Q:Is it suitable to play Pubg or Call Of Duty in this mobile???",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 25,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 26,
        "productid": 0,
        "question": "Q:Isbitbin display fingerprint",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 26,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:no",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 27,
        "productid": 0,
        "question": "Q:Airtel 5g support",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 27,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 28,
        "productid": 0,
        "question": "Q:Gaming prosess 778 8 gb 256 gb storage",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 28,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:This is x5 not x5 pro",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 29,
        "productid": 0,
        "question": "Q:Is it good for ff gaming",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 29,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:It is good for casual gaming not for hardcore gaming due to its mid level hardware.",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 30,
        "productid": 0,
        "question": "Q:Freefire ma voice changer ha",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 30,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 31,
        "productid": 0,
        "question": "Q:Gaming prosess 778 8 gb 256 gb storage",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 31,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:This is x5 not x5 pro",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 32,
        "productid": 0,
        "question": "Q:Are you really providing chargers plug",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 32,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:No",
            "likescount": 0,
            "userphoto": null
          }
        ]
      },
      {
        "questionid": 33,
        "productid": 0,
        "question": "Q:I am play free fire in Phone without no hang",
        "username": null,
        "userId": 0,
        "answers": [
          {
            "answerid": 33,
            "productid": 0,
            "username": null,
            "userId": 0,
            "answer": "A:Yes you can easily play free fire game no hanging issue in this phone",
            "likescount": 0,
            "userphoto": null
          }
        ]
      }
    ],
    "specifications": [
      {
        "specificationid": 13,
        "productid": 0,
        "userid": 0,
        "heading": "Brand",
        "answer": "realme"
      },
      {
        "specificationid": 14,
        "productid": 0,
        "userid": 1,
        "heading": "Model Name",
        "answer": "realme narzo 50 5G"
      },
      {
        "specificationid": 15,
        "productid": 0,
        "userid": 1,
        "heading": "Network Service\n",
        "answer": "Unlocked for All Carriers\n"
      },
      {
        "specificationid": 16,
        "productid": 0,
        "userid": 1,
        "heading": "Operating System",
        "answer": "Android 12.0\n"
      },
      {
        "specificationid": 17,
        "productid": 0,
        "userid": 1,
        "heading": "Cellular Technology",
        "answer": "Cellular Technology"
      },
      {
        "specificationid": 18,
        "productid": 0,
        "userid": 1,
        "heading": "Colour: ",
        "answer": "Hyper Blue"
      }
    ],
    "images": [
      {
        "imageid": 11,
        "productid": 0,
        "userid": 0,
        "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=7"
      },
      {
        "imageid": 13,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/i/7/-original-imaguypzzhbzm5an.jpeg?q=70"
      },
      {
        "imageid": 14,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/1/d/y/-original-imaghxcpvtta2hzs.jpeg?q=70"
      },
      {
        "imageid": 15,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/t/g/-original-imaghxcp4ctcfwff.jpeg?q=70"
      },
      {
        "imageid": 12,
        "productid": 0,
        "userid": 1,
        "imagename": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/t/g/-original-imaghxcp4ctcfwff.jpeg?q=70"
      }
    ]
  }];
  brandNames: any = [];
  buyItem: any = {};
  getSearchedProducts: number = 0;
  pageNumber: number = 0;
  ApiCalling: boolean = false;
  constructor() { }
 
  //            home        //
  getAllProductsHome(req: any): Observable<any[]> {
    const products = [
      {
        "productId": 2,
        "userId": 1,
        "firstName": "Bharat",
        "productName": "Mobiles",
        "headline": null,
        "description": "Upto 75 % Off and more  On Mobiles ",
        "timingLeft": "string",
        "subProducts": [
          {
            "subproductId": 3,
            "productid": 0,
            "userid": 0,
            "productdescription": "25 % off on Realme ",
            "productname": null,
            "oldprice": 0,
            "newprice": 0,
            "imagename": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/0/n/r/narzo-n53-rmx3761-realme-original-imagpygzxcuysz9k.jpeg?q=70"
          },
          {
            "subproductId": 4,
            "productid": 0,
            "userid": 0,
            "productdescription": "Best Sellers from Apple",
            "productname": null,
            "oldprice": 0,
            "newprice": 0,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=7"
          }
        ]
      },
      {
        "productId": 3,
        "userId": 1,
        "firstName": "Bharat",
        "productName": "tv",
        "headline": null,
        "description": "Upto 50% off On Televisions",
        "timingLeft": "string",
        "subProducts": [
          {
            "subproductId": 5,
            "productid": 0,
            "userid": 0,
            "productdescription": "upto 40% off on Samsung",
            "productname": null,
            "oldprice": 0,
            "newprice": 0,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/x/c/a/-original-imagtkmpfat5qcrz.jpeg?q=70"
          },
          {
            "subproductId": 6,
            "productid": 0,
            "userid": 0,
            "productdescription": " 50% off on Motorola",
            "productname": null,
            "oldprice": 0,
            "newprice": 0,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/x/c/a/-original-imagtkmpfat5qcrz.jpeg?q=70"
          }
        ]
      }
    ]
    return of(products);
  }

  getSearchedProduct(req: any): Observable<any[]> {
    this.ApiCalling = true;
    this.searchedResults=[];
    for(let i=0;i<this.searchedResultsNew.length;i++){
      if(this.searchedResultsNew[i].category==req.category){
        this.searchedResults.push(this.searchedResultsNew[i])
      }
    }
    return of(this.searchedResults);
  }
  //            sell products        //
  getProductsListByuserId(req: any): Observable<any[]> {
   
   return of (this.searchedResultsNew)
  }

  //           productpage           //
  filterProjectsearches(req: any): Observable<any[]>{
     this.searchedResults=[];
    for(let i=0;i<this.searchedResultsNew.length;i++){
      if(req.brand==this.searchedResultsNew[i].brandname){
        this.searchedResults.push(this.searchedResultsNew[i])
      }
    }
    return of ( this.searchedResults);
  }
   //                  carts                   //
   CartsCounts(req: any): Observable<any[]> {
    this.cartsCount = [
      {
        "cartsId": 1,
        "productid": 1,
        "userid": 1,
        "productname": "Realme Narzo",
        "addedCartsDate": "2023-11-27",
        "cartsNotifications": null
      },
      {
        "cartsId": 2,
        "productid": 3,
        "userid": 1,
        "productname": "Iphone",
        "addedCartsDate": "2023-11-27",
        "cartsNotifications": null
      },
      {
        "cartsId": 3,
        "productid": 2,
        "userid": 1,
        "productname": "Nokia",
        "addedCartsDate": "2023-11-29",
        "cartsNotifications": null
      },
      {
        "cartsId": 4,
        "productid": 6,
        "userid": 1,
        "productname": "MOTOROLA",
        "addedCartsDate": "2023-12-02",
        "cartsNotifications": null
      },
      {
        "cartsId": 5,
        "productid": 7,
        "userid": 1,
        "productname": "MOTOROLA",
        "addedCartsDate": "2023-12-03",
        "cartsNotifications": null
      },
      {
        "cartsId": 8,
        "productid": 4,
        "userid": 1,
        "productname": "Samsung",
        "addedCartsDate": "2023-12-09",
        "cartsNotifications": null
      }
    ]
    return of(this.cartsCount);

  }
  GetCartsDetailsPage(req: any): Observable<any[]> {
    const results=[];
   for(let i=0;i<this.searchedResultsNew.length;i++){
    if(req.productname==this.searchedResultsNew[i].productname){
      results.push(this.searchedResultsNew[i])
    }
   }
   return of(results);
  }
  //                  orders                                     //
  BuyedProductStatus(req: any) : Observable<any[]>{
   const a=[
    {
        "statusid": 1,
        "userid": 1,
        "productid": 1,
        "productname": "Realme Narzo",
        "ordereddate": "",
        "orderaccepteddate": "",
        "deliveredaddress": "",
        "acceptername": "",
        "delivereddate": "",
        "deliverypersonname": "",
        "orderrecievedby": "",
        "shippeddate": "",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": ""
    },
    {
        "statusid": 2,
        "userid": 1,
        "productid": 2,
        "productname": "Nokia",
        "ordereddate": "",
        "orderaccepteddate": "",
        "deliveredaddress": "",
        "acceptername": "",
        "delivereddate": "",
        "deliverypersonname": "",
        "orderrecievedby": "",
        "shippeddate": "",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": ""
    },
    {
        "statusid": 3,
        "userid": 1,
        "productid": 1,
        "productname": "Realme Narzo",
        "ordereddate": "",
        "orderaccepteddate": "",
        "deliveredaddress": "",
        "acceptername": "",
        "delivereddate": "",
        "deliverypersonname": "",
        "orderrecievedby": "",
        "shippeddate": "",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": ""
    },
    {
        "statusid": 4,
        "userid": 1,
        "productid": 1,
        "productname": "Realme Narzo",
        "ordereddate": "",
        "orderaccepteddate": "",
        "deliveredaddress": "",
        "acceptername": "",
        "delivereddate": "",
        "deliverypersonname": "",
        "orderrecievedby": "",
        "shippeddate": "",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": ""
    },
    {
        "statusid": 6,
        "userid": 1,
        "productid": 1,
        "productname": "Realme Narzo",
        "ordereddate": "",
        "orderaccepteddate": "",
        "deliveredaddress": "",
        "acceptername": "",
        "delivereddate": "",
        "deliverypersonname": "",
        "orderrecievedby": "",
        "shippeddate": "",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": ""
    },
    {
        "statusid": 7,
        "userid": 1,
        "productid": 4,
        "productname": "Samsung",
        "ordereddate": "2023-12-09T18:10:23.057Z",
        "orderaccepteddate": "2023-12-09T18:10:23.057Z",
        "deliveredaddress": "Pune Maharashtra",
        "acceptername": "",
        "delivereddate": "2023-12-09T18:10:23.057Z",
        "deliverypersonname": "Prakash",
        "orderrecievedby": "Bharat",
        "shippeddate": "2023-12-09T18:10:23.057Z",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": "2023-12-09T18:10:23.057Z"
    },
    {
        "statusid": 8,
        "userid": 1,
        "productid": 1,
        "productname": "Realme Narzo",
        "ordereddate": "2023-12-09T18:10:57.237Z",
        "orderaccepteddate": "2023-12-09T18:10:57.237Z",
        "deliveredaddress": "Pune Maharashtra",
        "acceptername": "",
        "delivereddate": "2023-12-09T18:10:57.237Z",
        "deliverypersonname": "Prakash",
        "orderrecievedby": "Bharat",
        "shippeddate": "2023-12-09T18:10:57.237Z",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": "2023-12-09T18:10:57.237Z"
    },
    {
        "statusid": 10,
        "userid": 1,
        "productid": 0,
        "productname": null,
        "ordereddate": "2023-12-10T10:51:08.979Z",
        "orderaccepteddate": "2023-12-10T10:51:08.979Z",
        "deliveredaddress": "Pune Maharashtra",
        "acceptername": "",
        "delivereddate": "2023-12-10T10:51:08.979Z",
        "deliverypersonname": "Prakash",
        "orderrecievedby": "Bharat",
        "shippeddate": "2023-12-10T10:51:08.979Z",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": "2023-12-10T10:51:08.979Z"
    },
    {
        "statusid": 11,
        "userid": 1,
        "productid": 0,
        "productname": null,
        "ordereddate": "2023-12-10T10:51:13.007Z",
        "orderaccepteddate": "2023-12-10T10:51:13.007Z",
        "deliveredaddress": "Pune Maharashtra",
        "acceptername": "",
        "delivereddate": "2023-12-10T10:51:13.007Z",
        "deliverypersonname": "Prakash",
        "orderrecievedby": "Bharat",
        "shippeddate": "2023-12-10T10:51:13.007Z",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": "2023-12-10T10:51:13.007Z"
    },
    {
        "statusid": 12,
        "userid": 1,
        "productid": 0,
        "productname": null,
        "ordereddate": "2023-12-10T10:51:16.069Z",
        "orderaccepteddate": "2023-12-10T10:51:16.069Z",
        "deliveredaddress": "Pune Maharashtra",
        "acceptername": "",
        "delivereddate": "2023-12-10T10:51:16.069Z",
        "deliverypersonname": "Prakash",
        "orderrecievedby": "Bharat",
        "shippeddate": "2023-12-10T10:51:16.069Z",
        "shippingpartner": "",
        "shippercomments": "",
        "ownercomments": "",
        "expecteddeliverydate": "2023-12-10T10:51:16.069Z"
    }
]
return of (a);
  }
  GetAllBuyedProducts(req: any) : Observable<any[]>{
    const buyedproducts=[
      {
          "buyproductid": 1,
          "userid": 1,
          "productid": 1,
          "productname": "Realme Narzo",
          "ordereddate": "2023-11-27"
      },
      {
          "buyproductid": 2,
          "userid": 1,
          "productid": 2,
          "productname": "Nokia",
          "ordereddate": "2023-11-27"
      },
      {
          "buyproductid": 3,
          "userid": 1,
          "productid": 1,
          "productname": "Realme Narzo",
          "ordereddate": "2023-12-02"
      },
      {
          "buyproductid": 4,
          "userid": 1,
          "productid": 1,
          "productname": "Realme Narzo",
          "ordereddate": "2023-12-03"
      },
      {
          "buyproductid": 6,
          "userid": 1,
          "productid": 1,
          "productname": "Realme Narzo",
          "ordereddate": "2023-12-09"
      },
      {
          "buyproductid": 7,
          "userid": 1,
          "productid": 4,
          "productname": "Samsung",
          "ordereddate": "2023-12-09"
      },
      {
          "buyproductid": 8,
          "userid": 1,
          "productid": 1,
          "productname": "Realme Narzo",
          "ordereddate": "2023-12-09"
      },
      {
          "buyproductid": 10,
          "userid": 1,
          "productid": 0,
          "productname": null,
          "ordereddate": "2023-12-10"
      },
      {
          "buyproductid": 11,
          "userid": 1,
          "productid": 0,
          "productname": null,
          "ordereddate": "2023-12-10"
      },
      {
          "buyproductid": 12,
          "userid": 1,
          "productid": 0,
          "productname": null,
          "ordereddate": "2023-12-10"
      }
  ]
  return of (buyedproducts)
  }
}
