import { Router, Request, Response } from 'express';
import { validationDomainScheme } from '../middlewares/domain';
import { createDomain, getDomain } from '../controllers/domain';

const router = Router();

router.get('/search/:domain', async (req: Request, res: Response) => {
  const { domain } = req.params;
  const foundDomain = await getDomain(domain);
  if(!foundDomain) {
    res.status(404).json({ error: 'Domain not found' });
    return;
  }
  res.status(200).json(foundDomain);
});

router.post('/', validationDomainScheme, async (req: Request, res: Response) => {
  try {
    const { domain } = req.body;
    const newDomain = await createDomain(domain);
    res.status(200).json(newDomain);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
});

export { router as DomainRouter }