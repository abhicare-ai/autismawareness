import { Metadata } from "next";
import Product from "./Product";

export const metadata: Metadata = {
  title: "Autism book",
};
export default function Page() {
  return <Product />;
}
