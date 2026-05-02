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
        p2: "Utilizando artes, evangelismo y asistencia práctica, nos enfocamos en la restauración familiar y el amparo a niños y adolescentes. Con programas de capacitación misionera y voluntariado, la base capacita personas para servir e impactar la sociedad de forma relevante y transformadora.",
        nav: ["Calle", "Visitas", "Casinha", "CER"],
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

translateBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('active');
});

document.addEventListener('click', () => langMenu.classList.remove('active'));

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        
        // Tradução do Header e Texto Principal
        langText.innerText = content[lang].btn;
        document.querySelector('h1').innerHTML = content[lang].title;
        
        const paragraphs = document.querySelectorAll('.text-area p');
        paragraphs[0].innerText = content[lang].p1;
        paragraphs[1].innerText = content[lang].p2;
        
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link, index) => {
            link.innerText = content[lang].nav[index];
        });

        // --- TRADUÇÃO DO NOVO FOOTER ---
        document.querySelector('.contact-info h2').innerText = content[lang].footer.title;
        
        // Tradução dos elementos da classe info-group (Whatsapp e Endereço)
        const infoLabels = document.querySelectorAll('.info-group label');
        if (infoLabels.length >= 3) {
            infoLabels[1].innerText = content[lang].footer.whatsappLabel;
            infoLabels[2].innerText = content[lang].footer.addressLabel;
        }

        document.querySelector('.social-section label').innerText = content[lang].footer.follow;
        
        // Labels do Formulário
        const labels = document.querySelectorAll('.contact-form label');
        labels[0].innerText = content[lang].footer.nameLabel;
        labels[1].innerText = content[lang].footer.emailLabel;
        labels[2].innerText = content[lang].footer.msgLabel;

        // Placeholders e Botão
        document.querySelector('.contact-form input[type="text"]').placeholder = content[lang].footer.namePh;
        document.querySelector('.contact-form input[type="email"]').placeholder = content[lang].footer.emailPh;
        document.querySelector('.contact-form textarea').placeholder = content[lang].footer.msgPh;
        document.querySelector('.send-btn').innerText = content[lang].footer.sendBtn;
    });
});