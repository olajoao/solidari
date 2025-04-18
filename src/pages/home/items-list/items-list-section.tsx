import { DonationCard } from "@/components/app/donation-card";
import { DonationProps } from "@/shared/interfaces/donation";

const donations: DonationProps[] = [
  {
    name: "Casaco de lã masculino",
    description: "Casaco tamanho G, em ótimo estado, usado poucas vezes.",
    location: "São Paulo, SP",
    hour: new Date("2025-04-18T10:00:00"),
    image:
      "https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fogão 4 bocas",
    description: "Funciona perfeitamente, apenas com sinais de uso.",
    location: "Campinas, SP",
    hour: new Date("2025-04-18T15:30:00"),
    image:
      "https://images.unsplash.com/photo-1608454770647-01dc0f7dd97d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Filhote de cachorro",
    description: "Vira-lata caramelo, dócil, com 2 meses, vacinado.",
    location: "Belo Horizonte, MG",
    hour: new Date("2025-04-19T09:15:00"),
    image:
      "https://images.unsplash.com/photo-1644849823329-8f7402169585?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Telhas de barro",
    description: "Cerca de 30 telhas usadas, mas ainda boas para uso.",
    location: "Joinville, SC",
    hour: new Date("2025-04-20T08:00:00"),
    image:
      "https://images.unsplash.com/photo-1675527595211-08f681ba06cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Berço desmontável",
    description: "Em bom estado, com colchão incluído.",
    location: "Fortaleza, CE",
    hour: new Date("2025-04-20T13:45:00"),
    image:
      "https://images.unsplash.com/photo-1458731909820-5850bdcaee0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Notebook antigo",
    description: "Dell de 2012, funciona, ideal para estudos básicos.",
    location: "Rio de Janeiro, RJ",
    hour: new Date("2025-04-21T16:00:00"),
    image:
      "https://images.unsplash.com/photo-1532799118157-9fef52fdbc5e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Roupas infantis",
    description: "Conjunto de roupas para menina, entre 4 e 6 anos.",
    location: "Porto Alegre, RS",
    hour: new Date("2025-04-22T11:00:00"),
    image:
      "https://images.unsplash.com/photo-1574681357916-9d4464642696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bicicleta aro 26",
    description: "Usada, precisa calibrar pneus, mas está boa para uso.",
    location: "Salvador, BA",
    hour: new Date("2025-04-23T14:30:00"),
    image:
      "https://images.unsplash.com/photo-1581185880014-7984c3cdee52?q=80&w=1391&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cesta básica",
    description: "Arroz, feijão, óleo, macarrão, café, entre outros.",
    location: "Recife, PE",
    hour: new Date("2025-04-24T10:30:00"),
    image:
      "https://images.unsplash.com/photo-1481061730414-e888962bd2c0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cama de solteiro",
    description: "Com colchão, estrutura de madeira firme.",
    location: "Florianópolis, SC",
    hour: new Date("2025-04-25T17:00:00"),
  },
];

export function ItemsListSection() {
  return (
    <section className="py-14 container mx-auto space-y-14">
      <h1 className="md:text-3xl font-bold text-primary text-center">
        Doações recentes
      </h1>
      <ul className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
        {donations.map((donation, index) => (
          <li key={index}>
            <DonationCard {...donation} />
          </li>
        ))}
        <li></li>
      </ul>
    </section>
  );
}
