const translateBtn = document.getElementById('translate-btn');
const langMenu = document.getElementById('lang-menu');
const langText = document.getElementById('lang-text');

const content = {
    pt: {
        btn: "Português",
        readMore: "Ler mais",
        readLess: "Ler menos",
        title: 'Jocum Marc<img src="imagens/icon.png" alt="o" class="title-icon"> Zero',
        p1: "Jocum Marco Zero atua no coração do Recife, transformando realidades de comunidades vulneráveis. Através de ações sociais e discipulado, nós buscamos trazer alegria e esperança, refletindo o amor de Deus em áreas de grande necessidade social.",
        p2: "Utilizando artes, evangelismo e assistência prática, focamos na restauração familiar e no amparo a crianças e adolescentes. Com programas de treinamento missionário e voluntariado, a base capacita pessoas para servir e impactar a sociedade de forma relevante e transformadora.",
        nav: ["Rua", "Visitas", "Casinha", "CER"],
        projectsDesc: [
            "A atuação da Jocum Marco Zero nas ruas do Recife nasce do esforço de enxergar a cidade sob a ótica de crianças e adolescentes que, diariamente, deixam seus lares em busca de algo que os preencha.",
            "Acompanhamento e construção de vínculos nas comunidades, levando uma palavra de consolo e assistência às famílias.",
            "Um espaço dedicado ao cuidado de crianças e pré-adolescentes, oferecendo reforço escolar e atividades lúdicas.",
            "Treinamento intensivo desenhado para capacitar missionários e obreiros a atuar na defesa e proteção de crianças."
        ],
        extraTexts: [
            "Ao ocuparmos esse espaço com evangelismo, escuta ativa e lazer, como sessões de cinema e brincadeiras, nossos paradigmas são confrontados. <br><br>Percebemos que a rua não oferece apenas perigos, mas também laços de amizade, lazer e um senso de pertencimento que, muitas vezes, falta em casa. Entretanto, essa liberdade é frequentemente acompanhada pelo uso precoce de drogas e pela exposição a riscos severos. O desafio se torna complexo quando encontramos jovens de apenas doze anos que resistem ao retorno familiar devido a contextos de negligência e violência doméstica, preferindo a ausência de regras das ruas à precariedade de seus lares. <br><br>Nossa missão, realizada duas vezes por semana, vai além da assistência; buscamos construir pontes de confiança através da oração e do acolhimento. O objetivo é mostrar que a liberdade encontrada nas ruas é ilusória e que há um caminho de dignidade e esperança fora da decadência, trabalhando para que eles compreendam que o melhor lugar para se estar é junto à família, desde que esta seja um ambiente de real proteção e cuidado.",
            "Visitas comunitárias focadas em ouvir e servir as necessidades locais com amor e dedicação.",
            "Através de princípios cristãos em um ambiente seguro, buscamos transformar o futuro da próxima geração desde cedo.",
            "O CER foca na transformação de realidades vulneráveis através de uma preparação profunda e espiritual para o campo missionário."
        ],
        cerTitle: "CER (Escola Crianças em Risco)",
        footer: {
            title: "Entre em contato :)",
            whatsappLabel: "Whatsapp:",
            addressLabel: "Endereço:",
            follow: "Siga-nos",
            nameLabel: "Seu Nome",
            namePh: "Seu nome completo",
            emailLabel: "Endereço de e-mail",
            emailPh: "Seu e-mail",
            msgLabel: "Mensagem",
            msgPh: "Escreva algo...",
            sendBtn: "Enviar"
        }
    },
    en: {
        btn: "English",
        readMore: "Read more",
        readLess: "Read less",
        title: 'YWAM Marc<img src="imagens/icon.png" alt="o" class="title-icon"> Zero',
        p1: "YWAM Marco Zero operates in the heart of Recife, transforming realities of vulnerable communities. Through social actions and discipleship, we seek to bring joy and hope, reflecting God's love in areas of great social need.",
        p2: "Using arts, evangelism, and practical assistance, we focus on family restoration and support for children and teenagers. Through missionary training and volunteer programs, the base empowers people to serve and impact society in a relevant and transformative way.",
        nav: ["Streets", "Visits", "Casinha", "CER"],
        projectsDesc: [
            "YWAM Marco Zero's work on the streets of Recife is born from the effort to see the city through the eyes of children and teenagers who, daily, leave their homes in search of something to fill them.",
            "Monitoring and building bonds in communities, bringing a word of comfort and assistance to families.",
            "A space dedicated to the care of children and pre-adolescents, offering school reinforcement and recreational activities.",
            "Intensive training designed to empower missionaries and workers to act in the defense and protection of children."
        ],
        extraTexts: [
            "By occupying this space with evangelism, active listening, and leisure, such as movie sessions and games, our paradigms are challenged. <br><br>We realize that the street doesn't only offer dangers, but also bonds of friendship, leisure, and a sense of belonging that is often lacking at home. However, this freedom is frequently accompanied by early drug use and exposure to severe risks. The challenge becomes complex when we find youths as young as twelve who resist returning home due to contexts of neglect and domestic violence, preferring the absence of rules on the streets to the precociousness of their homes. <br><br>Our mission, carried out twice a week, goes beyond assistance; we seek to build bridges of trust through prayer and welcoming. The goal is to show that the freedom found on the streets is illusory and that there is a path of dignity and hope away from decay, working so they understand that the best place to be is with family, provided it is an environment of real protection and care.",
            "Community visits focused on listening and serving local needs with love and dedication.",
            "Through Christian principles in a safe environment, we seek to transform the future of the next generation from an early age.",
            "CER focuses on transforming vulnerable realities through deep and spiritual preparation for the mission field."
        ],
        cerTitle: "CER (Children at Risk School)",
        footer: {
            title: "Get in touch :)",
            whatsappLabel: "Whatsapp:",
            addressLabel: "Address:",
            follow: "Follow us",
            nameLabel: "Your Name",
            namePh: "Your full name",
            emailLabel: "Email address",
            emailPh: "Your email address",
            msgLabel: "Message",
            msgPh: "Write something....",
            sendBtn: "Send"
        }
    },
    es: {
        btn: "Español",
        readMore: "Leer más",
        readLess: "Leer menos",
        title: 'Jucum Marc<img src="imagens/icon.png" alt="o" class="title-icon"> Zero',
        p1: "Jucum Marco Zero actúa en el corazón de Recife, transformando realidades de comunidades vulnerables. A través de acciones sociales e discipulado, buscamos traer alegría e esperanza, reflejando el amor de Dios en áreas de gran necesidad social.",
        p2: "Utilizando artes, evangelismo y asistencia prática, nos enfocamos en la restauración familiar y el amparo a niños y adolescentes. Con programas de capacitación misionera y voluntariado, la base capacita personas para servir e impactar la sociedad de forma relevante e transformadora.",
        nav: ["Calle", "Visitas", "Casinha", "CER"],
        projectsDesc: [
            "El trabalho de Jucum Marco Zero en las calles de Recife nace del esfuerzo de ver la ciudad desde la perspectiva de los niños y adolescentes que salen de sus hogares a diario.",
            "Acompañamiento y construcción de vínculos en las comunidades, llevando una palavra de consuelo y asistencia a las familias.",
            "Un espaço dedicado al cuidado de niños e preadolescentes, ofreciendo refuerzo escolar y actividades lúdicas.",
            "Capacitación intensiva creado para capacitar a misioneros y obreros para actuar en la defensa y protección de niños.",
        ],
        extraTexts: [
            "Al ocupar este espaço con evangelismo, escucha activa y recreación, como sesiones de cine y juegos, nuestros paradigmas son confrontados. <br><br>Nos damos cuenta de que la calle no solo ofrece peligros, sino también lazos de amistad, ocio y un sentido de pertenencia que muchas veces falta no hogar. Sin embargo, esta libertad suele ir acompañada del consumo precoz de drogas e la exposición a graves riesgos. Nossa missão busca construir pontes de confiança para mostrar que hay un camino de dignidad fuera de las calles.",
            "Visitas comunitarias enfocadas en escuchar y servir las necesidades locales con amor e dedicación.",
            "A través de princípios cristianos en un ambiente seguro, buscamos transformar el futuro de la próxima generación desde temprana edad.",
            "CER se enfoca en la transformación de realidades vulnerables através de una preparación profunda y espiritual para el campo misionero."
        ],
        cerTitle: "CER (Escuela Niños en Riesgo)",
        footer: {
            title: "Ponte en contacto :)",
            whatsappLabel: "Whatsapp:",
            addressLabel: "Dirección:",
            follow: "Síguenos",
            nameLabel: "Tu Nombre",
            namePh: "Tu nombre completo",
            emailLabel: "Correo electrónico",
            emailPh: "Tu correo electrónico",
            msgLabel: "Mensaje",
            msgPh: "Escribe algo....",
            sendBtn: "Enviar"
        }
    }
};

