const translateBtn = document.getElementById('translate-btn');
const langMenu = document.getElementById('lang-menu');
const langText = document.getElementById('lang-text');

const content = {
    pt: {
        btn: "Português",
        title: 'Jocum Marc<img src="imagens/icon.png" alt="o" class="title-icon"> Zero',
        p1: "Jocum Marco Zero atua no coração do Recife, transformando realidades de comunidades vulneráveis. Através de ações sociais e discipulado, nós buscamos trazer alegria e esperança, refletindo o amor de Deus em áreas de grande necessidade social.",
        p2: "Utilizando artes, evangelismo e assistência prática, focamos na restauração familiar e no amparo a crianças e adolescentes. Com programas de treinamento missionário e voluntariado, a base capacita pessoas para servir e impactar a sociedade de forma relevante e transformadora.",
        nav: ["Rua", "Visitas", "Casinha", "CER"],
        projectsDesc: [
            "Abordagem nas ruas do Recife com evangelismo junto à população de rua, oferecendo um ombro acolhedor, brincadeiras, cinema e esperança.",
            "Acompanhamento e construção de vínculos nas comunidades, levando uma palavra de consolo e assistência às famílias.",
            "Um espaço dedicado ao cuidado de crianças e pré-adolescentes, oferecendo reforço escolar, atividades lúdicas e princípios cristãos em um ambiente seguro.",
            "Treinamento intensivo desenhado para capacitar missionários e obreiros a atuar na defesa, proteção e transformação de crianças em situações de vulnerabilidade."
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
        title: 'YWAM Marc<img src="imagens/icon.png" alt="o" class="title-icon"> Zero',
        p1: "YWAM Marco Zero operates in the heart of Recife, transforming realities of vulnerable communities. Through social actions and discipleship, we seek to bring joy and hope, reflecting God's love in areas of great social need.",
        p2: "Using arts, evangelism, and practical assistance, we focus on family restoration and support for children and teenagers. Through missionary training and volunteer programs, the base empowers people to serve and impact society in a relevant and transformative way.",
        nav: ["Streets", "Visits", "Casinha", "CER"],
        projectsDesc: [
            "Outreach on the streets of Recife with evangelism among the homeless population, offering a welcoming shoulder, games, movies, and hope.",
            "Monitoring and building bonds in communities, bringing a word of comfort and assistance to families.",
            "A space dedicated to the care of children and pre-adolescents, offering school reinforcement, play activities, and Christian principles in a safe environment.",
            "Intensive training designed to empower missionaries and workers to act in the defense, protection, and transformation of children in vulnerable situations."
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
        title: 'Jucum Marc<img src="imagens/icon.png" alt="o" class="title-icon"> Zero',
        p1: "Jucum Marco Zero actúa en el corazón de Recife, transformando realidades de comunidades vulnerables. A través de acciones sociales y discipulado, buscamos traer alegría e esperanza, reflejando el amor de Dios en áreas de gran necesidad social.",
        p2: "Utilizando artes, evangelismo y asistencia prática, nos enfocamos en la restauración familiar y el amparo a niños y adolescentes. Con programas de capacitación misionera y voluntariado, la base capacita personas para servir e impactar la sociedad de forma relevante e transformadora.",
        nav: ["Calle", "Visitas", "Casinha", "CER"],
        projectsDesc: [
            "Abordaje en las calles de Recife con evangelismo junto a la población sin hogar, ofreciendo un hombro acogedor, juegos, cine e esperanza.",
            "Acompañamiento y construcción de vínculos en las comunidades, llevando una palabra de consuelo y asistencia a las familias.",
            "Un espacio dedicado al cuidado de niños y preadolescentes, ofreciendo refuerzo escolar, actividades lúdicas y principios cristianos en un ambiente seguro.",
            "Capacitación intensiva creado para capacitar a misioneros y obreros para actuar en la defensa, protección y transformación de niños en situaciones de vulnerabilidad."
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

// --- LOGICA DE ROLAGEM (Scroll) ---
document.querySelector('.nav-links').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        const targetElement = document.querySelector(id);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// --- CONFIGURAÇÃO INICIAL DOS IDS ---
function init() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const ids = ['#rua', '#visitas', '#casinha', '#cer'];
    navLinks.forEach((link, i) => link.setAttribute('href', ids[i]));
}
init();

// --- ATUALIZAÇÃO DE IDIOMA ---
function updateLanguage(lang) {
    langText.innerText = content[lang].btn;
    document.querySelector('h1').innerHTML = content[lang].title;
    
    const p = document.querySelectorAll('.text-area p');
    if(p.length >= 2) { p[0].innerText = content[lang].p1; p[1].innerText = content[lang].p2; }
    
    document.querySelectorAll('.nav-links a').forEach((link, i) => link.innerText = content[lang].nav[i]);

    document.querySelectorAll('.project-section').forEach((section, i) => {
        // Ajuste para o título do CER ser o nome completo da escola
        if (content[lang].nav[i] === "CER" || content[lang].nav[i] === "Calle") {
             // Verifica se é a última seção (CER) para aplicar o título estendido
             if (i === 3) {
                section.querySelector('.project-title').innerText = content[lang].cerTitle;
             } else {
                section.querySelector('.project-title').innerText = content[lang].nav[i];
             }
        } else {
            section.querySelector('.project-title').innerText = content[lang].nav[i];
        }
        section.querySelector('.project-content p').innerText = content[lang].projectsDesc[i];
    });

    // Footer
    document.querySelector('.contact-info h2').innerText = content[lang].footer.title;
    const labels = document.querySelectorAll('.info-group label');
    if(labels.length >= 3) { labels[1].innerText = content[lang].footer.whatsappLabel; labels[2].innerText = content[lang].footer.addressLabel; }
    document.querySelector('.social-section label').innerText = content[lang].footer.follow;
    
    const fLabels = document.querySelectorAll('.contact-form label');
    fLabels[0].innerText = content[lang].footer.nameLabel;
    fLabels[1].innerText = content[lang].footer.emailLabel;
    fLabels[2].innerText = content[lang].footer.msgLabel;

    document.querySelector('input[name="name"]').placeholder = content[lang].footer.namePh;
    document.querySelector('input[name="email"]').placeholder = content[lang].footer.emailPh;
    document.querySelector('textarea[name="message"]').placeholder = content[lang].footer.msgPh;
    document.querySelector('.send-btn').innerText = content[lang].footer.sendBtn;
}

translateBtn.addEventListener('click', (e) => { e.stopPropagation(); langMenu.classList.toggle('active'); });
document.addEventListener('click', () => langMenu.classList.remove('active'));
document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => updateLanguage(opt.getAttribute('data-lang')));
});

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
