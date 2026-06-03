export type Plan = {
  name: string;
  devices: string;
  price: string;
  buttonLabel: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "PLAN DEMO",
    devices: "1 DISPOSITIVO",
    price: "$0",
    buttonLabel: "PROBAR SISTEMA",
  },
  {
    name: "PLAN MENSUAL",
    devices: "1 DISPOSITIVO",
    price: "$4.990",
    buttonLabel: "CONTRATAR AHORA",
  },
  {
    name: "PLAN DE 3 MESES",
    devices: "2 DISPOSITIVOS",
    price: "$9.990",
    buttonLabel: "CONTRATAR AHORA",
    featured: true,
  },
  {
    name: "PLAN DE 6 MESES",
    devices: "3 DISPOSITIVOS",
    price: "$19.990",
    buttonLabel: "CONTRATAR AHORA",
  },
  {
    name: "PLAN DE 1 AÑO",
    devices: "4 DISPOSITIVOS",
    price: "$30.000",
    buttonLabel: "CONTRATAR AHORA",
  },
];
