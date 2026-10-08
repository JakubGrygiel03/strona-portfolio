export const packageIds = ["one-page", "cms-booking", "shop-platform"] as const;
export type PackageId = (typeof packageIds)[number];

export const addOnIds = [
  "bookingBasic",
  "cmsBasic",
  "blog",
  "multilang",
  "mobilePwaPush",
  "depositPayments",
  "workshopsBooking",
  "multilangShop",
] as const;
export type AddOnId = (typeof addOnIds)[number];

export interface EstimatePackage {
  id: PackageId;
  name: string;
  summary: string;
  priceMin: number;
  priceMax: number;
  daysMin: number;
  daysMax: number;
  included: string[];
  allowedAddOnIds: AddOnId[];
}

export interface EstimateAddOn {
  id: AddOnId;
  name: string;
  price: number | Partial<Record<PackageId, number>>;
  days: number;
}

export const packages: EstimatePackage[] = [
  {
    id: "one-page",
    name: "Wizytówka na jednej stronie",
    summary: "Oferta, kontakt i telefon pod jednym adresem",
    priceMin: 850,
    priceMax: 1200,
    daysMin: 7,
    daysMax: 14,
    included: [
      "Projekt responsywny",
      "Formularz z e-mailem",
      "Przycisk telefonu",
      "Hosting 0 zł",
      "Podstawowe SEO",
    ],
    allowedAddOnIds: ["bookingBasic", "cmsBasic", "blog", "multilang"],
  },
  {
    id: "cms-booking",
    name: "Strona z panelem i rezerwacjami",
    summary: "Podstrony, edycja treści i kalendarz wizyt",
    priceMin: 1900,
    priceMax: 3200,
    daysMin: 14,
    daysMax: 24,
    included: ["Podstrony", "Panel CMS", "Kalendarz rezerwacji", "Maile", "Baza Supabase"],
    allowedAddOnIds: ["mobilePwaPush", "depositPayments", "blog", "multilang"],
  },
  {
    id: "shop-platform",
    name: "Sklep internetowy",
    summary: "Katalog, koszyk, płatności i wysyłka",
    priceMin: 3800,
    priceMax: 6500,
    daysMin: 21,
    daysMax: 35,
    included: [
      "Katalog i stany",
      "Koszyk i BLIK",
      "Konta klientów",
      "Panel zamówień",
      "Paczkomaty / kurier",
      "Maile transakcyjne",
    ],
    allowedAddOnIds: ["mobilePwaPush", "workshopsBooking", "blog", "multilangShop"],
  },
];

const addOnCatalog: EstimateAddOn[] = [
  { id: "bookingBasic", name: "Kalendarz rezerwacji terminów", price: 450, days: 3 },
  { id: "cmsBasic", name: "Prosty panel do edycji treści i zdjęć", price: 400, days: 3 },
  { id: "blog", name: "Moduł bloga / aktualności", price: 350, days: 2 },
  { id: "multilang", name: "Druga wersja językowa", price: { "one-page": 400, "cms-booking": 450 }, days: 3 },
  { id: "mobilePwaPush", name: "Aplikacja na telefon (PWA) i powiadomienia Push", price: 500, days: 3 },
  { id: "depositPayments", name: "Płatności online za zadatki (BLIK / karta)", price: 400, days: 3 },
  { id: "workshopsBooking", name: "Zapisy na warsztaty z limitem miejsc", price: 450, days: 3 },
  { id: "multilangShop", name: "Sklep wielojęzyczny", price: 550, days: 4 },
];

const packageMap = new Map(packages.map((item) => [item.id, item]));
const addOnMap = new Map(addOnCatalog.map((item) => [item.id, item]));

export function packageById(id: PackageId) {
  const item = packageMap.get(id);
  if (!item) throw new Error("Nieznany pakiet.");
  return item;
}

export function addOnById(id: AddOnId) {
  const item = addOnMap.get(id);
  if (!item) throw new Error("Nieznany dodatek.");
  return item;
}

export function addOnsFor(packageId: PackageId) {
  return packageById(packageId).allowedAddOnIds.map((id) => addOnById(id));
}

export function addOnPrice(addOn: EstimateAddOn, packageId: PackageId) {
  if (typeof addOn.price === "number") return addOn.price;
  return addOn.price[packageId] ?? 0;
}
