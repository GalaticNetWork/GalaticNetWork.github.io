var tsEntertainmentApp = angular.module('tsEntertainmentApp', []);
tsEntertainmentApp.controller('VenuesListCtrl', function($scope) {
  $scope.venues =  [{
      
      "title" : "microfreesoft",
      "des_detallada" : "microfreesoft webos de windows 2.0, windows 3.1, windows xp",
      "code_clasf" : "webos",
      "keywords" : "webos, windows xp, windows 3.1, windows 2.0",
      "anio" : "2023",
      "des_clasf" : "https://microfreesoft.neocities.org/"
    }, {
       "title" : "DuckDuckGo ",
      "des_detallada" : " Consiste en un buscador web o motor de busqueda independiente que no recopila data de los usuarios.",
      "code_clasf" : "search",
      "keywords" : "search, motor de busqueda, buscador, DuckDuckGo ",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/search/duckgo/"
    }, {
       "title" : "Google",
      "des_detallada" : "Da como resultado de busqueda informacion subterranea que no entrega ningun motor de busqueda en sus primeros resultados.",
      "code_clasf" : "search",
      "keywords" : "search, motor de busqueda,buscador, Google",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/google/index.html"
    }, {
       "title" : "Yahoo",
      "des_detallada" : "Portal de busqueda en la web como fuente alternativa de informacion",
      "code_clasf" : "search",
      "keywords" : "yahoo, search, buscador, motor de busqueda",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/"
    }, {
      "title" : "Yahoo",
      "des_detallada" : "El buscador mas rudo de la internet, Portal de busqueda en la web como fuente alternativa de informacion",
      "code_clasf" : "site",
      "keywords" : "yahoo, search, buscador, portal, site",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/search/"
    }, {
      "title" : "Yahoo newscities",
      "des_detallada" : "Portal de busqueda de una version de geocities newscities",
      "code_clasf" : "search",
      "keywords" : "yahoo, search, buscador, newsities, geocities",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/old97/"
    }, {
      "title" : "Yahoo Geocities",
      "des_detallada" : "Portal de busqueda en yahoo geocities portal para creacion de paginas web personales agrupadas en distintas categorias",
      "code_clasf" : "search",
      "keywords" : "yahoo, search, buscador, geocities",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/old97/yahoo"
    }, {
      "title" : "Yahoo geocities ",
      "des_detallada" : "Portal de creacion de paginas web agrupadas por categorias",
      "code_clasf" : "site",
      "keywords" : "yahoo, site, page, portal, paginas web",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/geocities/"
    }, {
      "title" : "Yahoo - A Guide to WWW",
      "des_detallada" : "Uno de los primeros catalogos de internet en donde sus enlaces son paginas web de los primeros tiempos de la www.",
      "code_clasf" : "search",
      "keywords" : "yahoo, guide, catalogo web ",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/old94/"
    }, {
      "title" : "Directorio yahoo",
      "des_detallada" : "Reunion de los principales links utiles para la busqueda de informacion agrupados en categorias en especial blogs de tumblr",
      "code_clasf" : "search",
      "keywords" : "yahoo, directory, directorio, tumblr, blogs",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/old97/espanol"
    }, {
      "title" : "Tumblr",
      "des_detallada" : "blog de tumblr de imagenes",
      "code_clasf" : "Tumblr",
      "keywords" : "yahoo, tumblr, blog, blog de imagenes",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/blog/Tumblelog"
    }, {
      "title" : "Yahoo ligans The web guide for kings",
      "des_detallada" : "El sitio, creado por Yahoo y lleno de contenido cuidadosamente seleccionado para infantes",
      "code_clasf" : "site",
      "keywords" : "yahoo, kings, site, portal , infantes",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/catalogos/ligans/ligans"
    }, {
      "title" : "Yahoo! Answers",
      "des_detallada" : "Portal que permitia a sus usuarios tanto formular preguntas como responderlas. Para hacerlo, el usuario tenia que tener una cuenta Yahoo!. Las preguntas eran ordenadas mediante categorias que agilizaban el tiempo de respuesta por parte de los usuarios ",
      "code_clasf" : "site",
      "keywords" : "yahoo,site, portal, answers, preguntas,respuestas ",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/answer"
    }, {
      "title" : "Yahoo Flick",
      "des_detallada" : "es un sitio web que permite almacenar, ordenar, buscar, vender? y compartir fotografias o videos en linea,",
      "code_clasf" : "site",
      "keywords" : "yahoo, fotos, videos, site, portal,",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/yahoo/flick/"
    }, {
     "title" : "Bing",
      "des_detallada" : "Portal de busqueda de informacion especializado en la ciencia y tecnologia finanzas como de informacion sobre microsoft",
      "code_clasf" : "search",
      "keywords" : "Bing, search, buscador, motor de busqueda",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/search/bing/"
    }, {
      "title" : "lycos tripod",
      "des_detallada" : "Es un indice automatizado en su totalidad comenzo como un proyecto en una universidad su busquedas da como resultados paginas web alojadas servidor de tripod y angelfire",
      "code_clasf" : "search",
      "keywords" : "lycos, tripod, search, buscador, motor de busqueda",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/search/lycosearch"
    }, {
      "title" : "Facebook",
      "des_detallada" : "Es una red social que fue creada para poder mantener en contacto a personas, y que estos pudieran compartir informacion, noticias y contenidos audiovisuales con sus propios amigos y familiares..",
      "code_clasf" : "social",
      "keywords" : "red social, social, facebook, meta",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/facebook/"
    }, {
      "title" : "Twitter",
      "des_detallada" : "Portal de busqueda en la web como fuente alternativa de informacion",
      "code_clasf" : "social",
      "keywords" : "red social, social, twitter, x.com",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/twitter/"
	}, {
      "title" : "Blogger",
      "des_detallada" : "Blogger es un servicio creado por Pyra Labs y adquirido por Google en el año 2003, que permite crear y publicar una bitacora en linea. ",
      "code_clasf" : "blog",
      "keywords" : "blogger, blogs, google,site",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/google/stanford/blogger"
    }, {
      "title" : "Google Sites",
      "des_detallada" : "Google Sites es una aplicación web , que te permite crear un sitio web tú mismo",
      "code_clasf" : "site",
      "keywords" : "google sites, web, personales, google",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/google/site/"
    }, {
      "title" : "Youtobe",
      "des_detallada" : "videos para hacer proyectos de productos marca y tecnologia artesanal, esta pagina web es similar a la primera version de youtobe!",
      "code_clasf" : "site",
      "keywords" : "youtobe, videos, google",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/youtobe/"
    }, {
      "title" : "NewTobe ",
      "des_detallada" : "youtobe videos en vivo tendencias suscripciones biblioteca historial mis videos ",
      "code_clasf" : "site",
      "keywords" : "youtobe, videos, google",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/youtobe/clon"
    }, {
      "title" : "saxum station",
      "des_detallada" : "escucha emisora de radio saxum rock music radio stations Rock Music, Punk Rock,Heavy Metal, Folk Rock,Rock Industrial.",
      "code_clasf" : "page",
      "keywords" : "radio, tv, music, rock",
      "anio" : "2023",
      "des_clasf" : "https://sciostation.github.io/saxum.html"
    }, {
      "title" : "Radio Natio Station",
      "des_detallada" : "radio Station natio con programación cultural, músical y de actualidad.",
      "code_clasf" : "page",
      "keywords" : "radio, noticias, musica",
      "anio" : "2023",
      "des_clasf" : "https://sciostation.github.io/natio.html"
    }, {
      "title" : "dia fm",
      "des_detallada" : "radio on line radio por internet escucha las principales emisoras de zero radio.",
      "code_clasf" : "page",
      "keywords" : "radio, dial, fm , zeno",
      "anio" : "2023",
      "des_clasf" : "https://sciostation.github.io/radiointernet/"
    }, {
     "title" : "Legendarium Tv",
      "des_detallada" : "plataforma puede mirar canales de TV en vivo",
      "code_clasf" : "site",
      "keywords" : "tv, television, canales tv",
      "anio" : "2023",
      "des_clasf" : "https://legendarium.neocities.org/tv/"
    }, {
      "title" : "Universos Creativos",
      "des_detallada" : "poemas,cuentos,ensayos,el escritor universal , brinda placer mental y emocional",
      "code_clasf" : "blogs",
      "keywords" : "poesia, cuentos,literatura, ensayos",
      "anio" : "2023",
      "des_clasf" : "https://universoscreativos.blogspot.com/"
    }, {
      "title" : "El Intelectual",
      "des_detallada" : "periodico virtual para gente que quiere cambiar el mundo de una forma inteligente hace parte del sistema webunderground",
      "code_clasf" : "blogs",
      "keywords" : "periodico, virtual, actualiadad",
      "anio" : "2023",
      "des_clasf" : "https://newspaparintelectual.blogspot.com/"
    }, {
      "title" : "Documentos Historicos",
      "des_detallada" : "COMO USAR LOS DIFERENTES DOCUMENTOS PARA APRENDER HISTORIA Y RECORDAR EVENTOS",
      "code_clasf" : "blogs",
      "keywords" : "historia, blogs, diario,cronicas, efemerides, confesiones, memorias",
      "anio" : "2023",
      "des_clasf" : "https://documentoshistor.blogspot.com/"
    }, {
      "title" : "newscities",
      "des_detallada" : "newscities es una version de geocities que agrupa temas por barrios y regiones para clasificar su contenido.",
      "code_clasf" : "page",
      "keywords" : "geocities, newscities, page",
      "anio" : "2023",
      "des_clasf" : "https://newscities.neocities.org/"
    }, {
      "title" : "MySpace",
      "des_detallada" : "El objetivo principal de MySpace era reemplazar las simples webs personales por una comunidad online que aglutinase, a través de un perfil, la información de cada usuario. Además, donde pudiesen compartir sus fotos, música favorita y comentarios.",
      "code_clasf" : "social",
      "keywords" : "social, web personales, MySpace",
      "anio" : "2023",
      "des_clasf" : "https://newscities.neocities.org/myspace/home"
    }, {
     "title" : "Mr X",
      "des_detallada" : "Tu Guia en la vida con inteligencia artificial",
      "code_clasf" : "page",
      "keywords" : "Mr X, superacion, personal, guia",
      "anio" : "2023",
      "des_clasf" : "https://galaticnetwork.github.io/Mr x/"
    }, {
      "title" : "webunderground",
      "des_detallada" : " webunderground es subterranea implica que es distinta a los que marcan los canones, en difentente y prentende dar su informacion desde un punto de vista alterno a los principales portales de internet ",
      "code_clasf" : "page",
      "keywords" : "webunderground, page",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/"
    }, {
      "title" : "Mastodon",
      "des_detallada" : "Mastodon es una red social libre creada por el programador aleman Eugen Rochko,? fue desarrollada para implementar un conjunto de redes sociales de microblogueo que conforman al Fediverso, con una gran semejanza a X ",
      "code_clasf" : "social",
      "keywords" : "red social, Mastodon, Fediverso",
      "anio" : "2023",
      "des_clasf" : "https://webunderground.neocities.org/mastodon/perfil"
    }, {
      "title" : "la tele",
      "des_detallada" : " Es un proyecto de código abierto gratuito que permite gestionar canales de televisión de libre acceso por Internet.",
      "code_clasf" : "site",
      "keywords" : "tv, television, canales tv",
      "anio" : "2023",
      "des_clasf" : "https://sciostation.github.io/la-tele/"
    }, {
      "title" : "couch",
      "des_detallada" : "Experto en el desarrollo personal , cambiando tu mentabilidad y forma de actuar para que tengas exito en todos los aspectos de tu vida",
      "code_clasf" : "blogs",
      "keywords" : "couch, experto, blog",
      "anio" : "2023",
      "des_clasf" : "http://publish.lycos.com/duaro2012"
    }, {
	"title" : "oldweb",
      "des_detallada" : "la web de los 90s la web 1.0 donde el usuario final solo era consumidor de la informacion y no creador",
      "code_clasf" : "search",
      "keywords" : "search, buscador, site",
      "anio" : "2024",
      "des_clasf" : "https://newscities.neocities.org/oldweb/"
    }, {
       "title" : "Productos Marca Personal",
      "des_detallada" : "fabricacion y comercializacion de productos originales hechos por personas y no industrias de forma artesanal y personalizados y totalmente autenticos.",
      "code_clasf" : "page",
      "keywords" : "productos, emprender, page",
      "anio" : "2024",
      "des_clasf" : "https://newscities.neocities.org/marca/"
    }, {
       "title" : "vincorocks",
      "des_detallada" : "Banda virtual de rock music critica social a la debil mentalidad del hombre occidental",
      "code_clasf" : "page",
      "keywords" : "rock, musica, page",
      "anio" : "2024",
      "des_clasf" : "https://newscities.neocities.org/music/albums"
    }, {
	"title" : "pixelfed",
      "des_detallada" : "red social al estilo de instagran solo que de fedeverso",
      "code_clasf" : "social",
      "keywords" : "social, instagram, pixelfed",
      "anio" : "2024",
      "des_clasf" : "https://newscities.neocities.org/instagram/"
    }, {
	"title" : "search",
      "des_detallada" : "otro buscador alterno",
      "code_clasf" : "search",
      "keywords" : "search, buscador, motor de busqueda",
      "anio" : "2023",
      "des_clasf" : "https://newscities.neocities.org/search/"
    }, {
  
       "title" : "cultura maker",
      "des_detallada" : "La cultura maker, a veces tambien conocida como “cultura hacedora",
      "code_clasf" : "blogs",
      "keywords" : "blog, maker, cultura",
      "anio" : "2023",
      "des_clasf" : "http://publish.lycos.com/faedgaro"       
	  } ]

});