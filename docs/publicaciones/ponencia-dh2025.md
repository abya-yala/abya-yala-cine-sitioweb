---
sidebar_position: 2
---

# Ponencia DH2025


## Hacia una ontología de los festivales de cine de Abya Yala. Teoría, diseño y aplicaciones

### Palabras claves

Cine autóctono de Abya Yala, ontologías formales, OWL, Python para
ontologías, preservación cultural, tecnologías para mejorar la accesibilidad

### Imagen

![Visualización Webvowl](/img/festivales-abya-yala.rdf(1).svg)

### Reseña

#### Introducción

Esta ponencia presenta un proyecto de ontología de los festivales de cine autóctono basado en
los catálogos de los festivales de cine autóctono de Abya Yala. Dado un corpus inicial de
catálogos se construye una taxonomía/tesauro de los términos (conceptos) fundamentales y
posteriormente una ontología formal que describe el dominio de conocimiento estableciendo
relaciones entre los conceptos.Las ontologías formales son constructos que permiten la
descripción rigurosa de un dominio de conocimiento, explicitando sus entidades (conceptos,
propiedades e individuos) y las relaciones que existen entre ellas. Una de las aplicaciones de
las ontologías es el mantenimiento y conservación del conocimiento en dominios específicos.

#### Objetivos

El objetivo de elaborar esta ontología tiene dos líneas: la primera es construir un archivo de
información de libre uso y acceso principalmente para el beneficio de organizaciones y
comunidades que producen, diseminan, archivan o investigan esta producción; la segunda,
poder evaluar en qué medida se puede rastrear parte de la historia de la emergencia del cine
autóctono en Abya Yala a partir de los datos que brindan los festivales y el papel de los
festivales en esta emergencia. En cuanto al segundo objetivo, nuestro punto de partida es la
necesidad de socializar la ontología construida con los actores interesados en este cine,
aceptando, por un lado, la dificultad de reflejar a través de una estructura taxonómica el
carácter de evento de los festivales y los procesos de comunicación comunitaria que van más
allá de los datos sobre las películas y, por otro lado, el hecho de que tal ontología tenga 
que partir necesariamente de una episteme de lógica occidental que difícilmente pueda 
representar la interculturalidad que está en juego al considerar esta producción 
cinematográfica. Como tal, esta ponencia considerará también los juegos éticos que resultan de 
un proyecto de ontología de este tipo.

#### Problemática

Teniendo en cuenta lo dicho, y entendiendo la problemática que ello implica, una ontología
basada en los catálogos de festivales ofrece maneras de codificar ciertos aspectos de la
comunicación intercultural que se da en los festivales. Por ejemplo, al nivel organizativo, se
puede representar la interacción entre entidades de base indígena y grupos no indígenas, o, al
nivel de los productos audiovisuales mostrados, se puede construir una taxonomía que recoja
elementos de las prácticas socio-técnicas de las comunidades.En una publicación anterior ya
habíamos sugerido que los términos usados en los catálogos para designar los géneros
audiovisuales de las películas debían ser recuperados como una forma de representar la
comunicación intercultural. Por ejemplo, notamos que algunos términos que designan géneros
fílmicos vienen de la tradición de los estudios de comunicación social y periodismo en las
instituciones universitarias latinoamericanas, lo que ha influído en la manera en cómo se
representa el cine autóctono de Abya Yala desde la institucionalidad blanco-mestiza2.
Una de las dificultades de modelar datos en Humanidades Digitales (HD) viene de la variedad y
heterogeneidad de los datos mismos. Diseñar una ontología para un proyecto interdisciplinario
de HD implica varios desafíos, entre ellos manejar una gran variedad de fuentes de datos,
preguntas de investigación y metodologías, lo que requiere una representación del
conocimiento que sea suficientemente robusta y expresiva. Una opción es reusar y extender
ontologías existentes. En un estudio reciente se sugiere que la reutilización de estándares
como el CIDOC Conceptual Reference Model o Functional Requirements for Bibliographic
Records implica que “[T]he comprehension and ability to model special situations and reuse
useful pieces [of the aforementioned standard ontologies] can be challenging, pushing
researchers to generate over-specific extensions or entirely new, domain-specific ontologies
from scratch to represent knowledge in detail.” Esta solución genera otros problemas, entre
ellos, la falta de interoperabilidad y reusabilidad de modelos en las HD, o, para nuestro caso, aún más grave, la dificultad del uso de estos modelos por parte de no-expertos. Ondraszek et al proponen, en el estudio anteriormente citado, una aproximación basada en patrones. Estosignifica que, en lugar de reusar ontologías complejas aplicándolas con un enfoque de arriba hacia abajo, se empieza con patrones abstractos y se los especializa poco a poco para mapearlos a algunas de las ontologías estándares y de buenas prácticas ya establecidas y que pueden ser apropiadas y relevantes para el caso. 

#### Corpus inicial

Como consecuencia de esto, hemos seleccionado para este experimento “piloto” del tesauro sobre 
el cual basaremos nuestra intervención ontológica una variedad específica de festivales que 
representan distintas maneras y épocas en la organización de estos festivales:

