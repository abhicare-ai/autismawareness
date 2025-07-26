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
    { id: "IN-AP", customData: { fillColor: "#007bff" } }, // Andhra Pradesh
    { id: "IN-AR", customData: { fillColor: "#0066cc" } }, // Arunachal Pradesh
    { id: "IN-AS", customData: { fillColor: "#005cbf" } }, // Assam
    { id: "IN-BR", customData: { fillColor: "#0047b3" } }, // Bihar
    { id: "IN-CT", customData: { fillColor: "#003da6" } }, // Chhattisgarh
    { id: "IN-GA", customData: { fillColor: "#003399" } }, // Goa
    { id: "IN-GJ", customData: { fillColor: "#002b80" } }, // Gujarat
    { id: "IN-HR", customData: { fillColor: "#002266" } }, // Haryana
    { id: "IN-HP", customData: { fillColor: "#001a4d" } }, // Himachal Pradesh
    { id: "IN-JH", customData: { fillColor: "#001133" } }, // Jharkhand
    { id: "IN-KA", customData: { fillColor: "#000a1a" } }, // Karnataka
    { id: "IN-KL", customData: { fillColor: "#1a237e" } }, // Kerala
    { id: "IN-MP", customData: { fillColor: "#283593" } }, // Madhya Pradesh
    { id: "IN-MH", customData: { fillColor: "#303f9f" } }, // Maharashtra
    { id: "IN-MN", customData: { fillColor: "#3949ab" } }, // Manipur
    { id: "IN-ML", customData: { fillColor: "#3f51b5" } }, // Meghalaya
    { id: "IN-MZ", customData: { fillColor: "#5c6bc0" } }, // Mizoram
    { id: "IN-NL", customData: { fillColor: "#7986cb" } }, // Nagaland
    { id: "IN-OR", customData: { fillColor: "#9fa8da" } }, // Odisha
    { id: "IN-PB", customData: { fillColor: "#c5cae9" } }, // Punjab
    { id: "IN-RJ", customData: { fillColor: "#e8eaf6" } }, // Rajasthan
    { id: "IN-SK", customData: { fillColor: "#bbdefb" } }, // Sikkim
    { id: "IN-TN", customData: { fillColor: "#90caf9" } }, // Tamil Nadu
    { id: "IN-TG", customData: { fillColor: "#64b5f6" } }, // Telangana
    { id: "IN-TR", customData: { fillColor: "#42a5f5" } }, // Tripura
    { id: "IN-UP", customData: { fillColor: "#2196f3" } }, // Uttar Pradesh
    { id: "IN-UT", customData: { fillColor: "#1e88e5" } }, // Uttarakhand
    { id: "IN-WB", customData: { fillColor: "#1976d2" } }, // West Bengal
    { id: "IN-AN", customData: { fillColor: "#1565c0" } }, // Andaman and Nicobar Islands
    { id: "IN-CH", customData: { fillColor: "#0d47a1" } }, // Chandigarh
    { id: "IN-DN", customData: { fillColor: "#82b1ff" } }, // Dadra and Nagar Haveli
    { id: "IN-DD", customData: { fillColor: "#448aff" } }, // Daman and Diu
    { id: "IN-DL", customData: { fillColor: "#2979ff" } }, // Delhi
    { id: "IN-JK", customData: { fillColor: "#2962ff" } }, // Jammu and Kashmir
    { id: "IN-LA", customData: { fillColor: "#0033cc" } }, // Ladakh
    { id: "IN-LD", customData: { fillColor: "#3366ff" } }, // Lakshadweep
    { id: "IN-PY", customData: { fillColor: "#6699ff" } }, // Puducherry
  ];

  return (
    <div className={cn("india-map-wrapper", className)}>
      <IndiaMap mapStyle={mapStyle} stateData={stateData} />
    </div>
  );
};
