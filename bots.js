// Archivo bots.js completo y actualizado

const BOTS_LIST = [
    // --- BOTS MASCULINOS ---
    {
        "nombre": "Acelin",
        "url": "https://elbachira.github.io/Acelin/",
        "imagen": "https://i.postimg.cc/jSfvCv6D/Acelin.png",
        "genero": "masculino"
    },
    {
        "nombre": "Aguenith",
        "url": "https://elbachira.github.io/Aguenith/",
        "imagen": "https://i.postimg.cc/wjcFzsKP/Aguenith.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Alejandro",
        "url": "https://elbachira.github.io/Alejandro/",
        "imagen": "https://i.postimg.cc/wj0fJsWN/Alejandro.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Altherian",
        "url": "https://elbachira.github.io/Altherian/",
        "imagen": "https://i.postimg.cc/jj28hd9F/Altherian.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Archibald",
        "url": "https://elbachira.github.io/Archibald/",
        "imagen": "https://i.postimg.cc/jStq2B95/Archibald.png",
        "genero": "masculino"
    },
    {
        "nombre": "Bom-seok",
        "url": "https://elbachira.github.io/Bom-seok/",
        "imagen": "https://i.postimg.cc/tR695XGJ/Bom-seok.png",
        "genero": "masculino"
    },
    {
        "nombre": "Esher",
        "url": "https://elbachira.github.io/Esher/",
        "imagen": "https://i.postimg.cc/cCS2TGft/Esher.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Everett",
        "url": "https://elbachira.github.io/Everett/",
        "imagen": "https://i.postimg.cc/9QzC3wQB/Everett.png",
        "genero": "masculino"
    },
    {
        "nombre": "Faylan",
        "url": "https://elbachira.github.io/Faylan/",
        "imagen": "https://i.postimg.cc/x1WrWs70/Faylan.png",
        "genero": "masculino"
    },
    {
        "nombre": "Felipe",
        "url": "https://elbachira.github.io/Felipe/",
        "imagen": "https://i.postimg.cc/X7GQTV0C/Felipe.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Haesung",
        "url": "https://elbachira.github.io/Haesung/",
        "imagen": "https://i.postimg.cc/76pdRXZF/Haesung.png",
        "genero": "masculino"
    },
    {
        "nombre": "Haru",
        "url": "https://elbachira.github.io/Haru/",
        "imagen": "https://i.postimg.cc/k5Zwf4jG/Haru.png",
        "genero": "masculino"
    },
    {
        "nombre": "Ilarièn",
        "url": "https://elbachira.github.io/Ilarien/",
        "imagen": "https://i.postimg.cc/YS7f8Cmf/Ilarien.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Ismen",
        "url": "https://elbachira.github.io/Ismen/",
        "imagen": "https://i.postimg.cc/QCntvHz9/Ismen.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Jack Green",
        "url": "https://elbachira.github.io/Jack-Green/",
        "imagen": "https://i.postimg.cc/CxW4W4n0/Jack-Green.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Jaufré",
        "url": "https://elbachira.github.io/Jaufre/",
        "imagen": "https://i.postimg.cc/LX05bxhB/Jaufre.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Ji-Hyeok",
        "url": "https://elbachira.github.io/Ji-Hyeok/",
        "imagen": "https://i.postimg.cc/VNZ0xfVC/Ji-Hyeok.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Juan",
        "url": "https://elbachira.github.io/Juan/",
        "imagen": "https://i.postimg.cc/fbb6gnyV/Juan.png",
        "genero": "masculino"
    },
    {
        "nombre": "Kiyoshi",
        "url": "https://elbachira.github.io/Kiyoshi/",
        "imagen": "https://i.postimg.cc/JzRn0n6S/Kiyoshi.png",
        "genero": "masculino"
    },
    {
        "nombre": "Laren",
        "url": "https://elbachira.github.io/Laren/",
        "imagen": "https://i.postimg.cc/1XxWcbbV/Laren.png",
        "genero": "masculino"
    },
    {
        "nombre": "Liance V1",
        "url": "https://elbachira.github.io/Liance-V1/",
        "imagen": "https://i.postimg.cc/XY0R01Ng/Liance-V1.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Liance V2",
        "url": "https://elbachira.github.io/Liance-V2/",
        "imagen": "https://i.postimg.cc/xdyPwgxB/Liance-V2.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Léonel",
        "url": "https://elbachira.github.io/Leonel/",
        "imagen": "https://i.postimg.cc/pL8TXStc/Leonel.png",
        "genero": "masculino"
    },
    {
        "nombre": "Malphas",
        "url": "https://elbachira.github.io/Malphas/",
        "imagen": "https://i.postimg.cc/XNr0bDFR/Malphas.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Noctas",
        "url": "https://elbachira.github.io/Noctas/",
        "imagen": "https://i.postimg.cc/1tT2Xs6L/Noctas.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Noé",
        "url": "https://elbachira.github.io/Noe/",
        "imagen": "https://i.postimg.cc/brxgPhR0/Noe.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Peeta",
        "url": "https://elbachira.github.io/Peeta/",
        "imagen": "https://i.postimg.cc/SRLWYf3c/Peeta.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Reiner",
        "url": "https://elbachira.github.io/Reiner/",
        "imagen": "https://i.postimg.cc/Qx7jZn56/Reiner.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Riven",
        "url": "https://elbachira.github.io/Riven/",
        "imagen": "https://i.postimg.cc/nLtHc8BR/Riven.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Shane",
        "url": "https://elbachira.github.io/Shane/",
        "imagen": "https://i.postimg.cc/Sx8p2ZGn/Shane.png",
        "genero": "masculino"
    },
    {
        "nombre": "Shayen",
        "url": "https://elbachira.github.io/Shayen/",
        "imagen": "https://i.postimg.cc/66mSrDzM/Shayen.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Stellan",
        "url": "https://elbachira.github.io/Stellan/",
        "imagen": "https://i.postimg.cc/RqxvH0BG/Stellan.png",
        "genero": "masculino"
    },
    {
        "nombre": "Thomas",
        "url": "https://elbachira.github.io/Thomas/",
        "imagen": "https://i.postimg.cc/3w4K3gLB/Thomas.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Timaeus",
        "url": "https://elbachira.github.io/Timaeus/",
        "imagen": "https://i.postimg.cc/7ZC6L8h0/Timaeus.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Térence",
        "url": "https://elbachira.github.io/Terence/",
        "imagen": "https://i.postimg.cc/jqF63TpJ/Terence.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Wighard",
        "url": "https://elbachira.github.io/Wighard/",
        "imagen": "https://i.postimg.cc/yWqHYdNb/Wighard.png",
        "genero": "masculino"
    },
    {
        "nombre": "Winsley",
        "url": "https://elbachira.github.io/Winsley/",
        "imagen": "https://i.postimg.cc/fRz9wT0L/Winsley.png",
        "genero": "masculino"
    },
    {
        "nombre": "Yoo-Gyeom",
        "url": "https://elbachira.github.io/Yoo-Gyeom/",
        "imagen": "https://i.postimg.cc/rsgqgcyn/Yoo-Gyeom.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Yuren",
        "url": "https://elbachira.github.io/Yuren/",
        "imagen": "https://i.postimg.cc/Vv7cnR42/Yuren.jpg",
        "genero": "masculino"
    },

    // --- BOTS FEMENINOS ---
    {
        "nombre": "Aceline",
        "url": "https://elbachira.github.io/Aceline/",
        "imagen": "https://i.postimg.cc/L6kcDSFq/Aceline.png",
        "genero": "femenino" // <-- La clave mágica
    },
    {
        "nombre": "Aguenelle",
        "url": "https://elbachira.github.io/Aguenelle/",
        "imagen": "https://i.postimg.cc/9FdHwWYs/Aguenelle.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Alessandra",
        "url": "https://elbachira.github.io/Alessandra/",
        "imagen": "https://i.postimg.cc/x8Gp8dVR/Alessandra.png",
        "genero": "femenino"
    },
    {
        "nombre": "Altheris",
        "url": "https://elbachira.github.io/Altheris/",
        "imagen": "https://i.postimg.cc/598RnsQC/Altheris.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Archanald",
        "url": "https://elbachira.github.io/Archanald/",
        "imagen": "https://i.postimg.cc/wBSwkN62/Archanald.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Sae-bom",
        "url": "https://elbachira.github.io/Sae-bom/",
        "imagen": "https://i.postimg.cc/tR695XGJ/Bom-seok.png",
        "genero": "femenino"
    },
    {
        "nombre": "Eshira",
        "url": "https://elbachira.github.io/Eshira/",
        "imagen": "https://i.postimg.cc/qvqQVwqQ/Eshira.png",
        "genero": "femenino"
    },
    {
        "nombre": "Evelyn",
        "url": "https://elbachira.github.io/Evelyn/",
        "imagen": "https://i.postimg.cc/W3Gw6fYp/Evelyn.png",
        "genero": "femenino"
    },
    {
        "nombre": "Faylinn",
        "url": "https://elbachira.github.io/Faylan/",
        "imagen": "https://i.postimg.cc/tRzzswV2/Faylinn.png",
        "genero": "femenino"
    },
    {
        "nombre": "Finnia",
        "url": "https://elbachira.github.io/Finnia/",
        "imagen": "https://i.postimg.cc/1380Yz7j/Finnia.png",
        "genero": "femenino"
    },
    {
        "nombre": "Haein",
        "url": "https://elbachira.github.io/Haein/",
        "imagen": "https://i.postimg.cc/8cyWZ8RG/Haein.png",
        "genero": "femenino"
    },
    {
        "nombre": "Hari",
        "url": "https://elbachira.github.io/Hari/",
        "imagen": "https://i.postimg.cc/YqsYgH2f/Hari.png",
        "genero": "femenino"
    },
    {
        "nombre": "Ilaria",
        "url": "https://elbachira.github.io/Ilaria/",
        "imagen": "https://i.postimg.cc/LX21R4vR/Ilaria.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Ismene",
        "url": "https://elbachira.github.io/Ismene/",
        "imagen": "https://i.postimg.cc/tT442s21/Ismene.png",
        "genero": "femenino"
    },
    {
        "nombre": "Jaclyn Green",
        "url": "https://elbachira.github.io/Jaclyn-Green/",
        "imagen": "https://i.postimg.cc/dtytHPm9/Jaclyn-Green.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Javelle",
        "url": "https://elbachira.github.io/Javelle/",
        "imagen": "https://i.postimg.cc/W1cpxW5c/Javelle.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Ji-Hoon",
        "url": "https://elbachira.github.io/Ji-Hoon/",
        "imagen": "https://i.postimg.cc/rp8Vwd6h/Ji-Hoon.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Jinan",
        "url": "https://elbachira.github.io/Jinan/",
        "imagen": "https://i.postimg.cc/kGt9pK85/Jinan.png",
        "genero": "femenino"
    },
    {
        "nombre": "Kiyomi",
        "url": "https://elbachira.github.io/Kiyomi/",
        "imagen": "https://i.postimg.cc/14hPhXcr/Kiyomi.png",
        "genero": "femenino"
    },
    {
        "nombre": "Léa",
        "url": "https://elbachira.github.io/Lea/",
        "imagen": "https://i.postimg.cc/mDKhkbyt/Lea.png",
        "genero": "femenino"
    },
    {
        "nombre": "Liance V1",
        "url": "https://elbachira.github.io/Liance-V1-M/",
        "imagen": "https://i.postimg.cc/05Jb3w9m/Liance-V1-M.png",
        "genero": "femenino"
    },
    {
        "nombre": "Liance V2",
        "url": "https://elbachira.github.io/Liance-V2-M/",
        "imagen": "https://i.postimg.cc/fTckWQtR/Liance-V2-M.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Léontine",
        "url": "https://elbachira.github.io/Leontine/",
        "imagen": "https://i.postimg.cc/jSv5N6hV/Leontine.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Malphén",
        "url": "https://elbachira.github.io/Malphen/",
        "imagen": "https://i.postimg.cc/d1Ztzbcv/Malphen.png",
        "genero": "femenino"
    },
    {
        "nombre": "Noctael",
        "url": "https://elbachira.github.io/Noctael/",
        "imagen": "https://i.postimg.cc/mkQZr7r5/Noctael.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Naelin",
        "url": "https://elbachira.github.io/Naelin/",
        "imagen": "https://i.postimg.cc/4NgNS2Lk/Naelin.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Halle",
        "url": "https://elbachira.github.io/Halle/",
        "imagen": "https://i.postimg.cc/Cx60ScNK/Halle.png",
        "genero": "femenino"
    },
    {
        "nombre": "Regina",
        "url": "https://elbachira.github.io/Regina/",
        "imagen": "https://i.postimg.cc/SNSb9B1s/Regina.png",
        "genero": "femenino"
    },
    {
        "nombre": "Rivyn",
        "url": "https://elbachira.github.io/Rivyn/",
        "imagen": "https://i.postimg.cc/FH1tWj4X/Rivyn.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Serena",
        "url": "https://elbachira.github.io/Serena/",
        "imagen": "https://i.postimg.cc/N0r3YBFN/Serena.png",
        "genero": "femenino"
    },
    {
        "nombre": "Shanaya",
        "url": "https://elbachira.github.io/Shanaya/",
        "imagen": "https://i.postimg.cc/tJ9wh65f/Shanaya.png",
        "genero": "femenino"
    },
    {
        "nombre": "Estelle",
        "url": "https://elbachira.github.io/Estelle/",
        "imagen": "https://i.postimg.cc/j5T9PJwD/Estelle.png",
        "genero": "femenino"
    },
    {
        "nombre": "Tamsin",
        "url": "https://elbachira.github.io/Tamsin/",
        "imagen": "https://i.postimg.cc/jSD9QtHs/Tamsin.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Timaeas",
        "url": "https://elbachira.github.io/Timaeas/",
        "imagen": "https://i.postimg.cc/yN9btjpt/Timaeas.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Térencie",
        "url": "https://elbachira.github.io/Terencie/",
        "imagen": "https://i.postimg.cc/YS1db9hw/Terencie.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Wighild",
        "url": "https://elbachira.github.io/Wighild/",
        "imagen": "https://i.postimg.cc/MTqd4SQf/Wighild.png",
        "genero": "femenino"
    },
    {
        "nombre": "Winslie",
        "url": "https://elbachira.github.io/Winslie/",
        "imagen": "https://i.postimg.cc/1XHxTBXs/Winslie.jpg",
        "genero": "femenino"
    },
    {
        "nombre": "Yoo-Ryeong",
        "url": "https://elbachira.github.io/Yoo-Ryeong/",
        "imagen": "https://i.postimg.cc/tg5hsVs7/Yoo-Ryeong.png",
        "genero": "femenino"
    },
    {
        "nombre": "Yureth",
        "url": "https://elbachira.github.io/Yureth/",
        "imagen": "https://i.postimg.cc/d37dNH4T/Yureth.png",
        "genero": "femenino" // <-- La clave mágica
    }

    // --- Aquí seguirás añadiendo el resto de tus bots ---
    // Simplemente copia un bloque, pégalo y cambia los datos.
    // Recuerda poner una coma , entre cada bloque.
];
