import React from 'react';
import { 
  Flame, 
  Sun, 
  Battery, 
  Zap, 
  Wind, 
  Wrench, 
  Thermometer, 
  Droplets, 
  Bath, 
  ShieldCheck, 
  RefreshCw, 
  AlertTriangle, 
  Calculator, 
  Phone, 
  CheckCircle2, 
  Info 
} from 'lucide-react';

export default function IconRenderer({ name, className = "w-6 h-6" }) {
  switch (name) {
    case 'Flame':
      return <Flame className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    case 'Battery':
      return <Battery className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Wind':
      return <Wind className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Thermometer':
      return <Thermometer className={className} />;
    case 'Droplets':
      return <Droplets className={className} />;
    case 'Bath':
      return <Bath className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'RefreshCw':
      return <RefreshCw className={className} />;
    case 'AlertTriangle':
      return <AlertTriangle className={className} />;
    case 'Calculator':
      return <Calculator className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    default:
      return <Info className={className} />;
  }
}
