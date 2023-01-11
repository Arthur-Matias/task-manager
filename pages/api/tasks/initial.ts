// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'
import Task from '../../../utils/models/Task';
import { taskProps } from '../../../utils/types/task';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task | undefined>
) {
    let data;
    if(req.method === "GET"){
        data = db.getInitialData();
        console.log("---------------------------------")
        console.log(data)
        console.log("---------------------------------")
        res.status(200).json(data);
    }else{
        res.status(404).json(data)
    }
}