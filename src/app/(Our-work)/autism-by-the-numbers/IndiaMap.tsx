"use client";
import { IndiaMap } from "@vishalvoid/react-india-map";
import type { StateData } from "@vishalvoid/react-india-map";
import "../../styles.css";
import { cn } from "@/lib/utils";

interface IndiaMapAppProps {
  className?: string;
}
export const IndiaMapApp = ({ className }: IndiaMapAppProps) => {
  const mapStyle = {
    tooltipConfig: {
      backgroundColor: "#007bff",
      textColor: "#ffffff",
    },
  };

  const stateData: StateData[] = [
  { id: "IN-AP", customData: { totalPatients: 7892 } },
  { id: "IN-AR", customData: { totalPatients: 3657 } },
  { id: "IN-AS", customData: { totalPatients: 9134 } },
  { id: "IN-BR", customData: { totalPatients: 10432 } },
  { id: "IN-CT", customData: { totalPatients: 6542 } },
  { id: "IN-GA", customData: { totalPatients: 2184 } },
  { id: "IN-GJ", customData: { totalPatients: 8310 } },
  { id: "IN-HR", customData: { totalPatients: 5534 } },
  { id: "IN-HP", customData: { totalPatients: 4290 } },
  { id: "IN-JH", customData: { totalPatients: 6671 } },
  { id: "IN-KA", customData: { totalPatients: 7483 } },
  { id: "IN-KL", customData: { totalPatients: 5123 } },
  { id: "IN-MP", customData: { totalPatients: 9833 } },
  { id: "IN-MH", customData: { totalPatients: 10045 } },
  { id: "IN-MN", customData: { totalPatients: 2449 } },
  { id: "IN-ML", customData: { totalPatients: 3620 } },
  { id: "IN-MZ", customData: { totalPatients: 2094 } },
  { id: "IN-NL", customData: { totalPatients: 2325 } },
  { id: "IN-OR", customData: { totalPatients: 7421 } },
  { id: "IN-PB", customData: { totalPatients: 5350 } },
  { id: "IN-RJ", customData: { totalPatients: 8612 } },
  { id: "IN-SK", customData: { totalPatients: 2010 } },
  { id: "IN-TN", customData: { totalPatients: 9280 } },
  { id: "IN-TG", customData: { totalPatients: 7462 } },
  { id: "IN-TR", customData: { totalPatients: 2809 } },
  { id: "IN-UP", customData: { totalPatients: 11420 } },
  { id: "IN-UT", customData: { totalPatients: 3360 } },
  { id: "IN-WB", customData: { totalPatients: 7934 } },
  { id: "IN-AN", customData: { totalPatients: 2096 } },
  { id: "IN-CH", customData: { totalPatients: 3115 } },
  { id: "IN-DN", customData: { totalPatients: 2250 } },
  { id: "IN-DD", customData: { totalPatients: 2631 } },
  { id: "IN-DL", customData: { totalPatients: 8744 } },
  { id: "IN-JK", customData: { totalPatients: 6243 } },
  { id: "IN-LA", customData: { totalPatients: 2121 } },
  { id: "IN-LD", customData: { totalPatients: 2015 } },
  { id: "IN-PY", customData: { totalPatients: 2892 } },
];


  return (
    <div className={cn("india-map-wrapper", className)}>
      <IndiaMap mapStyle={mapStyle} stateData={stateData} />
    </div>
  );
};
