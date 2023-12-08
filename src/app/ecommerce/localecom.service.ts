import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalecomService {
  addProductS(req: any): Observable<any[]> {
    throw new Error('Method not implemented.');
  }
  cartsCount: any = [];
  ecomLoader: boolean = false;
  constructor() { }
  CartsCounts(req: any): Observable<any[]> {
    this.cartsCount = [{ "cartsId": 1, "productid": 1,
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
    }
    ]
    return of(this.cartsCount);

  }
  getProductsListByuserId(req: any): Observable<any[]> {
    let a = [
      {
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
            "heading": "Colour: ",
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
            "heading": "Colour: ",
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
      },
      {
        "productid": 2,
        "userid": 1,
        "productname": "Nokia",
        "desciption": "Nokia G42 5G | Snapdragon® 480+ 5G | 50MP Triple AI Camera | 11GB RAM (6GB RAM + 5GB Virtual RAM) | 128GB Storage | 5000mAh Battery | 2 Years Android Upgrades | 20W Charger Included | So Grey",
        "oldprice": 60000,
        "newprice": 70000,
        "discount": 10,
        "itemsLeft": 0,
        "store": "Balaji",
        "stringproductid": "2",
        "addtocart": false,
        "ratings": 0,
        "ratingsgiveby": 2,
        "category": "Mobiles",
        "expecteddelivery": "string",
        "specialoffer": "string",
        "specialdesciption": "string",
        "totalorders": 0,
        "brandname": "Nokia",
        "totalansweredquestions": 0,
        "openboxpolicy": true,
        "aboutthisitem": "The innovative features of the POCO X5 5G smartphone mesmerises you with its faultless performance as it delivers top functionality. The POCO X5 5G's Snapdragon 695 5G chipset and octa-core Qualcomm Kryo 660 CPU, which offers a clock speed of up to 2.2 GHz, enable great gaming performance thanks to a built-in 6 nm technology. Moreover, the large 16.94 cm (6.67) FHD+ AMOLED Display can surprise you with its immersive viewing experience. A refresh rate of 120 Hz allows for very smooth navigation. Furthermore, this phone includes a 33 W quick charger in the box to guarantee that you always have enough power for the day and can continue to function normally.\n",
        "addeddate": null,
        "orderedDate": null,
        "offers": [
          {
            "offerid": 4,
            "productid": 0,
            "offerstartDate": null,
            "offersEndDate": null,
            "name": "Bank Offer",
            "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
          },
          {
            "offerid": 5,
            "productid": 0,
            "offerstartDate": null,
            "offersEndDate": null,
            "name": "Bank Offer",
            "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
          },
          {
            "offerid": 6,
            "productid": 0,
            "offerstartDate": null,
            "offersEndDate": null,
            "name": "Bank Offer",
            "description": "Flat INR 250 Instant Discount on HDFC Bank Card Credit EMI Txn. Minimum purchase value INR 10000"
          }
        ],
        "keyfeatures": [
          {
            "featureId": 6,
            "productid": 0,
            "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
            "featurename": "7 days Replacement"
          },
          {
            "featureId": 7,
            "productid": 0,
            "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
            "featurename": "7 Days Replacement Policy"
          },
          {
            "featureId": 8,
            "productid": 0,
            "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
            "featurename": "Free Delivery"
          },
          {
            "featureId": 9,
            "productid": 0,
            "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
            "featurename": "1 Year Warranty"
          },
          {
            "featureId": 10,
            "productid": 0,
            "imagename": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
            "featurename": "yrevileD nO yaP"
          }
        ],
        "productreviews": [
          {
            "reviewid": 14,
            "productid": 2,
            "likescount": 0,
            "dislikescount": 0,
            "replycount": 0,
            "date": "2023-11-27T21:50:30.607Z",
            "iscertifiedBuyer": true,
            "overallExperience": "Good Product",
            "review": "its a good product",
            "userId": 1,
            "username": "Bharat",
            "ratings": 5,
            "replies": []
          },
          {
            "reviewid": 16,
            "productid": 2,
            "likescount": 0,
            "dislikescount": 0,
            "replycount": 0,
            "date": "2023-11-29T17:54:00.238Z",
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
            "questionid": 12,
            "productid": 0,
            "question": "Is IR blast is available",
            "username": "Add Question",
            "userId": 0,
            "answers": [
              {
                "answerid": 12,
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
            "questionid": 13,
            "productid": 0,
            "question": "Q:How much time take to full charge from 0 to 100",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 13,
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
            "questionid": 14,
            "productid": 0,
            "question": "Q:Is it suitable to play Pubg or Call Of Duty in this mobile???",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 14,
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
            "questionid": 15,
            "productid": 0,
            "question": "Q:Isbitbin display fingerprint",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 15,
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
            "questionid": 16,
            "productid": 0,
            "question": "Q:Airtel 5g support",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 16,
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
            "questionid": 17,
            "productid": 0,
            "question": "Q:Gaming prosess 778 8 gb 256 gb storage",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 17,
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
            "questionid": 18,
            "productid": 0,
            "question": "Q:Is it good for ff gaming",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 18,
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
            "questionid": 19,
            "productid": 0,
            "question": "Q:Freefire ma voice changer ha",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 19,
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
            "questionid": 20,
            "productid": 0,
            "question": "Q:Gaming prosess 778 8 gb 256 gb storage",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 20,
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
            "questionid": 21,
            "productid": 0,
            "question": "Q:Are you really providing chargers plug",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 21,
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
            "questionid": 22,
            "productid": 0,
            "question": "Q:I am play free fire in Phone without no hang",
            "username": null,
            "userId": 0,
            "answers": [
              {
                "answerid": 22,
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
            "specificationid": 7,
            "productid": 0,
            "userid": 0,
            "heading": "Brand",
            "answer": "realme"
          },
          {
            "specificationid": 8,
            "productid": 0,
            "userid": 1,
            "heading": "Model Name",
            "answer": "realme narzo 50 5G"
          },
          {
            "specificationid": 9,
            "productid": 0,
            "userid": 1,
            "heading": "Network Service\n",
            "answer": "Unlocked for All Carriers\n"
          },
          {
            "specificationid": 10,
            "productid": 0,
            "userid": 1,
            "heading": "Operating System",
            "answer": "Android 12.0\n"
          },
          {
            "specificationid": 11,
            "productid": 0,
            "userid": 1,
            "heading": "Cellular Technology",
            "answer": "Cellular Technology"
          },
          {
            "specificationid": 12,
            "productid": 0,
            "userid": 1,
            "heading": "Colour: ",
            "answer": "Hyper Blue"
          }
        ],
        "images": [
          {
            "imageid": 6,
            "productid": 0,
            "userid": 0,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/h/p/g42-5g-ta-1586-nokia-original-imagunrnzqwb7fdf.jpeg?q=70"
          },
          {
            "imageid": 7,
            "productid": 0,
            "userid": 1,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/c/k/-original-imagqxttvxphz7ks.jpeg?q=70"
          },
          {
            "imageid": 8,
            "productid": 0,
            "userid": 1,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/p/-original-imagqxtthzzks6yu.jpeg?q=70"
          },
          {
            "imageid": 9,
            "productid": 0,
            "userid": 1,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/p/-original-imagqxtthzzks6yu.jpeg?q=70"
          },
          {
            "imageid": 10,
            "productid": 0,
            "userid": 1,
            "imagename": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/p/-original-imagqxtthzzks6yu.jpeg?q=70"
          }
        ]
      }
    ]
    return of(a);
  }
}
