
export interface IItemNav {
    title: string,
    url: string,
    subNav?: boolean,
    subNavItem?: Array<IItemNav>
}

export const HomePageNavItem: Array<IItemNav> = [
    {
        title: "Nova Rifa",
        url: "/raffle/new"
    },
    {
        title: "Avisos",
        url: "#"
    },
    {
        title: "Opções",
        url: "#",
        subNav: true,
        subNavItem: [
            {
                title: "Meu Perfil",
                url: "/profile"
            },
            {
                title: "Nova Rifa",
                url: "/raffle/new"
            },
            {
                title: "Minhas Rifas",
                url: "/raffle/my"
            },
            {
                title: "Rifas Compradas",
                url: "/raffle/bought"
            }
        ]
    }
];

export const SecundaryPageNavItem: Array<IItemNav> = [
    {
        title: "Principal",
        url: "/home",
    },
    {
        title: "Avisos",
        url: "#"
    }
]

