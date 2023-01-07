// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import db from '../../../utils/db'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>
) {
  if(req.method === "GET"){
    let data = db.getData();

    res.status(200).json(data);
  }else{
    res.status(404)
  }
}