import { Response, Request, NextFunction } from 'express'

import { Users } from '../../DB'

const auth = {
    signin: async (req: Request, res: Response, next: NextFunction) => {
        let result = await Users.findOne({ id : req.body.id, passwd: req.body.passwd})
        if(!result) return res.status(404).json({message : "not found!"})
        return res.status(200).json(result)
    },
    signup: async (req: Request, res: Response, next: NextFunction) => {
        let new_user = new Users({ 
            id: req.body.id,
            passwd: req.body.passwd,
            name: req.body.name,
            phoneNum: req.body.phoneNum
        })
        try {
            let result = await new_user.save()
            res.status(200).json(new_user)
        } catch ( e ) { 
            console.log(e)
            return res.stauts(500).json({message : "ERR!"})
        }
    }
}

export { auth }