- Por un lado, el festival Indigenous Film + Video organizado por el National Museum of
the American Indian en Nueva York, uno de los festivales más longevos que abarca
desde los setenta hasta 2011, de dirección no indígena, pero a partir de los años
noventa al menos en adelante con un comité asesor de representación indígena. A
pesar de ser un festival de Estados Unidos, ha contado desde el año 1991 con una
importante representación del cine de todo Abya Yala.
- Por otro lado, el festival Ficwallmapu organizado por un colectivo sobre todo de
mapuches en Temuco, Chile. Este festival surgió de la iteración en el 2006 de la
Coordinadora Latinoamericana de Cine y Comunicación de los Pueblos Indígenas
(CLACPI), el festival continental más grande, y cuenta con ser uno de los primeros y
más recurrentes festivales que ha contado desde sus principios con dirección indígena.
- Finalmente, también en Chile, el festival Muestra de cine y video indígena, organizado
por varias instituciones a lo largo de su historia incluyendo el Ministerio de Cultura y
actualmente por el Museo Chileno de Arte Precolombino. Nuevamente, es uno de los
festivales más longevos en el continente y su dirección es de mestizos aunque ha
contado con participación indígena en la organización del evento en varias ocasiones.
Con esta selección de festivales y sus catálogos esperamos aportar una diversidad de maneras
de organizar, tanto el festival como la información que ofrecen los catálogos en cuanto a las
películas que se muestran. De esta manera el tesauro que diseñaremos podrá comparar
diversas formas de organización durante años que al menos en parte coincidirán.
La reflexión sobre la categoría de cine indígena o autóctono es parte integral de la 
investigación que estamos llevando a cabo. En base a investigaciones previas, se establece la 
necesidad de profundizar aún más en la naturaleza multinivel de los problemas terminológicos 
en el dominio del cine y la comunicación audiovisual de los pueblos de Abya Yala5. Por ejemplo, 
se llama la atención a la naturaleza de comunicación intercultural dirigida a una audiencia 
transnacional de los medios indígenas, la contradicción entre autoría colectiva y autoría 
individual y la necesidad de no aplastar la diversidad y la multiplicidad de voces.

#### Tecnologías

Las herramientas y tecnologías que hemos usado son variadas e incluyen:

- TemaTres, para la construcción colaborativa y el manejo de vocabularios controlados,
en este caso una taxonomía/tesauro del campo de conocimiento de los festivales de
cine autóctono. Es un servidor con ambientes protegidos y tiene una política de apoyar
proyectos sin fines de lucro en el área de la preservación cultural. TemaTres es un
repositorio público que visualiza y da persistencia a los tesauros de instituciones
educativas, culturales y de gobierno de varias partes del mundo y permite su
reutilización a partir de sus servicios web.
-Protegé: un ambiente de creación de ontologías formales basado en el estándar OWL y
una implementación de las lógicas de descripción (en base a teoría de conjuntos y
lógica matemática de primer orden/predicados) que permiten el uso de motores de
razonamiento lógico para realizar inferencias que mantienen la estabilidad de la
ontología y la ensanchan.
- Diversas visualizaciones de la estructura ontológica para entender su dinámica.
- Owlready2, un paquete del lenguaje de programación Python que trata los conceptos
de una ontología OWL como clases en la Programación Orientada a Objetos. Hemos
usado Owlready2 para alojar la ontología en una base de datos de grafos SQLite que se
puede usar, por ejemplo, para convertir la estructura de la ontología en un sitio web.

En cuanto a las aplicaciones, la ponencia presenta el tesauro alojado en TemaTres y discute las posibilidades que ofrece para el diseño colaborativo del vocabulario controlado que está a la base de la ontología. Por otra parte, se presentará una versión de la ontología y se la
visualizará para explicar algunos aspectos de su estructura, discutiendo su aplicación en el
manejo de un corpus de catálogos y, potencialmente, del patrimonio audiovisual de los pueblos
de Abya Yala. Finalmente, se ofrecerá algunas ideas de las aplicaciones para análisis de datos
en el campo de los estudios culturales del cine autóctono.

### Referencias

Baker, Peter. “Imaginaries of Abya Yala: Indigenous Filmmaking in Latin America from a
Multimodal Semiotic Perspective.” Latin American and Caribbean Ethnic Studies 18, no.
3 (July 3, 2023): 377–97. https://doi.org/10.1080/17442222.2022.2149230.

Leyva Quintero, Elcira, Peter Baker, and Roberto Pareja Román. “Hacia una ontología del cine
indígena en América Latina.” Pléyade 32 (2023): 45–63.
https://revistapleyade.cl/index.php/OJS/article/view/464.

Ondraszek, Sarah Rebecca, Bruno Sartini, Marieke van Erp, Andrea Poltronieri, Pasquale
Lisena, and Harald Sack. “One Pattern to Express Them All? Towards Generalized
Patterns for Ontology Design in the Digital Humanities.” November 10, 2024.
https://doi.org/10.5281/zenodo.14063917.

“Protégé.” Accessed November 19, 2024. https://protege.stanford.edu/.

“Tematres: Management Formal Representations of Knowledge.” Accessed November 19,
2024. https://vocabularyserver.com/web/.

“Welcome to Owlready2’s Documentation! — Owlready2 0.47 Documentation.” Accessed
November 19, 2024. https://owlready2.readthedocs.io/en/latest/#.