function updateLanguage(lang) {
    langText.innerText = content[lang].btn;
    document.querySelector('h1').innerHTML = content[lang].title;
    
    const pIntro = document.querySelectorAll('.text-area p');
    if(pIntro.length >= 2) { 
        pIntro[0].innerText = content[lang].p1; 
        pIntro[1].innerText = content[lang].p2; 
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, i) => link.innerText = content[lang].nav[i]);

    document.querySelectorAll('.project-section').forEach((section, i) => {
        const titleElement = section.querySelector('.project-title');
        const descElement = section.querySelector('.intro-text') || section.querySelector('.project-content p');
        const extraContentElement = section.querySelector('.extra-content p') || section.querySelector('.extra-content');
        const btnRead = section.querySelector('.read-more-btn');
        const extraDiv = section.querySelector('.extra-content');

        if (titleElement) {
            titleElement.innerText = (i === 3) ? content[lang].cerTitle : content[lang].nav[i];
        }

        if (descElement) {
            descElement.innerText = content[lang].projectsDesc[i];
        }

        if (extraContentElement) {
            extraContentElement.innerHTML = content[lang].extraTexts[i];
        }

        if (btnRead && extraDiv) {
            const isActive = extraDiv.classList.contains('active');
            btnRead.innerText = isActive ? content[lang].readLess : content[lang].readMore;
        }
    });

    document.querySelector('.contact-info h2').innerText = content[lang].footer.title;
    const labels = document.querySelectorAll('.info-group label');
    if(labels.length >= 3) { 
        labels[1].innerText = content[lang].footer.whatsappLabel; 
        labels[2].innerText = content[lang].footer.addressLabel; 
    }
    document.querySelector('.social-section label').innerText = content[lang].footer.follow;
    
    const fLabels = document.querySelectorAll('.contact-form label');
    if(fLabels.length >= 3){
        fLabels[0].innerText = content[lang].footer.nameLabel;
        fLabels[1].innerText = content[lang].footer.emailLabel;
        fLabels[2].innerText = content[lang].footer.msgLabel;
    }

    document.querySelector('input[name="name"]').placeholder = content[lang].footer.namePh;
    document.querySelector('input[name="email"]').placeholder = content[lang].footer.emailPh;
    document.querySelector('textarea[name="message"]').placeholder = content[lang].footer.msgPh;
    document.querySelector('.send-btn').innerText = content[lang].footer.sendBtn;
}

