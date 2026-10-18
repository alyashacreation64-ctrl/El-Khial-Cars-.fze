/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { InventorySection } from './components/InventorySection';
import { VehicleModal } from './components/VehicleModal';
import { ServicesSection } from './components/ServicesSection';
import { JournalSection } from './components/JournalSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Vehicle } from './data/dealershipData';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [appointmentVehicle, setAppointmentVehicle] = useState<string>('Any Executive Vehicle');

  const handleOpenAppointment = (vehicleName?: string) => {
    if (vehicleName) {
      setAppointmentVehicle(vehicleName);
    }
    const appointmentElement = document.getElementById('appointment');
    if (appointmentElement) {
      appointmentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCollection = () => {
    const inventoryElement = document.getElementById('inventory');
    if (inventoryElement) {
      inventoryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Glassmorphism Header */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      <main className="flex-1">
        {/* Cinematic VIP Hero */}
        <HeroSection
          onOpenAppointment={() => handleOpenAppointment()}
          onExploreCollection={handleExploreCollection}
        />

        {/* Trust & Statistics Bar */}
        <TrustBar />

        {/* Featured Luxury Car Inventory */}
        <InventorySection
          onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
          onBookAppointment={(vehicleName) => handleOpenAppointment(vehicleName)}
        />

        {/* Premium Dealership Services */}
        <ServicesSection />

        {/* Luxury Automotive Journal */}
        <JournalSection />

        {/* Customer Reviews & Reputation */}
        <ReviewsSection />

        {/* Showroom FAQ Accordion */}
        <FaqSection />

        {/* VIP Appointment Booking */}
        <AppointmentSection initialVehicle={appointmentVehicle} />

        {/* Contact & Location with Google Maps */}
        <ContactSection />
      </main>

      {/* Global Vehicle Specification Modal */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onBookAppointment={(vehicleName) => handleOpenAppointment(vehicleName)}
        />
      )}

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Pulsing WhatsApp Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
