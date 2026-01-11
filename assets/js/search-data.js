// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-acerca-de",
    title: "Acerca de",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-experiencia",
          title: "Experiencia",
          description: "Donde he trabajado a lo largo de los años",
          section: "Navigation",
          handler: () => {
            window.location.href = "/jobs/";
          },
        },{id: "nav-skills",
          title: "Skills",
          description: "Estas son algunas de las habilidades que he adquirido en mis años de experiencia",
          section: "Navigation",
          handler: () => {
            window.location.href = "/skills/";
          },
        },{id: "nav-proyectos",
          title: "Proyectos",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "ToDo...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-blog-blogspot",
              title: "Blog (Blogspot)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://luispichio.blogspot.com/";
              },
            },{id: "dropdown-locos-x-radio-radioafición",
              title: "Locos x Radio (radioafición)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://locosporlaradio.com.ar";
              },
            },{id: "dropdown-lw6dio-radioafición",
              title: "LW6DIO (radioafición)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://qsl.net/lw6dio/";
              },
            },{id: "post-exprimí-tu-linux-1-10-must-have-para-sacarle-mas-jugo-a-tu-terminal",
        
          title: 'Exprimí tu Linux #1 | 10 “must have” para sacarle mas jugo a... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Y arrancamos la serie con 10 herramientas de código abierto de propósito general (no pre-instaladas)...",
        section: "Posts",
        handler: () => {
          
            window.open("https://locosporlaradio.com.ar/2025/02/19/exprimi-tu-linux-1-10-must-have-para-sacarle-mas-jugo-a-tu-terminal/", "_blank");
          
        },
      },{id: "post-repetidora-de-banda-cruzada-del-hombre-pobre",
        
          title: 'Repetidora de banda cruzada “del hombre pobre” <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "En nuestro grupo de radioaficionados, siempre hemos buscado maneras de mejorar la actividad radial en...",
        section: "Posts",
        handler: () => {
          
            window.open("https://locosporlaradio.com.ar/2025/01/23/repetidora-de-banda-cruzada-del-hombre-pobre/", "_blank");
          
        },
      },{id: "post-arduino-generación-de-señales-de-vga-con-arduino-due",
        
          title: 'Arduino - Generación de señales de VGA con Arduino DUE <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://luispichio.blogspot.com/2016/06/arduino-generacion-de-senales-de-vga.html", "_blank");
          
        },
      },{id: "post-arduino-interfaz-para-joystick-de-family-game",
        
          title: 'Arduino - Interfaz para Joystick de Family Game <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://luispichio.blogspot.com/2015/06/arduino-interfaz-para-joystick-de.html", "_blank");
          
        },
      },{id: "post-arduino-generación-de-señales-de-vga-con-hardware-estádar",
        
          title: 'Arduino - Generación de señales de VGA con hardware estádar <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://luispichio.blogspot.com/2015/05/arduino-generacion-de-senales-de-vga.html", "_blank");
          
        },
      },{id: "post-fbbtelnet-consola-telnet-vía-web-para-fbb-bbs",
        
          title: 'FBBTelnet - Consola telnet vía web para FBB BBS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://luispichio.blogspot.com/2015/02/fbbtelnet-consola-telnet-via-web-para.html", "_blank");
          
        },
      },{id: "post-demoscene-fuego-parte-2",
        
          title: 'Demoscene - Fuego (Parte 2) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://luispichio.blogspot.com/2014/12/demoscene-fuego-parte-2.html", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-nuevo-año-gt-nueva-web",
          title: 'Nuevo año -&amp;gt; Nueva web',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/new_year_new_web/";
            },},{id: "projects-coriolis",
          title: 'Coriolis',
          description: "Caudalímetro másico de efecto coriolis Sistemas Industriales S.A. Q2/2011 - Q1/2014",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coriolis/";
            },},{id: "projects-pig",
          title: 'PIG',
          description: "Telesupervisión de efluentes pluviales / industriales Sistemas Industriales S.A. Q1/2017 - Q1/2018",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pig/";
            },},{id: "projects-processing-service",
          title: 'Processing Service',
          description: "Servicio de analítica de borde para Orbcomm IDP/ST Twindimension Q1/2021 - Actualidad",
          section: "Projects",handler: () => {
              window.location.href = "/projects/processing_service/";
            },},{id: "projects-ptag",
          title: 'PTAG',
          description: "Planta de tratamiento de aguas grises Sistemas Industriales S.A. Q4/2015 - Q1/2016",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ptag/";
            },},{id: "projects-mi-430",
          title: 'MI-430',
          description: "Caudalímetro electromagnético Sistemas Industriales S.A. Q4/2006 - Q1/2016",
          section: "Projects",handler: () => {
              window.location.href = "/projects/q7/";
            },},{id: "projects-ric",
          title: 'RIC',
          description: "Sistema de Telecontrol GRPS Tesacom S.A. Q4/2010 - Q2/2012",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ric/";
            },},{id: "projects-t-wizard",
          title: 'T.Wizard',
          description: "Aplicación de configuración para terminales Orbcomm IDP/ST Twindimension Q1/2023 - Actualidad",
          section: "Projects",handler: () => {
              window.location.href = "/projects/t_wizard/";
            },},{id: "projects-plataforma-iot",
          title: 'Plataforma IoT',
          description: "Plataforma de telemetría (front / back-end común) Sistemas Industriales S.A. Q2/2018 - Q4/2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/telemetry/";
            },},{id: "projects-vantar",
          title: 'Vantar',
          description: "Vehículo aereo no tripulado Grupo Euro S.A. q2/2017 - q3/2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vantar/";
            },},{
        id: 'social-blogger',
        title: 'Blogger',
        section: 'Socials',
        handler: () => {
          window.open("https://luispichio.blogspot.com", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%75%69%73%70%69%63%68%69%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/luispichio", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/luispichio", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
