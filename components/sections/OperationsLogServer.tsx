import React from 'react';
import { clients, ClientProject } from '@/lib/clients';
import { OperationsLog } from './OperationsLog';

async function getNetlifySites() {
  const token = process.env.NETLIFY_TOKEN;
  if (!token) return null;

  try {
    const response = await fetch('https://api.netlify.com/api/v1/sites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    // Silent graceful fallback in production
    return null;
  }
}

export async function OperationsLogServer() {
  const sites = await getNetlifySites();
  
  const enrichedClients: ClientProject[] = clients.map(client => {
    if (!sites) return client;

    // Match site by custom_domain or netlify URL
    const clientUrlObj = new URL(client.url);
    const clientHostname = clientUrlObj.hostname;

    const site = sites.find((s: any) => {
      // Match custom domain (e.g., 'fancyfam.com')
      if (s.custom_domain === clientHostname) return true;
      
      // Match netlify subdomain (e.g., 'a1awatercraftrepairs.netlify.app')
      const siteUrlObj = new URL(s.url);
      if (siteUrlObj.hostname === clientHostname) return true;

      return false;
    });

    if (site && site.published_deploy && site.published_deploy.created_at) {
      return {
        ...client,
        lastDeployed: site.published_deploy.created_at
      };
    }

    return client;
  });

  return <OperationsLog clients={enrichedClients} />;
}
