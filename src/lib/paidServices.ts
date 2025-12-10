// lib/paidServices.ts

export type PaidServiceId = "website-5" | "website-50" | "audit" | "ads";

export type PaidService = {
  id: PaidServiceId;
  name: string;
  description: string;
  amount: number; // in pence
  prettyPrice: string;
};

export const PAID_SERVICES: Record<PaidServiceId, PaidService> = {
  "website-5": {
    id: "website-5",
    name: "5-page website",
    description: "Home, Services, About, Contact + 1 extra page.",
    amount: 40 * 100,
    prettyPrice: "£40",
  },
  "website-50": {
    id: "website-50",
    name: "50-page website",
    description: "Up to 50 pages for services, locations and blogs.",
    amount: 300 * 100,
    prettyPrice: "£300",
  },
  audit: {
    id: "audit",
    name: "Website audit",
    description:
      "Video review of your existing site with clear fixes to get more local enquiries.",
    amount: 30 * 100,
    prettyPrice: "£30",
  },
  ads: {
    id: "ads",
    name: "Priority advertising (first month)",
    description:
      "Featured at the top of relevant SaltaireGuide.uk pages with a highlighted badge.",
    amount: 30 * 100,
    prettyPrice: "£30",
  },
};

export function getPaidServiceById(id: string): PaidService | undefined {
  return PAID_SERVICES[id as PaidServiceId];
}
