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

* POST /randomItem ( 랜덤 아이템 2개 )

> Response

    200 : [
        {
            "_id": "5d935f86063dd1243df31f47",
            "itemName": "돌의자",
            "itemData": "돌로 만든 의자다. 앉기 아플 거 같다.",
            "itemPic": "default",
            "__v": 0
        },
        {
            "_id": "5d93660b32c4922486445e89",
            "itemName": "",
            "itemData": "무한으로 즐겨요 명륜진사갈",
            "itemPic": "default",
            "__v": 0
        }
    ]

* POST /allItem ( 전체 아이템 )

> Response

    200 : [{
        "_id": "5d9357187148a702747c9066",
        "itemName": "의자의자",
        "itemData": "만들의자",
        "itemPic": "default",
        "__v": 0
    }]

* POST /addIn ( 인테리어 추가 )

> Parmas

    intName : String,

    intSub : String

> Response

    200 : {
        "_id": "5d945ca438521125e0189f5e",
        "intName": "명륜진사갈비",
        "intSub": "명륜진사갈비 인테리어",
        "__v": 0
    }

    500 : { message : "ERR!" }


* POST /randomIn ( 랜덤 인테리어 2개 )

> Response

    200 : [
        {
            "_id": "5d945e8e38521125e0189f60",
            "intName": "엔젤리너스 커피콩",
            "intSub": "커피콩 사진이 많음.",
            "__v": 0
        },
        {
            "_id": "5d945ca438521125e0189f5e",
            "intName": "명륜진사갈비",
            "intSub": "명륜진사갈비 인테리어",
            "__v": 0
        }
    ]

* POST /allIn ( 전체 인테리어 )

> Response

    200 : [
        {
            "_id": "5d945ca438521125e0189f5e",
            "intName": "명륜진사갈비",
            "intSub": "명륜진사갈비 인테리어",
            "__v": 0
        },
        {
            "_id": "5d945e8e38521125e0189f60",
            "intName": "엔젤리너스 커피콩",
            "intSub": "커피콩 사진이 많음.",
            "__v": 0
        },
        {
            "_id": "5d945eb438521125e0189f61",
            "intName": "김치 피자 탕수육",
            "intSub": "김피탕  김피탕 신나는노래",
            "__v": 0
        }
    ]