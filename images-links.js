// Liens images directs pour chaque produit
const imagesLinks = {
    // Sneakers
    'B30': 'https://blxinspiration.com/cdn/shop/files/image_e3da141b-3a9c-4752-91f8-f6df6e7c43d5_530x@2x.jpg?v=1745415767',
    'B22': 'https://www.hollomen.com/cdn/shop/files/DiorB22LightBlackoutCorcSneaker_2.jpg?v=1751200934&width=823',
    'LV Skate': 'https://i.ebayimg.com/images/g/s6oAAOSwS1tmnr61/s-l1600.webp',
    'Nocta Hotstep 2': 'https://www.sneakers-actus.fr/wp-content/uploads/2024/09/Nike-Nocta-Hot-Step-2-Black-toute-noire-DZ7293-001-5.jpg',
    'LV Trainers': 'https://cdn.salla.sa/RvPxw/f9552512-efb1-4d66-bb8a-39b0119ae7d9-750x1000-YvTCGi99lWFOoHAmgjAWxvjfpRNN4yEjHBnGp9al.jpg',
    'TN': 'https://i.ebayimg.com/images/g/01EAAOSwa5piEyAB/s-l1600.webp',
    'Balenciaga Runner': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/5d/4c/c7/5d4cc72c505f9fcf90f6cb6688b232063e2d8561.jpg?rule=ad-image',
    'Balenciaga Track' : 'https://c.anibis.ch/big/1352625420.jpg',   
    
    // Vestes / Manteaux
    'Doudoune Burberry': 'https://preview.redd.it/burberry-down-jacket-top-quality-v0-hf4h1qh9xg2e1.jpg?width=960&format=pjpg&auto=webp&s=049d3550e663b65bb98da3fa4991d1248159061a',
    'Doudoune CP Company': 'https://i.ebayimg.com/images/g/~OIAAeSwGuZpdfi-/s-l1600.webp',
    'Coupe-vent Moncler': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/3e/dd/28/3edd2838a4f56b41c8180eb359ed36f40478cbb3.jpg?rule=ad-large',

    // Vêtements
    'Pull Ralph Lauren': 'https://cdn.beebs.app/101ee2ad-8d75-4b91-add5-436f6d846074.jpg',
    'Nike Running Haut': 'https://cdn.beebs.app/11655df6-1859-4ba1-92b4-36ffda6be329.jpg',
    'Nike Running aeroswift Bas': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/07/93/e6/0793e6d68f451582befb4191f1eaad48426da0ba.jpg?rule=ad-large',

    // Accessoires
    'Bonnet LV': 'https://www.picclickimg.com/images/g/2dwAAOSw2ZxjwzqW/s-l1600.jpg',
    'Casquette Gucci': 'https://c.anibis.ch/big/4146414125.jpg',
    'Ceinture LV Noir': 'https://cdn.salla.sa/RvPxw/9b11666d-537a-4925-9d89-fb0ddf54ed89-1000x1000-9x3G571cCLtE1VZaOKC6k6YXhfUOaJJ7viFjbmjT.jpg',
    'Bracelet Lacoste': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/05/62/3d/05623d0d1b07f65a4396999e64b20c15fb58e12c.jpg?rule=ad-large',
    'Sac LV': 'https://static.vecteezy.com/ti/photos-gratuite/p1/37996147-minsk-bielorussie-janvier-17-2024-louis-vuitton-magasin-gratuit-photo.jpg',

    // Tech
    'AirPods Pro 2': 'https://i.ebayimg.com/images/g/0ygAAeSwn5Zo5XA9/s-l1600.webp',

    // Nouvelles Sneakers
    'Kayano 14': 'https://pristinefits.com/cdn/shop/files/IMG-3898.jpg?v=1761932302&width=1080',
    'Louboutin': 'https://images.vestiairecollective.com/images/resized/w=768,q=75,f=auto,/produit/baskets-christian-louboutin-louis-junior-spike-en-suede-noir-39300469-3_3.jpg',
    'Converse CDG': 'https://i.ebayimg.com/images/g/06kAAOSwPaBccRVR/s-l1600.webp',
    'Saucony Omni 9': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzd4Z-fWJ0W3U7sARWyCNT6E3DsSADl25n7PLPjWBtHI_aZGvOkg4BhfI4&s=10',
    'On Running Cloud': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/a8/ec/c6/a8ecc69da1b4e24d3e499197d9f8335f5ad6f3a8.jpg?rule=ad-image',
    'Prada Cup': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vuBsDU6a-KjlXp0vr9rMBuqk70TCxbHrgELca7uGBJfl9dxq5xOUCTaR&s=10',

    // Nouvelles Vestes
    'Moncler Maya': 'https://cdn-cms.beams.co.jp/cdn/cms/blog/173959/body_tawZRj.jpg',

    // Nouveaux Vêtements
    'Pull LV': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/9c/d4/7a/9cd47a36d39e427873f81be0edd97e19fa13e291.jpg?rule=classified-1200x800-webp',
    'Pull Ami': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/e2/91/3e/e2913e1a84f240db1591bc5b265a4a55bd9479fc.jpg?rule=ad-large',
    'Pull Stone Island': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/0d/a0/eb/0da0ebe46532a122f8219fb6600ad23005961aec.jpg?rule=ad-large',
    'Pull CDG': 'https://i.ebayimg.com/images/g/wZ0AAOSwpbdlzp2P/s-l1600.webp',
    'Pull Margiela': 'https://preview.redd.it/maison-margiela-sweater-v0-wsp5igoanemg1.jpg?width=1080&crop=smart&auto=webp&s=4cb417c01bde762bc7572fb583a394216b8219c8',
    'Pull Essentials': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/ee/6e/a7/ee6ea7e2253c3b6122ad4011bc68cce9bcaa8fe1.jpg?rule=ad-large',
    'T-shirt YSL': 'https://www.thepopup.com/cdn/shop/files/MG_2982-211.jpg?v=1725828128',
    'Veste Arcteryx': 'https://www.careofcarl.fr/bilder/artiklar/zoom/27213111r_1.jpg?m=1726140254?0413',
    'Zip CP Company': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/c2/ba/fa/c2bafa241ed6176788e78b74a90c999f74eb811f.jpg?rule=ad-large',
    'Pull CP Company': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/20/f1/35/20f13576f56e0ec0e8570201e26e85731d262b87.jpg?rule=ad-large',
    'Zip Ralph Lauren': 'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2023/12/21/polo-ralph-lauren_399904_710888282001_20240105T145559_04.jpg',

    // Nouveaux Accessoires
    'Rolex': 'https://manvstime.fr/wp-content/uploads/2025/07/ROLEX-DATEJUST-41-126331-1.jpg',
    'Ceinture Hermès': 'https://i.ebayimg.com/images/g/6SQAAeSw2HtobtR0/s-l500.jpg',
    'Écharpe Burberry': 'https://i.etsystatic.com/22365760/r/il/3d0797/6393598384/il_680x540.6393598384_ddvs.jpg',
    'Coque Stone Island': 'https://cdn.beebs.app/73961972-372c-4003-b2aa-c3c8e7897b07.jpg',
    
    // Nouveaux Vêtements supplémentaires
    'T-shirt & Short Denim Tears': 'https://media-photos.depop.com/b1/52661956/2048122676_3e69ed9b574f411dbbb2c6f12a032539/P0.jpg',
    'Chaussettes Ralph Lauren': 'https://gomez.fr/upload/product/592/pn-pr254w000006e9600os-04238.jpg',
    'T-shirt CDG': 'https://i.ebayimg.com/images/g/wZ0AAOSwpbdlzp2P/s-l1600.webp',
    'Jogging Ralph Lauren': 'https://images1.vinted.net/t/05_01812_vGeXkqCWE1iALV5jN4kSUHZQ/f800/1776976845.webp?s=cf26204d11146883317f157bb67f5f86a18b8938',
    'Hoodie Ralph Lauren': 'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2023/12/21/polo-ralph-lauren_399904_710888282001_20240105T145559_04.jpg',
    'Hoodie Stone Island': 'https://img.leboncoin.fr/api/v1/lbcpb1/images/0d/a0/eb/0da0ebe46532a122f8219fb6600ad23005961aec.jpg?rule=ad-large',
    'Patch Stone Island': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrdupCzVfARP9hLNV4VMPzhpJUZfcbGwxUjHaJ1Ul3Q&s=10',
    'Jogging Essentials': 'https://i.etsystatic.com/59446667/r/il/76ec4e/7641175844/il_794xN.7641175844_qw2b.jpg',
    'Casquette Fendi': 'https://cdn.beebs.app/81479c73-de67-4544-8c93-f22a2672a207.jpg',
    'Polo Ralph Lauren': 'https://cdn.beebs.app/101ee2ad-8d75-4b91-add5-436f6d846074.jpg'
};