import { Response, Request, NextFunction } from 'express'

import { Items, In } from '../../DB'

const item  = {
    add: async (req: Request, res: Response, next: NextFunction) => {
        let new_item = new Items({
            itemName: req.body.itemName,
            itemData: req.body.itemData,
            itemPic: "default"
        })
        try { 
            let result = await new_item.save()
            return res.status(200).json(new_item)
        } catch( e ) {
            console.log(e)
            return res.status(500).json({message : "ERR!"})
        }
    }, 
    search: async (req: Request, res: Response, next: NextFunction) => {
        let result = await Items.findOne({itemName : {$regex: req.body.itemName}})
        if(!result) return res.status(404).json({message : "not found!"})
        return res.status(200).json(result)
    },
    all: async (req:Request, res: Response, next: NextFunction ) => {
        let result = await Items.find()
        return res.status(200).json(result)
    },
    addIn: async (req: Request, res: Response, next: NextFunction) => {
        let new_item = new In({
            intName: req.body.intName,
            intSub: req.body.intSub
        })
        try { 
            let result = await new_item.save()
            return res.status(200).json(new_item)
        } catch( e ) {
            console.log(e)
            return res.status(500).json({message : "ERR!"})
        }
    },
    allIn: async (req:Request, res: Response, next: NextFunction ) => {
        let result = await In.find()
        return res.status(200).json(result)
    },
    randomItem: async (req: Request, res: Response, next: NextFunction) => {
        // let size = await Items.find().count()
        // let random = Math.floor(Math.random() * size) + 0
        let result = await Items.aggregate(
            [ { $sample: { size: 2 } } ]
        )
        return res.status(200).json(result)
    },
    randomIn: async (req: Request, res: Response, next: NextFunction) => {
        // let size = await Items.find().count()
        // let random = Math.floor(Math.random() * size) + 0
        let result = await In.aggregate(
            [ { $sample: { size: 2 } } ]
        )
        return res.status(200).json(result)
    }
}

export { item }