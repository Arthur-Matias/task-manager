// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>
) {
    if(req.method === "GET"){
        let data = db.getInitialData();
        res.status(200).json(data);
    }else{
        res.status(404)
    }
}