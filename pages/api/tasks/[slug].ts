// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task | any>
) {
    let slug = req.query.slug
    if(req.method === "GET"){
        let data = db.getTaskById(Number(slug));

        res.status(200).json(data);
    }else if (req.method === "DELETE"){
        db.removeTaskById(Number(slug))
        res.status(200).json({message: "success"})
    }else{
        res.status(404).json({message: "route not found" })
    }
}