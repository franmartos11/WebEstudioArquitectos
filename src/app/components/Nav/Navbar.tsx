"use client";
import React, { useState } from "react";

import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavCreator";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Experiencias">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">KAYAKS / STANDUP PADDLE</HoveredLink>
            <HoveredLink href="/interface-design">PASEOS EN VELERO</HoveredLink>
            <HoveredLink href="/branding">CABALGATAS</HoveredLink>
            <HoveredLink href="/seo">TREKKING</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Inmuebles">
          <div className=" text-sm grid grid-cols-2 gap-10 p-4">
          <ProductItem
              title="LOTES DE COSTA Y BOSQUE"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="LOTES DE MONTAÑA"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Departamentos"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Novedades">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Todos los proyectos</HoveredLink>
            <HoveredLink href="/individual">Vinedos</HoveredLink>
            <HoveredLink href="/team">Club Ecuestre</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contacto">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Preguntas Frecuentes</HoveredLink>
            <HoveredLink href="/individual">Reservas Restaurante</HoveredLink>
            <HoveredLink href="/team">Reservas Hotel</HoveredLink>
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}
