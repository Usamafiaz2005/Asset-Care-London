/**
 * Vercel / Netlify Serverless Function Endpoint
 * Securely receives frontend lead payloads and proxies to client CRM APIs (HubSpot, ServiceM8, Jobber)
 * using server-side environment secrets (process.env.CRM_API_KEY).
 */

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const leadPayload = req.body;

    // Validate payload presence
    if (!leadPayload || !leadPayload.leadReference) {
      return res.status(400).json({ error: 'Invalid lead payload' });
    }

    const crmApiKey = process.env.CRM_API_KEY;
    const webhookUrl = process.env.CRM_WEBHOOK_URL;

    // 1. If CRM Webhook URL is configured in environment
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(crmApiKey ? { 'Authorization': `Bearer ${crmApiKey}` } : {})
        },
        body: JSON.stringify(leadPayload)
      });
    }

    // 2. Respond to frontend cleanly with 200 OK
    return res.status(200).json({
      success: true,
      message: 'Lead pushed to CRM pipeline successfully',
      leadId: leadPayload.leadReference,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Serverless CRM Proxy Handler Error:', error);
    return res.status(500).json({
      error: 'Failed to process lead CRM integration',
      details: error.message
    });
  }
}
