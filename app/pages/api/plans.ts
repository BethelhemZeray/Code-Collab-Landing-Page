import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    free: {
      title: "Free Plan",
      description: "Basic features for individual users.",
      features: [
        "Unlimited public projects",
        "Basic collaboration tools",
        "Community support"
      ]
    },
    premium: {
      title: "Premium Plan",
      description: "Advanced features for teams and businesses.",
      features: [
        "Unlimited private projects",
        "Priority customer support",
        "Advanced analytics",
        "Custom branding"
      ]
    }
  });
}
