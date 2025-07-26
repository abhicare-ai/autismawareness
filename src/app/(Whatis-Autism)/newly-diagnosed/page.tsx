import Budge from '@/components/Budge'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Newly diagnosed",
};
export default function Page() {
  return (
    <Budge>Newly diagnosed</Budge>
  )
}