translateBtn.onclick = (e) => { e.stopPropagation(); langMenu.classList.toggle('active'); };
document.onclick = () => langMenu.classList.remove('active');

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.onclick = () => updateLanguage(opt.getAttribute('data-lang'));
});

const initApp = () => {
    // CORREÇÃO DA NAVBAR: Enviando para as seções corretas
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
    });

    document.querySelectorAll('.project-section').forEach(section => {
        const slider = section.querySelector('.instagram-slider');
        const wrapper = section.querySelector('.slides-wrapper');
        const dotsContainer = section.querySelector('.dots-container');
        const progressFill = section.querySelector('.progress-fill');
        const slides = section.querySelectorAll('.slide');
        
        if (!slider || !dotsContainer) return;

        let currentIndex = 0;
        let progress = 0;
        let isPaused = false;

        dotsContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if(i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }
        const dots = dotsContainer.querySelectorAll('.dot');

        const moveSlide = (index) => {
            currentIndex = (index + slides.length) % slides.length;
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === (currentIndex % 3)));
            progress = 0;
        };

        // --- LÓGICA DE PAUSA (ALTERADA) ---

        // Desktop: Manter pressionado para pausar e sumir barra/dots
        slider.onmousedown = () => {
            if (window.innerWidth >= 800) {
                isPaused = true;
                slider.classList.add('paused');
            }
        };

        window.addEventListener('mouseup', () => {
            if (window.innerWidth >= 800 && isPaused) {
                isPaused = false;
                slider.classList.remove('paused');
            }
        });

        // Responsivo: Clicar para travar/destravar
        slider.onclick = (e) => {
            if (window.innerWidth < 800) {
                isPaused = !isPaused;
                if (isPaused) {
                    slider.classList.add('paused');
                } else {
                    slider.classList.remove('paused');
                }
            }
        };

        setInterval(() => {
            if (!isPaused) {
                progress += 1.1;
                if(progressFill) progressFill.style.width = `${progress}%`;
                if(progress >= 100) moveSlide(currentIndex + 1);
            }
        }, 35);
    });

    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.onclick = () => {
            const extra = btn.closest('.project-section').querySelector('.extra-content');
            const isActive = extra.classList.toggle('active');
            const lang = (langText.innerText === "English") ? "en" : (langText.innerText === "Español" ? "es" : "pt");
            btn.innerText = isActive ? content[lang].readLess : content[lang].readMore;
        };
    });
};

document.addEventListener('DOMContentLoaded', initApp);

const backToTopBtn = document.getElementById('back-to-top');
window.onscroll = () => {
    if (window.scrollY > 400) backToTopBtn.classList.add('show');
    else backToTopBtn.classList.remove('show');
};
backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
