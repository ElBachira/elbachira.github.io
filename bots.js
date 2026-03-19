// Archivo bots.js completo y actualizado

const BOTS_LIST = [
    // =================================================================
    // --- BOTS MASCULINOS ---
    // =================================================================
    {
        "nombre": "Alejandro",
        "url": "https://elbachira.github.io/Alejandro/",
        "imagen": "https://files.catbox.moe/pi6xh1.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Altherian",
        "url": "https://elbachira.github.io/Altherian/",
        "imagen": "https://files.catbox.moe/5jy43s.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Brahms",
        "url": "https://elbachira.github.io/Brahms/",
        "imagen": "https://files.catbox.moe/q4x0nc.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Drexler",
        "url": "https://elbachira.github.io/Drexler/",
        "imagen": "https://files.catbox.moe/yas4xb.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Edward Próximamente",
        "url": "https://elbachira.github.io/Kardi/",
        "imagen": "", 
        "genero": "masculino"
    },
    {
        "nombre": "Evress",
        "url": "https://elbachira.github.io/Evress/",
        "imagen": "https://files.catbox.moe/5sm4hp.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Haru",
        "url": "https://elbachira.github.io/Haru/",
        "imagen": "https://files.catbox.moe/b7ycmi.webp", 
        "genero": "masculino"
    },
    {
        "nombre": "Ismen",
        "url": "https://elbachira.github.io/Ismen/",
        "imagen": "https://files.catbox.moe/ukfoh2.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Ivaren",
        "url": "https://elbachira.github.io/Ivaren/",
        "imagen": "https://i.postimg.cc/NfzfyVtK/stellan.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Jack Heart",
        "url": "https://elbachira.github.io/JackHeart/",
        "imagen": "https://i.postimg.cc/tRzsg27v/image-3.jpg", 
        "genero": "masculino"
    },
    {
        "nombre": "Jessamy",
        "url": "https://elbachira.github.io/Jessamy/",
        "imagen": "https://files.catbox.moe/jzvcnh.webp", 
        "genero": "masculino"
    },
    {
        "nombre": "Juan",
        "url": "https://elbachira.github.io/Juan/",
        "imagen": "https://files.catbox.moe/7qfwsd.jpg", 
        "genero": "masculino"
    },
    {
        "nombre": "Kardi",
        "url": "https://elbachira.github.io/Kardi/",
        "imagen": "https://files.catbox.moe/gwbdnw.jpg", 
        "genero": "masculino"
    },
    {
        "nombre": "Lenny",
        "url": "https://elbachira.github.io/Lenny/",
        "imagen": "https://files.catbox.moe/5tv1t4.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Léonel",
        "url": "https://elbachira.github.io/Leonel/",
        "imagen": "https://files.catbox.moe/rnmoa2.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Megamo",
        "url": "https://elbachira.github.io/Megamo-/",
        "imagen": "https://files.catbox.moe/pi6xh1.jpg",
        "genero": "masculino"
    },
    {
        "nombre": "Osorō",
        "url": "https://elbachira.github.io/Osoro/",
        "imagen": "https://files.catbox.moe/plqy7z.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Rhykar",
        "url": "https://elbachira.github.io/Rhykar/",
        "imagen": "https://i.postimg.cc/v8J5CXp0/stellan.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Shayen",
        "url": "https://elbachira.github.io/Shayen/",
        "imagen": "https://files.catbox.moe/u02ff8.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Silas",
        "url": "https://elbachira.github.io/Silas/",
        "imagen": "https://files.catbox.moe/iwhzh0.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Tae-Ha",
        "url": "https://elbachira.github.io/Tae-Ha/",
        "imagen": "https://files.catbox.moe/96hwnw.png", 
        "genero": "masculino"
    },
    {
        "nombre": "Archibald",
        "url": "https://elbachira.github.io/Archibald/",
        "imagen": "https://files.catbox.moe/your_archibald_image.jpg", 
        "genero": "masculino"
    },

    // =================================================================
    // --- BOTS FEMENINOS (Edita estos datos) ---
    // =================================================================
    {
        "nombre": "Próximamente",
        "url": "https://elbachira.github.io/Alya/",
        "imagen": "https://files.catbox.moe/ejemplo1.jpg", 
        "genero": "femenino"
    },
            {
        "nombre": "Altheris",
        "url": "https://elbachira.github.io/Altheris/",
        "imagen": "https://files.catbox.moe/35vw3y.png", 
        "genero": "femenino"
    },
    {
        "nombre": "Ismene",
        "url": "https://elbachira.github.io/Ismene/",
        "imagen": "https://files.catbox.moe/933r1r.png", 
        "genero": "femenino"
    },
    {
        "nombre": "Jessamell",
        "url": "https://elbachira.github.io/Jessamell/",
        "imagen": "https://files.catbox.moe/2fckts.webp", 
        "genero": "femenino"
    },
    {
        "nombre": "Próximamente",
        "url": "https://elbachira.github.io/Mika/",
        "imagen": "https://files.catbox.moe/ejemplo3.jpg", 
        "genero": "femenino"
    }
];
