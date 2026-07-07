export type NotaCategory = "editorial" | "tv" | "podcast" | "revista" | "doc";

export interface Nota {
  slug: string;
  source: string;
  category: NotaCategory;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  urlLabel: string;
  body: string[];
  gradient: string;
  image?: string;
  hidden?: boolean;
  sections?: Array<{ heading: string; paragraphs: string[] }>;
  mediaList?: Array<{ label: string; url: string }>;
}

const gradients = [
  "linear-gradient(135deg,#0f4c2a,#1a6b3e,#0d3a5c)",
  "linear-gradient(135deg,#1e3a5f,#2563a8,#0f4c2a)",
  "linear-gradient(135deg,#2d4a1e,#1a4a6b,#0f3320)",
  "linear-gradient(135deg,#0d2235,#1a3a5a,#0a2a1a)",
  "linear-gradient(135deg,#1a4520,#0d3550,#1a3020)",
  "linear-gradient(135deg,#153020,#1e4a6b,#102018)",
];

export const notas: Nota[] = [
  {
    slug: "tecscience-lirio-acuatico-valle-de-bravo",
    source: "TecScience — Tec de Monterrey",
    category: "editorial",
    title: "El EXATEC que convirtió una plaga en solución para el agua",
    excerpt: "El portal de divulgación del Tec de Monterrey perfiló a Eduardo Caballero y el desarrollo de Fito-colmenas como respuesta a la contaminación de la presa Miguel Alemán.",
    date: "2024",
    url: "https://tecscience.tec.mx/es/biotecnologia/lirio-acuatico-contra-contaminantes/",
    urlLabel: "Leer la nota completa en TecScience",
    gradient: gradients[0],
    image: "/notas/nota-tecscience.webp",
    body: [
      "El portal de divulgación científica del Tec de Monterrey, TecScience, publicó un perfil sobre Eduardo Caballero Murillo, ingeniero en biotecnología, CEO y fundador de Biolily, en el que explora el origen y funcionamiento de Fito-colmenas como respuesta a la contaminación de la presa Miguel Alemán en Valle de Bravo.",
      "La nota parte de un dato que define el problema: sin intervención, el lirio acuático podría cubrir por completo la presa de Valle de Bravo en menos de dos meses. Considerada una de las 100 especies exóticas invasoras más dañinas por la Unión Internacional para la Conservación de la Naturaleza, el lirio representa hoy una de las principales amenazas para los cuerpos de agua del sistema Cutzamala, que abastece de agua potable a millones de personas en la Zona Metropolitana del Valle de México.",
      "Lo que TecScience documentó es el giro de perspectiva que está en el centro de Biolily: en lugar de exterminar el lirio, Fito-colmenas aprovecha sus propiedades naturales de fitorremediación para remover los nutrientes —fosfatos, nitratos, coliformes fecales y metales pesados— que degradan la calidad del agua. El sistema modular hexagonal contiene y controla el crecimiento de la planta, permitiendo que trabaje sin dispersarse ni afectar la navegación.",
      "La cobertura también documenta el respaldo institucional al proyecto: CONAGUA, SEMARNAT, CONANP y la CAEM han sostenido conversaciones con el equipo de Biolily sobre su implementación en la presa de Valle de Bravo.",
    ],
  },
  {
    slug: "foro-tv-solucion-natural-cutzamala",
    source: "Foro TV / N+",
    category: "tv",
    title: "Solución natural para la contaminación del Cutzamala",
    excerpt: "El noticiero Hora 21 de Foro TV presentó Fito-colmenas como alternativa basada en la naturaleza para restaurar cuerpos de agua del sistema Cutzamala.",
    date: "2024",
    url: "https://www.nmas.com.mx/foro-tv/programas/hora-21/videos/expertos-revelan-solucion-natural-para-limpiar-contaminacion-cutzamala/",
    urlLabel: "Ver el segmento completo en Foro TV / N+",
    gradient: gradients[1],
    image: "/notas/nota-foro-tv.png",
    body: [
      "El noticiero Hora 21 de Foro TV, canal de noticias de TelevisaUnivision, dedicó un segmento a Fito-colmenas en el contexto de la crisis hídrica que enfrenta el sistema Cutzamala —la infraestructura que abastece de agua potable a la Ciudad de México y su zona metropolitana.",
      "La cobertura posiciona a Fito-colmenas dentro del debate público sobre las alternativas disponibles para enfrentar la contaminación de los cuerpos de agua que alimentan el sistema. Frente a métodos convencionales como el dragado o el uso de productos químicos, el segmento presenta el enfoque de Biolily como una solución basada en la naturaleza: aprovechar las propiedades del lirio acuático —una especie invasora que ya está presente en la presa— para remover los nutrientes que generan la eutrofización del lago.",
      "El sistema Cutzamala atraviesa desde hace años un deterioro acelerado por la combinación de crecimiento urbano, descargas de aguas residuales y el avance de procesos de eutrofización que comprometen tanto la calidad como el volumen del agua disponible. La presa Miguel Alemán en Valle de Bravo, uno de los embalses clave del sistema, concentra altos niveles de fósforo, nitrógeno y coliformes fecales.",
      "La aparición en Hora 21 marca un hito en la visibilidad pública de Biolily: es la primera vez que la tecnología fue presentada a una audiencia nacional de televisión abierta como una respuesta concreta y viable al problema hídrico del centro del país.",
    ],
  },
  {
    slug: "la-jornada-saneamiento-presa-lirio-acuatico",
    source: "La Jornada Estado de México",
    category: "editorial",
    title: "Saneamiento de la presa con lirio acuático",
    excerpt: "La Jornada Estado de México reportó el proyecto de Biolily para sanear la presa de Valle de Bravo mediante Fito-colmenas, tecnología de fitorremediación basada en el lirio acuático.",
    date: "2024",
    url: "https://lajornadaestadodemexico.com/valle-de-bravo-van-por-saneamiento-de-presa-con-lirio-acuatico/",
    urlLabel: "Leer el reportaje completo en La Jornada Estado de México",
    gradient: gradients[2],
    image: "/notas/nota-la-jornada.webp",
    body: [
      "La Jornada Estado de México publicó un reportaje sobre el proyecto de restauración de la presa Miguel Alemán en Valle de Bravo, con Fito-colmenas como tecnología central. La cobertura sitúa el proyecto dentro del contexto de crisis hídrica que vive el municipio: una presa que opera por debajo de su capacidad histórica, con niveles crecientes de contaminación por coliformes fecales, fosfatos y nitratos, y un lirio acuático que avanza sobre la superficie del embalse.",
      "El reportaje describe cómo Fito-colmenas propone resolver simultáneamente dos problemas que suelen tratarse por separado: el control del lirio y la descontaminación del agua. En lugar de eliminar la planta mediante métodos manuales o químicos —un proceso costoso, temporal y sin efecto sobre la calidad del agua— el sistema la convierte en herramienta activa de restauración.",
      "La tecnología coloca el lirio en celdas hexagonales en los puntos de mayor concentración de contaminantes, permitiendo que la planta emita compuestos alelopáticos que atacan directamente a las cianobacterias y coliformes fecales presentes en el lago. Los resultados esperados contemplan cambios visibles en los primeros dos años y una restauración integral en siete.",
      "La cobertura también recoge la dimensión territorial del proyecto: Valle de Bravo es uno de los principales destinos turísticos del Estado de México y un nodo estratégico del sistema Cutzamala. El deterioro de su presa no es un problema local; afecta directamente el abastecimiento de agua para millones de personas en la Zona Metropolitana del Valle de México.",
    ],
  },
  {
    slug: "aneas-revista-agua-saneamiento-fito-colmenas",
    source: "Revista Agua y Saneamiento — ANEAS",
    category: "revista",
    title: "Fito-colmenas en la publicación de referencia del sector hídrico mexicano",
    excerpt: "La revista de ANEAS documentó Fito-colmenas en su número 95 como solución innovadora para el manejo del lirio acuático, con circulación entre gestores públicos del agua en México.",
    date: "2024",
    url: "https://www.aneas.com.mx/wp-content/uploads/2024/08/AyS-95.pdf",
    urlLabel: "Consultar la revista Agua y Saneamiento No. 95 — pág. 57",
    gradient: gradients[3],
    image: "/notas/nota-aneas.png",
    body: [
      "La revista Agua y Saneamiento de la Asociación Nacional de Empresas de Agua y Saneamiento (ANEAS) documentó a Fito-colmenas en su número 95 dentro de un artículo sobre el deterioro hídrico de la presa de Valle de Bravo y las tecnologías disponibles para revertirlo.",
      "ANEAS es el organismo que agrupa a los organismos operadores de agua potable, alcantarillado y saneamiento en México. Su revista es una de las publicaciones de referencia del sector hídrico nacional, con circulación entre gestores públicos, organismos de cuenca, tomadores de decisión en gobierno y especialistas técnicos.",
      "El artículo contextualiza el problema que Fito-colmenas busca resolver: desde 2001, el Patronato ProValle de Bravo A.C. y científicos del ICML de la UNAM han documentado una sobrefertilización crónica de la presa, causada por el vertimiento de aguas no tratadas desde los ríos de la cuenca. Esta acumulación de fósforo, nitrógeno y materia orgánica agota el oxígeno disponible, estimula la reproducción de microorganismos patógenos y favorece florecimientos de cianobacterias potencialmente tóxicas.",
      "En ese contexto, la publicación describe cómo Eduardo Caballero, Jorge Ramírez y Carolina Flores desarrollaron Fito-colmenas: una tecnología in situ capaz de contener, potenciar y aprovechar las cualidades del lirio acuático para atacar esta problemática directamente en el cuerpo de agua.",
    ],
  },
  {
    slug: "tv-azteca-crisis-hidrica-valle-de-bravo",
    source: "TV Azteca — Azteca Noticias",
    category: "tv",
    title: "La crisis hídrica de Valle de Bravo llega a la televisión nacional",
    excerpt: "Azteca Noticias reportó la crisis ambiental de la presa Miguel Alemán y el programa de restauración con Fito-colmenas previsto para iniciar en 2025.",
    date: "2024",
    url: "https://www.tvazteca.com/aztecanoticias/crisis-ambiental-en-valle-bravo-lago-enfrenta-contaminacion-y-sequia-severa",
    urlLabel: "Ver el reportaje completo en Azteca Noticias",
    gradient: gradients[4],
    image: "/notas/nota-tv-azteca.png",
    body: [
      "Azteca Noticias dedicó un reportaje a la crisis ambiental de la presa Miguel Alemán en Valle de Bravo, uno de los embalses clave del sistema Cutzamala. La cobertura documenta el deterioro del cuerpo de agua —contaminación, descenso de niveles y avance del lirio acuático— y presenta a Fito-colmenas como la tecnología prevista para iniciar su restauración.",
      "El reportaje describe la situación del lago con precisión: sequía prolongada, ingreso constante de aguas negras por los ríos Tizates y Amanalco, y niveles de fósforo y nitrógeno muy por encima de las normas permitidas para cuerpos de agua de este tipo. Valle de Bravo no solo es el principal destino turístico del Estado de México, sino uno de los nodos de los que depende el abastecimiento de agua potable para el Valle de México.",
      "Azteca Noticias reporta el programa de restauración basado en Fito-colmenas: un sistema de filtración que aprovecha el lirio acuático de forma controlada, colocado estratégicamente en los puntos donde los ríos más contaminados desembocan en el lago. La primera fase de implementación contempla una superficie de 5,000 metros cuadrados en la zona de confluencia del río Tizates y el Amanalco.",
      "La cobertura marca la primera vez que Fito-colmenas fue presentada en Azteca Noticias, canal con alcance nacional, como parte de la respuesta concreta al deterioro hídrico de la presa de Valle de Bravo.",
    ],
  },
  {
    slug: "milenio-presa-valle-de-bravo-contaminacion",
    source: "Milenio",
    category: "editorial",
    title: "Contaminación histórica en la presa de Valle de Bravo",
    excerpt: "Milenio documentó el estado crítico de la presa Miguel Alemán con acceso al equipo científico del ICML-UNAM y presentó el enfoque de Biolily para su saneamiento.",
    date: "2024",
    url: "https://www.milenio.com/politica/comunidad/presa-valle-bravo-nivel-repleta-aguas-negras",
    urlLabel: "Leer el reportaje completo en Milenio",
    gradient: gradients[5],
    image: "/notas/nota-milenio.jpeg",
    body: [
      "El diario Milenio publicó un reportaje de largo aliento sobre el estado de la presa Miguel Alemán en Valle de Bravo, con acceso directo al equipo científico del Instituto de Ciencias del Mar y Limnología de la UNAM que monitorea el embalse desde hace más de dos décadas.",
      "El reportaje recoge el diagnóstico del doctor Jorge Ramírez Zierold, director científico y cofundador de Biolily e investigador del ICML-UNAM: la presa registró en ese momento uno de sus niveles históricos más bajos, con apenas un 32% de almacenamiento. La combinación de sequía y contaminación acumulada generó una situación de doble riesgo: baja disponibilidad de agua y alta concentración de contaminantes, entre ellos florecimientos recurrentes de cianobacterias con potencial de producir toxinas que afectan el hígado y el sistema nervioso central.",
      "Las mediciones del equipo en el río Tizates arrojaron concentraciones de nitrógeno de entre 40 y 46 miligramos por litro, y de fósforo de entre 9.6 y 18.2 miligramos por litro: valores que superan significativamente los límites establecidos por la normativa para embalses, lagos y lagunas.",
      "Ante ese escenario, Milenio documenta la propuesta de Biolily y el Patronato ProValle: sanear el agua desde los puntos de descarga mediante biofiltros colocados en las desembocaduras de los ríos, usando lirio acuático de manera controlada. Una solución basada en la naturaleza que ataca el problema en su origen, antes de que los contaminantes se mezclen con el volumen total del embalse.",
    ],
  },
  {
    slug: "notipress-lirio-acuatico-presa-valle-de-bravo",
    source: "Notipress",
    category: "editorial",
    title: "El lirio acuático como posible respuesta para la presa de Valle de Bravo",
    excerpt: "Notipress amplió la cobertura de TecScience sobre Eduardo Caballero y Fito-colmenas, consolidando la presencia de la tecnología en medios digitales del Estado de México.",
    date: "2024",
    url: "https://notipress.mx/estado-de-mexico/lirio-acuatico-posible-respuesta-limpiar-presa-valle-de-bravo-20604",
    urlLabel: "Leer la nota completa en Notipress",
    gradient: gradients[0],
    image: "/notas/nota-notipress.jpeg",
    body: [
      "El portal de noticias Notipress publicó una nota sobre Fito-colmenas como alternativa para restaurar la presa Miguel Alemán en Valle de Bravo, ampliando la cobertura que TecScience había iniciado sobre Eduardo Caballero y la tecnología desarrollada por Biolily.",
      "La nota posiciona el problema desde la perspectiva del Estado de México: una presa estratégica que enfrenta simultáneamente la invasión de lirio acuático, niveles crecientes de contaminación por nitrógeno y fósforo, y un déficit de soluciones de largo plazo. El lirio acuático —catalogado por la UICN como una de las 100 especies exóticas invasoras más dañinas del mundo— es en Valle de Bravo, paradójicamente, tanto parte del problema como la herramienta central de la solución que Biolily propone.",
      "Notipress explica con claridad el principio de funcionamiento de Fito-colmenas: el sistema contiene el lirio en celdas modulares hexagonales que permiten el intercambio de agua y oxígeno, pero impiden que la planta se reproduzca de forma descontrolada. Dentro de esa contención, el lirio absorbe el nitrógeno, el fósforo y los metales pesados que degradan la calidad del agua, y emite compuestos que inhiben el crecimiento de cianobacterias.",
      "La cobertura de Notipress contribuye a consolidar la presencia de Fito-colmenas en el ecosistema de medios digitales del Estado de México, donde el problema hídrico de Valle de Bravo tiene especial relevancia para la agenda pública local.",
    ],
  },
  {
    slug: "podcast-fito-colmenas-soluciones-basadas-en-la-naturaleza",
    source: "Podcast — Spotify",
    category: "podcast",
    title: "Fitorremediación, eutrofización y soluciones basadas en la naturaleza",
    excerpt: "Un episodio de podcast explora en profundidad el proceso de fitorremediación con Fito-colmenas, la eutrofización de la presa de Valle de Bravo y las ventajas frente a métodos convencionales.",
    date: "2024",
    url: "https://open.spotify.com/episode/0T89v3gTOAFELlE069Lo4Y",
    urlLabel: "Escuchar el episodio completo en Spotify",
    gradient: gradients[1],
    image: "/notas/nota-spotify.jpeg",
    body: [
      "En un episodio disponible en Spotify, dos especialistas en materia hídrica abordan en profundidad el proceso de fitorremediación que está detrás de Fito-colmenas: cómo funciona, por qué el lirio acuático es una herramienta eficaz para remover nutrientes de cuerpos de agua contaminados, y qué ventajas ofrece frente a los métodos convencionales de tratamiento.",
      "El formato largo del podcast permite explorar dimensiones que los medios de noticias no suelen desarrollar: la biología del lirio acuático y sus propiedades alelopáticas, el concepto de eutrofización y cómo la acumulación de fósforo y nitrógeno desencadena el deterioro progresivo de un cuerpo de agua, y la diferencia entre soluciones de control paliativo y una solución basada en la naturaleza que aprovecha los procesos del propio ecosistema para restaurarlo.",
      "El episodio es un recurso de divulgación útil para quienes quieren entender el problema hídrico de Valle de Bravo y la lógica detrás de Fito-colmenas más allá de los titulares: desde los mecanismos biológicos hasta las implicaciones para la gestión del agua a escala de cuenca.",
    ],
  },
  {
    slug: "jorge-ramirez-zierold-trayectoria-cientifica",
    source: "Biolily",
    category: "editorial",
    title: "Jorge Ramírez Zierold: 20 años estudiando el agua que México necesita recuperar",
    excerpt: "Doctor en ciencias por la UNAM e investigador del ICML, Jorge Ramírez Zierold lleva más de 20 años monitoreando la presa de Valle de Bravo. Su trayectoria científica es el respaldo técnico de Fito-colmenas.",
    date: "2025",
    url: "https://scholar.google.com/citations?hl=es&view_op=list_works&gmla=ACrTK9UUsXaWQN600S5UYQpa6LXspTaAdo3PgoiMQsD7wTTZnF5fdDEy_PEVzv0asdil3R7TYCtK7eNzITg1cK3ra0Yiptjj_w&user=Q8PAtAcAAAAJ",
    urlLabel: "Ver perfil en Google Scholar",
    gradient: gradients[3],
    body: [
      "Cuando Bloomberg News, Reuters o Reforma buscan una voz autorizada sobre la crisis hídrica del sistema Cutzamala, llaman al doctor Jorge Ramírez Zierold. Director científico y cofundador de Biolily, Jorge es investigador del Instituto de Ciencias del Mar y Limnología de la UNAM (ICML-UNAM) y uno de los científicos con mayor trayectoria en el monitoreo de la presa Miguel Alemán en Valle de Bravo —el embalse que abastece de agua potable a millones de personas en la Zona Metropolitana del Valle de México.",
    ],
    sections: [
      {
        heading: "Dos décadas en campo",
        paragraphs: [
          "Jorge lleva más de 20 años estudiando la presa de Valle de Bravo como parte del programa de monitoreo hídrico del ICML-UNAM. Su trabajo ha documentado con continuidad la evolución de los niveles de nitrógeno y fósforo, los florecimientos de cianobacterias potencialmente tóxicas, los balances hídricos del embalse y los procesos de mezcla que determinan cómo se distribuyen los contaminantes en el lago. Es una de las fuentes de datos más sistemáticas y de largo plazo sobre la calidad del agua en el sistema Cutzamala, uno de los sistemas de abastecimiento de agua más importantes de México.",
          "Ese trabajo de campo no es un antecedente académico de Biolily —es su columna vertebral. Los parámetros que Fito-colmenas busca corregir (concentraciones de fósforo total, nitrógeno total, coliformes fecales, presencia de cianobacterias) son exactamente los que Jorge ha medido en la presa desde 2002. El diseño de la tecnología, los puntos de intervención prioritarios y los indicadores de éxito del programa de restauración parten de esa evidencia acumulada.",
        ],
      },
      {
        heading: "Una voz de referencia en la crisis hídrica",
        paragraphs: [
          "La trayectoria de Jorge en medios refleja el lugar que ocupa en el debate público sobre el agua en México. En 2024, Bloomberg News lo consultó para su reportaje sobre el deterioro del lago de Valle de Bravo y la inequidad hídrica en la región. Reuters lo entrevistó para una pieza sobre los lagos privados como símbolo de la crisis del agua en México. Reforma lo citó en dos ocasiones ese mismo año: primero sobre la presión que la calidad del agua ejerce sobre el sistema Cutzamala, y después sobre la urgencia de usar agua reciclada en la metrópoli.",
          "En televisión, ha participado en Foro TV en dos ocasiones —incluyendo el segmento de Hora 21 donde se presentó Fito-colmenas como solución natural para la contaminación del Cutzamala— y ha sido consultado por Russia Today sobre la sequía que afecta al 75% del territorio mexicano. Su presencia en medios internacionales no es casual: es el resultado de años de producción científica publicada en revistas arbitradas de alto impacto, disponible en Google Scholar, y de un compromiso sostenido con la divulgación del conocimiento hídrico para audiencias no especializadas.",
        ],
      },
      {
        heading: "Divulgación como responsabilidad",
        paragraphs: [
          "Además de su trabajo de investigación, Jorge ha participado de forma constante en espacios de divulgación ciudadana. Ha sido parte del podcast Por la Subcuenca del Observatorio Ciudadano de la Subcuenca Amanalco–Valle de Bravo en múltiples episodios, abordando desde la crisis hídrica en las presas del Cutzamala hasta la limpieza del agua con Fito-colmenas como solución a la problemática de calidad. Ha participado en conversatorios del ICML-UNAM, en videos de divulgación para todo público y en foros de discusión sobre el plan hídrico nacional.",
          "En mayo de 2025, el ICML-UNAM transmitió el conversatorio \"Crisis de los cuerpos de agua en México: reflexiones y alternativas para su recuperación\", en el que Jorge participó junto a otros investigadores. Ese mismo mes, Facebook difundió el programa de implementación de Fito-colmenas como herramienta de restauración ecológica de Valle de Bravo —un paso concreto hacia la intervención en el terreno que ha estudiado por más de dos décadas.",
        ],
      },
      {
        heading: "Por qué importa para Biolily",
        paragraphs: [
          "Fito-colmenas no es una tecnología que se propone intervenir en un ecosistema desconocido. Es una respuesta diseñada desde adentro: desde el conocimiento profundo de cómo funciona la presa de Valle de Bravo, qué la enferma, en qué puntos los contaminantes entran con mayor concentración y qué mecanismos biológicos pueden revertir el proceso.",
          "Eso es lo que Jorge aporta a Biolily: no solo credibilidad científica hacia afuera, sino certeza técnica hacia adentro. La diferencia entre una solución bien intencionada y una que funciona.",
        ],
      },
    ],
    mediaList: [
      { label: "Bloomberg News — Mexico City Wealthy's Favorite Lake Getaway is Drying Out (junio 2024)", url: "https://www.bloomberg.com/news/features/2024-06-05/a-drying-lake-near-mexico-city-showcases-nation-s-water-crisis" },
      { label: "Reuters — Private lakes emerge as symbol of water inequity in elite Mexican holiday town (febrero 2024)", url: "https://www.reuters.com/world/americas/private-lakes-emerge-symbol-water-inequity-elite-mexican-holiday-town-2024-02-27/" },
      { label: "Reforma — Presiona a Cutzamala, ahora, calidad del agua (junio 2024)", url: "https://www.reforma.com/presiona-a-cutzamala-ahora-calidad-del-agua/ar2823435" },
      { label: "Reforma — Urgen a la metrópoli usar agua reciclada (abril 2025)", url: "https://www.reforma.com/edicionimpresa/aplicacionEI/webview/compartir/ImagenEdImpresa.aspx?Titulo=Ciudad&Resumen=04+de+abril&img=https://hemerotecalibre.reforma.com/20250404/large/RCIU20250404-004.JPG&md5=37bd905d4c4f004e6c989d34d9f6c60b" },
      { label: "Foro TV / Hora 21 — Expertos revelan solución natural para limpiar contaminación en Cutzamala (marzo 2024)", url: "https://www.nmas.com.mx/foro-tv/programas/hora-21/videos/expertos-revelan-solucion-natural-para-limpiar-contaminacion-cutzamala/" },
      { label: "Foro TV — Día Mundial del Medio Ambiente (junio 2024)", url: "https://www.nmas.com.mx/foro-tv/programas/en-una-hora/videos/por-que-es-importante-dia-mundial-medio-ambiente/" },
      { label: "Russia Today — México: 75% del territorio padece sequía (junio 2024)", url: "https://actualidad.rt.com/video/513055-mexico-sequia-falta-lluvias-fenomeno-nino" },
      { label: "Milenio Hábitat — Fuerte contaminación en la Presa Valle de Bravo (septiembre 2024)", url: "https://www.milenio.com/politica/comunidad/presa-valle-bravo-nivel-repleta-aguas-negras" },
      { label: "Podcast Por la Subcuenca — Limpieza del agua con Fito-colmenas (mayo 2024)", url: "https://podcasters.spotify.com/pod/show/observatoriovalle/episodes/Limpieza-del-agua-con-Fito-colmenas--como-una-solucin-a-la-problemtica-de-calidad-del-agua-e2j6cc6" },
      { label: "Podcast Por la Subcuenca — Plan Hídrico Nacional y situación hídrica en Valle de Bravo (enero 2025)", url: "https://creators.spotify.com/pod/show/observatoriovalle/episodes/Plan-Hdrico-Nacional-y-la-Situacin-Hdrica-actual-en-Valle-de-Bravo-e2trtfs" },
      { label: "Sopitas — El Cutzamala a más del 90% (octubre 2025)", url: "https://www.sopitas.com/noticias/cutzamala-almacenamiento-lluvias-maxima-capacidad/" },
      { label: "El Sol de Toluca — Presa de Valle de Bravo podría llegar al 90% de almacenamiento (agosto 2025)", url: "https://www.elsoldetoluca.com.mx/local/valle-de-bravo-presa-miguel-aleman-recibe-historica-dosis-de-agua-12946456.html" },
      { label: "ICML-UNAM — Conversatorio \"Crisis de los cuerpos de agua en México\" (mayo 2025)", url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=697466562684028&rdid=myh0hRbAb4UM6cV0" },
      { label: "Facebook — Programa de implementación de Fito-colmenas como herramienta de restauración ecológica de Valle de Bravo (mayo 2025)", url: "https://fb.watch/eXM5tX3Fyc/?mibextid=PdaYdh" },
      { label: "YouTube — Sobreviviendo... más que un intento. Agua con-ciencia (junio 2025)", url: "https://www.youtube.com/watch?v=AuuGzz9MggA" },
      { label: "Frecuencia CAD — Crisis Sistema Cutzamala 2024: Compartiendo Ideas (febrero 2024)", url: "https://www.youtube.com/watch?v=bdq-dHVFLLI" },
      { label: "Facebook / El Humedal — Diálogos por amor al Agua (marzo 2024)", url: "https://www.facebook.com/elhumedal/videos/406818562091905" },
      { label: "Podcast Por la Subcuenca — Crisis hídrica en las presas del Sistema Cutzamala (agosto 2023)", url: "https://podcasters.spotify.com/pod/show/observatoriovalle/episodes/Crisis-hdrica-en-las-presas-del-Sistema-Cutzamala---Problemtica-actual-y-retos-a-futuro-e28g068" },
      { label: "Podcast Por la Subcuenca — Calidad del agua en la presa de Valle de Bravo (agosto 2023)", url: "https://creators.spotify.com/pod/profile/observatoriovalle/episodes/Calidad-del-Agua-en-la-Presa-de-Valle-de-Bravo--Problemtica-actual-y-retos-a-futuro-e2810pl" },
      { label: "Facebook — Retos a futuro en materia de agua en la subcuenca Valle de Bravo-Amanalco (agosto 2022)", url: "http://fb.watch/aXLRsMMiBe/" },
      { label: "Este País / El País — La sequía evidencia la mala gestión del agua (junio 2021)", url: "https://estepais.com/ambiente/si-la-lluvia-se-va/la-sequia-evidencia-la-mala-gestion-del-agua/" },
      { label: "YouTube — Crisis hídrica en el Cutzamala: causas y recomendaciones (abril 2021)", url: "https://www.youtube.com/watch?v=oAmKHkgkjUY&t=1s" },
      { label: "YouTube — ¿Por qué se pone verde el agua? CCMSS (febrero 2017)", url: "https://www.youtube.com/watch?v=Bcg1dAJCClQ" },
      { label: "TV UNAM — El río Mississippi y un chapuzón por su historia (diciembre 2017)", url: "https://es-la.facebook.com/TVUNAMoficial/photos/el-r%C3%ADo-mississippi-y-un-chapuz%C3%B3n-por-su-historia-formaci%C3%B3n-y-m%C3%A1s-en-cienciaytecn/10155592176164724/" },
    ],
  },
  {
    slug: "unam-observatorio-valle-de-bravo-fitorremediacion",
    hidden: true,
    source: "UNAM / Observatorio Valle de Bravo",
    category: "doc",
    title: "Colmenas de fitorremediación en el programa de monitoreo científico de la presa",
    excerpt: "El documento técnico del programa ProValle de Bravo de la UNAM incluye las colmenas de fitorremediación como estrategia de restauración hídrica a largo plazo para la presa Miguel Alemán.",
    date: "2022",
    url: "https://observatoriovalle.org.mx/wp-content/uploads/2024/06/ProValle-de-Bravo-UNAM_Monitoreo-del-Lago_mayo2022.pdf",
    urlLabel: "Consultar el documento técnico del Observatorio Valle de Bravo",
    gradient: gradients[2],
    body: [
      "El programa ProValle de Bravo de la UNAM, a través del Observatorio Valle de Bravo, publicó un documento técnico de monitoreo hídrico de la presa Miguel Alemán en el que las colmenas de fitorremediación con lirio acuático aparecen como una de las estrategias de restauración de largo plazo contempladas para el embalse.",
      "El documento forma parte de la red de Monitoreo Hídrico Permanente con Participación Social para la Recuperación Sostenible de Valle de Bravo —un esfuerzo científico que el Instituto de Ciencias del Mar y Limnología de la UNAM (ICML) sostiene desde hace más de dos décadas. El programa mide parámetros físicos, químicos y biológicos del embalse con continuidad, y ha documentado la acumulación progresiva de materia orgánica, los florecimientos de cianobacterias potencialmente tóxicas y las concentraciones de nitrógeno y fósforo que superan los límites normativos.",
      "La inclusión de la tecnología de colmenas de fitorremediación en este marco científico tiene un significado preciso: no se trata de una mención periodística, sino de un documento técnico producido por el principal grupo de investigación que monitorea la presa. Para Biolily, cuyo director científico y cofundador Jorge Ramírez es investigador del ICML-UNAM, la alineación entre la evidencia científica acumulada por el Observatorio y el enfoque tecnológico de Fito-colmenas no es coincidencia: es el resultado de años de trabajo en campo y de una comprensión profunda del ecosistema que se busca restaurar.",
    ],
  },
];

export const socialLinks = [
  { platform: "Instagram", label: "Aquavance — Reel sobre Fito-colmenas", url: "https://www.instagram.com/reel/DTgWNPGkQdi/?igsh=aTBsNzZyZGczYXg0" },
  { platform: "Instagram", label: "Aquavance — Publicación sobre Fito-colmenas", url: "https://www.instagram.com/p/DPB4uL2AR7e/" },
  { platform: "Instagram", label: "Milenio — Reel de cobertura de Fito-colmenas", url: "https://www.instagram.com/reel/C3l_vtqtrjB/?igsh=MXcyeHhwZGRsdWY0bw%3D%3D" },
  { platform: "TikTok", label: "Milenio — Fito-colmenas en TikTok", url: "https://www.tiktok.com/@/video/7337893609984888070" },
];
