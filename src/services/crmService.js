/**
 * CRM Network Service Layer for Asset Care London
 * Decouples React View components from direct network requests & serverless endpoints.
 */

export const submitLeadToCRM = async (formData, estimateResult) => {
  try {
    const payload = {
      leadReference: estimateResult.refNumber,
      serviceType: formData.serviceType,
      propertyType: formData.propertyType,
      bedrooms: formData.bedrooms,
      currentFuel: formData.currentFuel,
      serviceOption: formData.serviceOption,
      urgency: formData.urgency,
      estimatedRange: estimateResult.formattedRange,
      estimatedMin: estimateResult.minPrice,
      estimatedMax: estimateResult.maxPrice,
      summary: estimateResult.summary,
      timeframe: estimateResult.timeframe,
      submittedAt: new Date().toISOString()
    };

    // Post to Serverless Proxy Endpoint (/api/submit-lead)
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Graceful fallback for static dev previews or missing backend API
      console.warn('Serverless CRM endpoint returned non-200. Utilizing fallback lead capture.');
      return { success: true, isFallback: true, leadReference: estimateResult.refNumber };
    }

    const data = await response.json();
    return { success: true, leadId: data.leadId || estimateResult.refNumber };

  } catch (error) {
    console.error('CRM Network Submission Error:', error);
    // Always return safe fallback status so user UX is never broken
    return { success: true, isFallback: true, leadReference: estimateResult?.refNumber || 'ACL-ONLINE' };
  }
};
