export type Product = {
  slug: string
  name: string
  tagline: string
  tag: string
  image: string
  description: string
  specs: { label: string; value: string }[]
  highlights: string[]
  accentColor: string
  bgAccent: string
}

export const products: Product[] = [
  {
    slug: "kazhan-e620",
    name: "Kazhan E620",
    tagline: "Battle-proven strike & logistics UAS",
    tag: "Military",
    image: "/products/Kazhan-E620-Strike-UAS.jpg",
    description: "The Kazhan E620, also known as the Bat, is a heavy-lift military multirotor equipped with a precision drop mechanism for deployment of munitions, demolition charges, and anti-tank mines. Actively utilized by Ukraine's defense forces, this rugged platform is designed for demanding operational environments and can also handle battlefield logistics and supply delivery to frontline troops.",
    specs: [
      { label: "Load Capacity", value: "12 kg long range / 20 kg short range" },
      { label: "Altitude", value: "400m standard / 1,500m max" },
      { label: "Ground Speed", value: "Up to 20 m/s (72 km/h)" },
      { label: "Combat Radius", value: "Up to 10 km" },
      { label: "Strike Radius", value: "6 – 10 km" },
      { label: "Power System", value: "2x 72,000 or 100,000 mA/h LiPo 6S with auto-heating" },
    ],
    highlights: ["Jam-resistant FHSS datalink", "AI dual-camera system", "Universal payload release", "NSN coded"],
    accentColor: "text-blue-600",
    bgAccent: "bg-blue-50",
  },
  {
    slug: "kazhan-e630",
    name: "Kazhan E630",
    tagline: "Heavy-lift tactical UAS with extended payload",
    tag: "Military",
    image: "/products/Kazhan-E620-Strike-UAS.jpg",
    description: "The Kazhan E630 is the extended-payload variant of the Bat platform, capable of carrying up to 30 kg across a 20 km range. Featuring the same jam-resistant communications and integrated AI camera system as the E620, the E630 is designed for heavier munitions, larger supply drops, and missions requiring maximum payload capacity in contested environments.",
    specs: [
      { label: "Load Capacity", value: "18 kg long range / 30 kg short range" },
      { label: "Altitude", value: "400m standard / 1,500m max" },
      { label: "Ground Speed", value: "Up to 20 m/s (72 km/h)" },
      { label: "Combat Radius", value: "Up to 10 km" },
      { label: "Strike Radius", value: "6 – 10 km" },
      { label: "Power System", value: "2x 72,000 or 100,000 mA/h LiPo 6S with auto-heating" },
    ],
    highlights: ["Jam-resistant FHSS datalink", "AI dual-camera system", "Universal payload release", "NSN coded"],
    accentColor: "text-blue-600",
    bgAccent: "bg-blue-50",
  },
  {
    slug: "kazhan-e630-firefighter",
    name: "Kazhan E630 Firefighter",
    tagline: "Heavy-lift drone for fire extinguishing bomb deployment",
    tag: "Emergency",
    image: "/products/Kazhan-E630-Firefighter-Drone-1.webp",
    description: "The Kazhan E630 Firefighter is a powerful heavy-lift multirotor UAS specially equipped to carry and deploy up to six fire-extinguishing bombs. With a secure FHSS radio link featuring anti-jamming capabilities and an operational radius of up to 10 km, it is ideal for battlefield and emergency firefighting missions. Equipped with a 3-axis stabilized gimbal incorporating an EO camera with 10x optical zoom and a 640x480 thermal imager with 9x zoom.",
    specs: [
      { label: "Load Capacity", value: "Up to 30 kg" },
      { label: "Max Altitude", value: "400m" },
      { label: "Max Ground Speed", value: "25 m/s (90 km/h)" },
      { label: "Operational Radius", value: "Up to 10 km" },
      { label: "Radio Range", value: "Up to 15 km" },
      { label: "Batteries", value: "2x 72,000 or 100,000 mA/h LiPo 7S with auto-heating" },
    ],
    highlights: ["Fire extinguishing bomb deployment", "EO camera with 10x zoom", "640x480 thermal imager", "Anti-jamming radio link"],
    accentColor: "text-orange-600",
    bgAccent: "bg-orange-50",
  },
  {
    slug: "agro-30",
    name: "AGRO 30",
    tagline: "30-liter agricultural spraying drone",
    tag: "Agriculture",
    image: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    description: "The AGRO 30 is an ultra-reliable agricultural drone designed for efficient spraying of plant protection products. Featuring a 30-liter tank capacity with coverage of 12 to 15 hectares per hour, the flexible spraying system can be fitted with four single or twin nozzles. Smart remote control with manual and autonomous modes, RTK-capable GPS/GLONASS receiver, altitude control, and obstacle detection radars.",
    specs: [
      { label: "Tank Capacity", value: "30 liters" },
      { label: "Wind Resistance", value: "Up to 10 m/s" },
      { label: "Coverage", value: "12 – 15 ha per hour / 3 – 5 ha per flight" },
      { label: "Operating Speed", value: "Up to 10 m/s level / 6 m/s elevated" },
      { label: "Pump Output", value: "8 liters/min regulated" },
      { label: "Liquid Consumption", value: "5 – 15 liters/ha" },
      { label: "Power", value: "2 semi-solid LiPo batteries 72,000 or 100,000 mA/h" },
    ],
    highlights: ["RTK GPS/GLONASS precision", "Obstacle detection radar", "Manual & autonomous modes", "Flexible nozzle system"],
    accentColor: "text-amber-600",
    bgAccent: "bg-amber-50",
  },
  {
    slug: "shmavik",
    name: "Shmavik",
    tagline: "Versatile quadcopter scout for ISR missions",
    tag: "ISR",
    image: "/products/SHMAVIK-quadcopter-scout-drone.webp",
    description: "The Shmavik is a versatile quadcopter scout drone that provides significant advantages over standard COTS drones in ISR tasks, integrating technologies that equip it to excel under modern warfare conditions. It features a jam-resistant FHSS radio link fully interoperable with all Kazhan UAVs, an AI-assisted EO/IR gimbal, and a standard payload release system.",
    specs: [
      { label: "Dimensions", value: "420 x 420 x 200 mm" },
      { label: "Weight", value: "1.4 kg (w/o battery) / 2.4 kg (w/ battery)" },
      { label: "Operational Radius", value: "15 km" },
      { label: "Flight Time", value: "Up to 60 min" },
      { label: "Altitude", value: "150 – 250m working / 500m max" },
      { label: "Speed", value: "15 – 25 m/s" },
      { label: "Max Wind Resistance", value: "12 m/s" },
      { label: "Datalink", value: "Dual-channel 2.1-2.8 & 4.9-6.0 GHz with FHSS" },
    ],
    highlights: ["Jam-resistant dual-band radio", "AI-assisted EO/IR gimbal", "60-minute flight time", "Interoperable with Kazhan fleet"],
    accentColor: "text-emerald-600",
    bgAccent: "bg-emerald-50",
  },
  {
    slug: "pop-fly",
    name: "Pop-Fly",
    tagline: "Tube-launched loitering munition & tactical ISR",
    tag: "Tactical",
    image: "/products/Pop-Fly-tactical-tube-launched-UAS.jpg",
    description: "The Pop-Fly is a rapidly-deployable tube-launched UAS designed for tactical ISR and loitering munitions strike missions. It features an operational range of up to 100 km and can be equipped with a parachute recovery system. Available in two variants with payload capacities of 2.5 or 5 kg. A complete kit can include one UAS configured for ISR and five as loitering munitions.",
    specs: [
      { label: "Wingspan", value: "1.2m / 1.8m" },
      { label: "Fuselage Length", value: "0.93m / 1.35m" },
      { label: "Max Payload", value: "2.5 kg / 5 kg" },
      { label: "Operational Range", value: "50 – 100 km" },
      { label: "Max Altitude", value: "2,000m" },
      { label: "Max Flight Speed", value: "50 m/s" },
      { label: "Wind Resistance", value: "15 m/s" },
      { label: "Datalink", value: "Dual-channel 2.1-2.8 & 4.9-6.0 GHz with FHSS" },
    ],
    highlights: ["Tube-launched rapid deployment", "50–100 km strike range", "Parachute recovery option", "ISR + loitering munition config"],
    accentColor: "text-stone-600",
    bgAccent: "bg-stone-100",
  },
]
