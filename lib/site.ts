export const siteConfig = {
  name: "Jakub",
  role: "Strony, które zbierają zapytania",
  title: "Jakub — strony, które tłumaczą ofertę i zbierają zapytania",
  description:
    "Projektuję strony dla firm: oferta na pierwszym ekranie, realizacje i prosta droga do kontaktu. Od wizytówki po sklep.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@jakub.dev",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  availability: "Przyjmuję nowe projekty w tym kwartale",
};
