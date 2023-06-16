interface iPortfolioArray  {
    id: number;
    description: string;
    imgUrl: string;
    link: string;
}


export const PortfolioArray: iPortfolioArray[] = [
    {id: 1, description: "Интернет-пиццерия", imgUrl: "/react-pizza.png", link: "https://64843dccd2a28e3e234b0d42--coruscating-concha-ad2f70.netlify.app/"},
    {id: 2, description: "Интернет-магазин кроссовок", imgUrl: "/react-sneakers.png", link: "https://etherealelement.github.io/sneakers-app/"},
    {id: 3, description: "Сайт-визитка Mersedes-AVTR", imgUrl: "/avatar-page.png", link: "https://etherealelement.github.io/AVTR/"},
    {id: 4, description: "Сайт-визитка элекрических велосипедов Xiaomi-Himo", imgUrl: "/himo.png", link: "https://etherealelement.github.io/XiaomiHimo/"},
    {id: 5, description: "Сайт туристического агенства", imgUrl: "/safari.png", link: "https://64843dccd2a28e3e234b0d42--coruscating-concha-ad2f70.netlify.app/"},
]