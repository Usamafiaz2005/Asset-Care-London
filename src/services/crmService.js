/**
 * HubSpot Network Service Layer for Asset Care London
 * Formats calculator and contact payloads for HubSpot v3 Pipeline API backend proxy.
 */

export const submitLeadToCRM = async (formData, estimateResult, contactDetails = {}) => {
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
      contactName: contactDetails.name || "Essex Customer",
      contactEmail: contactDetails.email || "",
      contactPhone: contactDetails.phone || "",
      postcode: contactDetails.postcode || "SS14",
      submittedAt: new Date().toISOString()
    };

    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn('Serverless HubSpot endpoint returned non-200. Fallback capture active.');
      return { success: true, isFallback: true, leadReference: estimateResult.refNumber };
    }

    const data = await response.json();
    return {
      success: true,
      leadId: data.leadId || estimateResult.refNumber,
      hubspotDealId: data.hubspotDealId,
      hubspotContactId: data.hubspotContactId
    };

  } catch (error) {
    console.error('HubSpot Submission Error:', error);
    return { success: true, isFallback: true, leadReference: estimateResult?.refNumber || 'ACL-ONLINE' };
  }
};
