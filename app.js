document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('mapContainer').setView([40.4136, -3.6835], 13); 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  var marker = L.marker([40.4167, -3.7025]).addTo(map); 
  

  
  function trazarRuta(puntoA, puntoB, descripcion) {
    L.Routing.control({
      waypoints: [
        L.latLng(puntoA[0], puntoA[1]),
        L.latLng(puntoB[0], puntoB[1])
      ],
      routeWhileDragging: true,
      show: false 
    }).addTo(map);

    var marker = L.marker(puntoB).addTo(map);
    marker.bindPopup(descripcion);
  }


  var sitios = [
    [40.453333, -3.687222], // bernabeu
    [40.416873, -3.715244], // Palacio real
    [40.415278, -3.702564], // Museo del prado
    [40.416775, -3.694202], // Parque del retiro
    [40.415863, -3.707534], // Plaza mayor
    [40.416553, -3.702714], // Puerta del sol 
    [40.424663, -3.711944]  // Templo debod
  ];


  var descripciones = [
    'Bernabeu Redes: La zona del Estadio Santiago Bernabéu está bien cubierta por las principales operadoras de telecomunicaciones en España. Operadores: Movistar (Telefónica), Vodafone, Orange, y MásMóvil son las principales operadoras que ofrecen cobertura en esta área.',
    'Palacio real: Redes: La zona del Palacio Real cuenta con una buena infraestructura de telecomunicaciones debido a su importancia histórica y turística. Operadores: Movistar, Vodafone, Orange, y MásMóvil tienen presencia en esta área.',
    'Museo del prado: Redes: Esta área cuenta con redes de alta velocidad para soportar la demanda de visitantes y trabajadores. Operadores: Movistar, Vodafone, y Orange suelen tener una cobertura sólida en este lugar.',
    'Parque del retiro: Redes: Aunque es un parque, las áreas cercanas al Parque del Retiro tienen buena cobertura para soportar eventos y actividades. Operadores: Movistar, Vodafone, y Orange ofrecen cobertura en esta zona.',
    'Plaza mayor: Redes: Es una de las plazas más concurridas de Madrid y cuenta con una buena cobertura de telecomunicaciones. Operadores: Movistar, Vodafone, Orange, y MásMóvil operan en esta área para atender a la alta demanda de servicios.',
    'Puerta del sol: Redes: Esta plaza central de Madrid cuenta con una infraestructura de telecomunicaciones robusta para soportar la alta demanda de datos y comunicaciones. Operadores: Movistar, Vodafone, Orange, y MásMóvil tienen una presencia fuerte en la Puerta del Sol. ',
    'Templo debod: Redes: Aunque es una zona más tranquila, todavía cuenta con cobertura para los visitantes y eventos ocasionales. Operadores: Movistar y Vodafone son los principales operadores que ofrecen cobertura en esta área.'
  ];


  for (var i = 0; i < sitios.length; i++) {
    trazarRuta([40.4167, -3.7025], sitios[i], descripciones[i]);
  }
});

function openTab(evt, tabName) {
  // Oculta todos los contenidos de las pestañas
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  // Resetea todos los enlaces de las pestañas a su estado original
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => {
    link.classList.remove('text-white');
  });

  // Muestra el contenido de la pestaña seleccionada
  document.getElementById(tabName).classList.add('active');

  // Resalta el enlace de la pestaña seleccionada
  evt.currentTarget.classList.add('text-white');
}
