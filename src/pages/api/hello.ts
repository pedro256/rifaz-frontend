import { GetApiClient } from '@/services/api/api.service'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await GetApiClient(req).get("user")
  res.status(200).json({ name: 'John Doe' })
}
