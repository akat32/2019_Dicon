# API docs

## 2019 Dicon

* POST /signup ( 회원가입 )

> Params

    id : String
    
    passwd : String

    name : String

    phoneNum : String

> Response

    200 : {
        "_id": "5d9355dd22c73537d8f212c8",
        "id": "aaasss",
        "passwd": "aassaass",
        "name": "asdasd",
        "phoneNum": "01000000000",
        "__v": 0
    }

    500 : { message : "ERR!" }

    
* POST /signin ( 로그인 )

> Params

    id : String
    
    passwd : String

> Response

    200 : {
        "_id": "5d9355dd22c73537d8f212c8",
        "id": "aaasss",
        "passwd": "aassaass",
        "name": "asdasd",
        "phoneNum": "01000000000",
        "__v": 0
    }

    404 : { message : "not found!" }


* POST /addItem ( 아이템 추가 )

> Params

    itemName : String

    itemData : String

> Response 

    200 : {
        "_id": "5d9357187148a702747c9066",
        "itemName": "의자의자",
        "itemData": "만들의자",
        "itemPic": "default",
        "__v": 0
    }

    500 : { message : "ERR!" }
    
* POST /searchItem ( 아이템 검색 )

> Params

    itemName : String

> Response 

    200 : {
        "_id": "5d9357187148a702747c9066",
        "itemName": "의자의자",
        "itemData": "만들의자",
        "itemPic": "default",
        "__v": 0
    }

    404 : { message : "not found!" }

* POST /allItem ( 전체 아이템 )

> Response

    200 : [{
        "_id": "5d9357187148a702747c9066",
        "itemName": "의자의자",
        "itemData": "만들의자",
        "itemPic": "default",
        "__v": 0
    }]
