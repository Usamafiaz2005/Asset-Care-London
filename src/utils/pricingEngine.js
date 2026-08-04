/**
 * Pure Utility Pricing Engine for Asset Care London Quote Calculator
 * Decouples calculation business rules and magic numbers from the React View layer.
 */

export function calculateEstimate(formData) {
  const { serviceType, propertyType, bedrooms, currentFuel, urgency } = formData;

  let min = 0;
  let max = 0;
  let summary = "";
  let timeframe = "Standard Dispatch (1-3 Days)";

  // Branching Pricing Calculation Engine based on serviceType
  switch (serviceType) {
    case 'boiler-installation': {
      let baseMin = 1650;
      let baseMax = 2200;

      if (propertyType === 'detached' || propertyType === 'commercial') {
        baseMin += 450;
        baseMax += 650;
      } else if (propertyType === 'semi') {
        baseMin += 250;
        baseMax += 350;
      }

      if (bedrooms === '4+' || bedrooms === '5+') {
        baseMin += 350;
        baseMax += 500;
      }

      if (currentFuel === 'lpg' || currentFuel === 'oil') {
        baseMin += 300;
        baseMax += 450;
      }

      min = baseMin;
      max = baseMax;
      summary = `A-rated Combi/System Boiler Replacement for ${bedrooms} Bed ${propertyType}`;
      break;
    }

    case 'water-heating-heat-pumps': {
      let baseMin = 1250;
      let baseMax = 2800;

      if (propertyType === 'detached' || propertyType === 'commercial') {
        baseMin += 600;
        baseMax += 1200;
      }

      min = baseMin;
      max = baseMax;
      summary = `Trianco Aztec Electric Water Heating / LG Therma V R290 Heat Pump Setup`;
      break;
    }

    case 'solar-pv': {
      let baseMin = 4850;
      let baseMax = 6500;

      if (bedrooms === '3' || bedrooms === '4+') {
        baseMin += 1200;
        baseMax += 1800;
      }

      min = baseMin;
      max = baseMax;
      summary = `Solar PV Monocrystalline Roof Array (${bedrooms} Bedroom Property)`;
      break;
    }

    case 'battery-storage': {
      let baseMin = 2950;
      let baseMax = 4200;

      if (bedrooms === '4+' || bedrooms === '5+') {
        baseMin += 800;
        baseMax += 1200;
      }

      min = baseMin;
      max = baseMax;
      summary = `LFP Home Battery Storage System (5.1kWh - 10.2kWh)`;
      break;
    }

    case 'ev-chargers': {
      min = 850;
      max = 1150;
      summary = `7.4kW Smart EV Home Wallbox Charger with PEN Protection`;
      break;
    }

    case 'air-conditioning': {
      let baseMin = 1250;
      let baseMax = 1650;

      if (bedrooms === '3' || bedrooms === '4+') {
        baseMin += 850;
        baseMax += 1250;
      }

      min = baseMin;
      max = baseMax;
      summary = `LG / Daikin Silent Inverter Air Conditioning Split System (${propertyType})`;
      break;
    }

    case 'gas-safety-certificates': {
      min = 70;
      max = 95;
      summary = `Landlord CP12 Gas Safety Inspection & Digital Certificate`;
      break;
    }

    case 'general-plumbing': {
      min = 65;
      max = 180;
      summary = `Domestic Plumbing Repair & Diagnostic Inspection`;
      break;
    }

    case 'emergency-callout': {
      min = 120;
      max = 240;
      summary = `24/7 Priority Emergency Callout & Isolation Remediation`;
      timeframe = "Priority Urgent Dispatch (Same Day)";
      break;
    }

    default: {
      min = 1650;
      max = 2200;
      summary = `Standard Heating System Survey`;
    }
  }

  // Urgency adjustment
  if (urgency === 'immediate') {
    min += 50;
    max += 100;
    timeframe = "Immediate / Same Day Priority";
  }

  return {
    minPrice: Math.round(min),
    maxPrice: Math.round(max),
    formattedRange: `£${min.toLocaleString()} - £${max.toLocaleString()} inc. VAT`,
    summary,
    timeframe,
    refNumber: `ACL-${Math.floor(100000 + Math.random() * 900000)}`
  };
}
