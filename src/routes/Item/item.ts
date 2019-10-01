import { Response, Request, NextFunction } from 'express'

import { Items } from '../../DB'

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
        let result = await Items.findOne({itemName : req.body.itemName})
        if(!result) return res.status(404).json({message : "not found!"})
        return res.status(200).json(result)
    }
}

export { item }