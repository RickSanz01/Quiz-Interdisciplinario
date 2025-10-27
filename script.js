console.log("Archivo script.js cargado correctamente");
document.addEventListener("DOMContentLoaded", () => {
  iniciarQuiz();
});

function iniciarQuiz() {
    let preguntas = [
    { pregunta: "¿Qué es una fábula?", opciones: ["Un poema con rima", "Una historia real sobre personas", "Un texto que describe un lugar", "Un relato con animales que enseña una moraleja"], respuesta: 3},
    { pregunta: "¿Cuál es la capital de Francia?", opciones: ["Madrid", "París", "Roma", "Berlín"], respuesta: 1 },
    { pregunta: "¿Cuánto es 8 x 7?", opciones: ["54", "56", "64", "58"], respuesta: 1 },
    { pregunta: "¿Cuál de estos es un catión?", opciones: ["Na+", "Cl-", "K", "O2-"], respuesta: 0},
    { pregunta: "¿En qué continente está Egipto?", opciones: ["Asia", "África", "Europa", "Oceanía"], respuesta: 1 },
    { pregunta: "Que significa en inglés: 'This its father'", opciones: ["Es padre", "Está padre !!!", "Estan padres", "¿Está el padre?"], respuesta: 0},
    
    { pregunta: "¿Quién escribió 'El Quijote'?", opciones: ["Miguel de Cervantes", "Gabriel García Márquez", "Pablo Neruda", "José Hernandez"], respuesta: 0 },
    { pregunta: "¿En qué año llegó Cristóbal Colón a América?", opciones: ["1492", "1453", "1520", "Ninguna es correcta"], respuesta: 0 },
    { pregunta: "¿Qué gas respiramos principalmente?", opciones: ["Dióxido de Carbono", "Oxígeno", "Nitrógeno", "Helio"], respuesta: 1 },
    { pregunta: "¿Qué es un algoritmo?", opciones: ["Un lenguaje de programación", "Una secuencia de pasos para resolver un problema", "Un error lógico", "Un programa de computadora"], respuesta: 1 },
    { pregunta: "Qué significa en Inglés:  'My sister told me off'", opciones: ["Su hermana le dijo que se apague", "Mi hermana me apagó", "Mi hermana me bajó", "Mi hermana me habló mal"], respuesta: 3},
    { pregunta: "¿Quién es el autor de la obra 'La Odisea'?", opciones: ["Homero", "Sófocles", "Eurípides", "Aristofanes"], respuesta: 0}, 
    
    { pregunta: "¿Cuál es la raíz cuadrada de 144?", opciones: ["10", "12", "14", "Ninguna es correcta"], respuesta: 1 },
    { pregunta: "¿Qué tipo de palabra es 'rápidamente'?", opciones: ["Adverbio", "Sustantivo", "Verbo", "Calificativo"], respuesta: 0 },
    { pregunta: "¿Cuál es el continente más poblado?", opciones: ["África", "Asia", "Europa", "América"], respuesta: 1 },
    { pregunta: "¿Qué órgano bombea la sangre?", opciones: ["El hígado", "Los pulmones", "El corazón", "Los riñones"], respuesta: 2 },
    { pregunta: "¿Cuál es la extensión típica de un archivo ejecutable?", opciones: [".eje", ".html", ".exe", ".xls"], respuesta: 2 },
    { pregunta: "Qué significa en Inglés:  'I am no leader'", opciones: ["No soy líder", "No soy un libro", "No tengo líder", "No sé leer"], respuesta: 0},
    { pregunta: "¿Qué tipo de texto es el 'Martín Fierro'?", opciones: ["Una fábula", "Un cuento fantástico", "Un poema gauchesco", "Una novela policial"], respuesta: 2}, 
    
    { pregunta: "Si un triángulo no tiene todos sus lados iguales... ¿cómo se llama?", opciones: ["Escaleno", "Isósceles", "Equilátero", "Rectángulo"], respuesta: 0 },
    { pregunta: "¿Qué es una metáfora?", opciones: ["Una exageración intencionada", "Una comparación sin usar 'como'", "Una repetición de sonidos", "Ninguna es correcta"], respuesta: 1 },
    { pregunta: "¿Qué ocurrió el 25 de mayo de 1810 en Argentina?", opciones: ["La declaración de la independencia", "El inicio del proceso revolucionario", "La firma de la Constitución", "La creación del Primer Gobierno Patrio"], respuesta: 1 },
    { pregunta: "¿Qué función cumplen los pulmones?", opciones: ["Digerir los alimentos", "Filtrar toxinas", "Oxigenar la sangre", "Quitar impurezas a la sangre"], respuesta: 2 },
    { pregunta: "¿Qué lenguaje se utiliza para dar estilo a una página web?", opciones: ["HTML", "PageMaker", "Javascript", "CSS"], respuesta: 3 },
    { pregunta: "Qué significa en Inglés:  'Your attitude floors me'", opciones: ["Su actitud me confunde", "Mi piso es su actitud", "Su actitud limpia el suelo",  "Me gusta su piso"], respuesta: 0},
    { pregunta: "¿Quién escribió 'No te amo sino porque te amo'?", opciones: ["Pablo Neruda", "Gustavo Adolfo Bécquer", "Alfonsina Storni", "Rubén Darío"], respuesta: 0},
    
    { pregunta: "¿Qué representa el número Pi?", opciones: ["El volumen de un cubo", "El área de un círculo", "El área de un triángulo", "La razón entre la circunferencia y su diámetro"], respuesta: 3 },
    { pregunta: "¿Qué función cumple el verbo en una oración?", opciones: ["Indica la acción", "Determina al sujeto", "Describe al objeto", "Modifica al predicado"], respuesta: 0 },
    { pregunta: "¿Qué es una democracia?", opciones: ["Un gobierno militar", "Un gobierno civico-militar", "Un sistema donde el pueblo elige a sus representantes", "Un sistema de monarquía parlamentaria"], respuesta: 2 },
    { pregunta: "¿Qué planeta es el más cercano al sol?", opciones: ["Venus", "Mercurio", "Marte", "Plutón"], respuesta: 1 },
    { pregunta: "¿Qué programa usamos para escribir pseudocódigo?", opciones: ["Word", "PSeint", "Excel", "Notepad++"], respuesta: 1 },
    { pregunta: "Qué significa en Inglés:  'Bearable' ", opciones: ["Osable", "Soportable", "Abrazable", "Insoportable"], respuesta: 1},
    { pregunta: "¿Qué personaje robó el fuego para dárselo a los hombres, según la mitología griega?", opciones: ["Zeus", "Hércules", "Apolo", "Prometeo"], respuesta: 3},
    
    { pregunta: "¿Cómo obtengo el área de un triángulo isósceles?", opciones: ["(Base  x Altura) / 2", "((base x altura) al cuadrado) / 2", "(base + altura) x 2", "Ninguna es correcta"], respuesta: 0 },
    { pregunta: "¿Qué tipo de narrador dice: 'yo vi lo que ocurrió'?", opciones: ["Omniscente", "Protagonista", "Testigo", "Ninguna es correcta"], respuesta: 1 },
    { pregunta: "¿Qué estudia la economía?", opciones: ["La forma de invertir el dinero", "La historia de los países", "El uso de los recursos y la producción", "El estudio del clima"], respuesta: 2 },
    { pregunta: "¿Cómo se llama el proceso por el cual las plantas fabrican su alimento?", opciones: ["Fotosíntesis", "Digestión", "Respiración", "Osmosis"], respuesta: 0 },
    { pregunta: "¿Cuál es el navegador más utilizado actualmente?", opciones: ["Chrome", "Edge", "Safari", "Opera"], respuesta: 0 },
    { pregunta: "Qué significa en Inglés:  I speak when I'm told to", opciones: ["Hablo cuando soy un toldo", "Hablo cuando quiero", "Hablo cuando me lo piden", "Hablo con el toldo"], respuesta: 1},
    { pregunta: "¿Quién es el autor de 'El almohadón de plumas'?", opciones: ["Julio Cortázar", "Jorge Luis Borges", "Gabriel García Márquez", "Horacio Quiroga"], respuesta: 3},
    
    { pregunta: "¿Cuál es el valor de 'X' en la ecuación: 2 X + 4 = 10?", opciones: ["2", "3", "4", "5"], respuesta: 1 },
    { pregunta: "¿Cuál de las siguientes palabras lleva tilde?", opciones: ["Habilidoso", "Arbol", "Comer", "Esfera"], respuesta: 1 },
    { pregunta: "¿En qué año llegó Cristóbal Colón a América?", opciones: ["1492", "1453", "1520", "Ninguna es correcta"], respuesta: 0 },
    { pregunta: "¿Qué tipo de animal es una rana?", opciones: ["Mamífero", "Reptil", "Ave", "Anfibio"], respuesta: 3 },
    { pregunta: "¿Qué es un localStorage en JavaScript?", opciones: ["Un servidor de base de datos", "Un archivo externo", "Un espacio del navegador para guardar datos", "Un link a un archivo local"], respuesta: 2 },
    { pregunta: "Qué significa en Inglés:  Ain't", opciones: ["No es IA", "No es / No son", "Es inteligencia artificial", "No tengo idea"], respuesta: 1},
    { pregunta: "¿Quién escribió Romeo y Julieta?", opciones: ["Molière", "William Shakespeare", "Federico García Lorca", "Sófocles"], respuesta: 1}, 
    
    { pregunta: "¿Cuál es el valor de 'X' en la ecuación: 2 + 4 X = 10?", opciones: ["2", "3", "4", "5"], respuesta: 0 },
    { pregunta: "¿Quién es el autor de 'El amor en los tiempos del cólera'?", opciones: ["Pablo Neruda", "Mario Benedetti", "Julio Cortazar", "Gabriel García Marquez"], respuesta: 3 },
    { pregunta: "Copernico creía que el tamaño de la orbita de cada planeta dependía de su distancia de... ¿De donde?", opciones: ["Dios", "Un agujero negro", "La tierra", "El sol"], respuesta: 3 },
    { pregunta: "¿Qué elemento de la tabla peródica tiene el número atómico 2?", opciones: ["Helio", "Oxígeno", "Fluorina", "Hidrógeno"], respuesta: 0 },
    { pregunta: "¿Qué prueba determina si se puede decir que una computadora piensa como un cerebro humano?", opciones: ["Test de Einstein", "Test de Harvey", "Test de Darwin", "Test de Turing"], respuesta: 3 },
    { pregunta: "Qué significa en Inglés:  'Learn grammar'", opciones: ["Leer gramo", "Leer programas", "Aprender gramática", "Comer gramolas"], respuesta: 2},
    { pregunta: "¿Qué género literario corresponde a Rayuela de Julio Cortázar?", opciones: ["Cuento", "Poesía", "Teatro", "Novela"], respuesta: 3},
    
    { pregunta: "¿Quién es el padre de las matemáticas?", opciones: ["Sofocles", "Eurípides", "Platón", "Arquímedes"], respuesta: 3 },
    { pregunta: "¿Quién es el autor de 'Rayuela'?", opciones: ["Pablo Neruda", "Cristina Allende", "Julio Cortazar", "Jorge Luis Borges"], respuesta: 2 },
    { pregunta: "¿Porqué las Ciencias Sociales son interdisciplinarias?", opciones: ["Solo se enfocan en una sola disciplina", "No utilizan datos de otras ciencias", "Todos los investigadores deben ser expertos en todas las disciplinas", "Combinan conceptos y enfoques de diferentes disciplinas para estudiar fenómenos"], respuesta: 3 },
    { pregunta: "¿Cuál es la diferencia entre un animal vertebrado y un invertebrado?", opciones: ["Los vertebrados tienen una columna vertebral, los invertebrados no la tienen", "Mamíferos, aves, reptiles, anfibios y peces son vertebrados", "Insectos, arácnidos, moluscos y equinodermos, son invertebrados", "Todas son correctas"], respuesta: 3 },
    { pregunta: "¿Qué archivo es el más grande?", opciones: ["El de 1 Gigabytes", "El de 500 Kilobytes", "El de 1050 Megabytes", "Ninguno es correcto"], respuesta: 2 },
    { pregunta: "Qué significa en Inglés:  'Click here'", opciones: ["Golpea aquí", "Haz clic aquí", "Salta aquí", "Corre aquí"], respuesta: 1},
    { pregunta: "¿Quién es el protagonista de 'El Lazarillo de Tormes'?", opciones: ["El ciego", "El escudero", "Lázaro", "El clérigo"], respuesta: 2},
    
    { pregunta: "¿Cuál es la solución de:  2 + 2 x 0?", opciones: ["4", "2", "1", "0"], respuesta: 1},
    { pregunta: "¿Cuál es el sistema político-económico, en el cual los medios de producción son propiedad o se encuentran en manos del estado?", opciones: ["Capitalismo", "Liberalismo", "Comunismo","Socialismo"], respuesta: 2},
    { pregunta: "¿Quién fue el principal líder de la Revolución Rusa de 1917?", opciones: ["Joseph Stalin", "Nicolás II", "Vladimir Lenin", "León Trotsky"], respuesta: 2},
    { pregunta: "Qué significa en Inglés: 'He is taller than me'", opciones: ["Él es más alto que yo", "Él es más bajo que yo", "Él es igual a mí", "Él es más lento"], respuesta: 0},
    { pregunta: "¿Qué es el monitor?", opciones: ["Un dispositivo de entrada/salida", "Un dispositivo de salida", "Un dispositivo de entrada", "Ninguna es correcta"], respuesta: 1},
    { pregunta: "¿Qué tema principal aparece con frecuencia en la poesía romántica?", opciones: ["La economía y la sociedad", "El amor y los sentimientos", "La política y la guerra", "La tecnología y el progreso"], respuesta: 1},
    { pregunta: "¿Qué movimiento literario buscaba representar la realidad sin idealizarla?", opciones: ["Romanticismo", "Vanguardismo", "Modernismo", "Realismo"], respuesta: 3},
    
    { pregunta: "¿Cómo está compuesta la membrana plasmática?", opciones: ["Lípidos", "Proteínas", "Carbohidratos", "Todas las anteriores son correctas"], respuesta: 3},
    { pregunta: "¿Cuál es el valor de PI?", opciones: ["3,1415", "3,1514", "3,1416", "Ninguna es correcta"], respuesta: 0},
    { pregunta: "¿Quién fue el líder militar que lidero la revolución de mayo en argentina en 1810?", opciones: ["Belgrano", "Moreno", "San Martin", "Saavedra"], respuesta: 3},
    { pregunta: "Qué significa en Inglés:  'Turn on the computer'", opciones: ["Girar la computadora", "Apagar la computadora", "Bailar con la computadora", "Encender la computadora"], respuesta: 3},
    { pregunta: "¿Para qué sirve la CPU?", opciones: ["Para que los programas en tu computadora funcionen", "Ejecuta funciones y procesa los datos de la computadora", "Ninguna es correcta", "Las dos primeras son correctas"], respuesta: 3},
    { pregunta: "¿Qué tipo de narrador cuenta la historia usando “yo”?", opciones: ["Narrador omnisciente", "Narrador testigo", "Narrador en primera persona", "Narrador testigo"], respuesta: 2},
    
    
    { pregunta: "¿Qué es un ecosistema?", opciones: ["Una cadena alimenticia dentro de un solo organismo", "Un grupo de órganos que forman un sistema en el cuerpo humano", "Un conjunto de células que forman un tejido en el organismo", "Un conjunto de seres vivos y su entorno que interactúan entre sí"], respuesta: 3},
    { pregunta: "El resultado de 3,50 x 100... ¿Cómo se escribe en notación decimal?", opciones: ["3500", "35", "350", "Ninguna es correcta"], respuesta: 2},
    { pregunta: "¿Quién fue el presidente argentino que nacionalizo los ferrocarriles en el año 1948?", opciones: ["Perón", "Yrigoyen", "Frondizi", "Figueroa Alcorta"], respuesta: 0},
    { pregunta: "Qué significa en Inglés:  'Save the file'", opciones: ["Salvar al archivo", "Borrar el archivo", "Guardar el archivo", "Adoptar el archivo"], respuesta: 2},
    { pregunta: "¿Cómo se llama el conjunto de programas que tiene la computadora en su interior?", opciones: ["Hardware", "CPU", "Software", "Ninguno es correcto"], respuesta: 2},
    { pregunta: "¿Quién fue Julio Cortázar?", opciones: ["Actor", "Gobernador", "Poeta", "Escritor"], respuesta: 3},
    
    { pregunta: "¿Cuál es la definición de célula?", opciones: ["Es la mínima unidad funcional de cada ser vivo", "Unidad básica de los seres vivos", "Un virus microscópico", "Una bacteria maligna"], respuesta: 0},
    { pregunta: "¿Qué tipo de número es PI?", opciones: ["Un número racional", "Un número primo", "Un número irracional", "Ninguna de las anteriores es correcta"], respuesta: 2},
    { pregunta: "¿Cuál fue el cargo político que ocupo Juan Manuel de Rosas?", opciones: ["Presidente argentino ", "Gobernador de Buenos Aires ", "Intendente de Buenos Aires ", "Gobernador de la Confederación "], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'Open the folder'", opciones: ["Abrir la puerta", "Doblar la carpeta", "Perder la carpeta", "Abrir la carpeta"], respuesta: 3},
    { pregunta: "¿Cuál de los siguientes elementos, corresponde a la seguridad lógica de la PC?", opciones: ["Cintas de Backup", "Antivirus", "AI", "Disco de arranque"], respuesta: 1},
    { pregunta: "¿Quién muere en 'Don Quijote de la Mancha'?", opciones: ["Sancho Panza", "Dulcinea", "Alonso Quijano", "Dulcinea del Toboso"], respuesta: 2},
    
    { pregunta: "¿Qué significa el término asexual?", opciones: ["Una célula sin núcleo", "Un ser vivo que no se puede reproducir", "Un ser no vivo que se reproduce con pareja", "Ninguna de las anteriores es correcta"], respuesta: 3},
    { pregunta: "¿Cómo se llama el perímetro de un círculo?", opciones: ["Redondel", "Periferia", "Circunferencia", "Perimetral"], respuesta: 2},
    { pregunta: "¿En qué país nació el modelo político democrático?", opciones: ["Roma", "Grecia", "Egipto", "España"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'He is very tired'", opciones: ["Está muy cansado", "Está muy enojado", "Está muy aburrido", "Está muy rápido"], respuesta: 1},
    { pregunta: "¿Cuál es la munidad más pequeña de información que maneja la PC?", opciones: ["Gigabyte", "Terabyte", "Kilobyte", "Byte"], respuesta: 3},
    { pregunta: "¿Qué autor argentino escribió 'Fervor de Buenos Aires'?", opciones: ["Adolfo Bioy Casares", "Jorge Luis Borges", "Leopoldo Lugones", "Roberto Arlt"], respuesta: 1},
    
    { pregunta: "Un pollito nacido de una gallina es:", opciones: ["Vertebrado", "Marginado", "Invertebrado", "Flagelado"], respuesta: 0},
    { pregunta: "El 50% de 146 ... ¿Cuánto es?", opciones: ["76", "72", "78", "73"], respuesta: 3},
    { pregunta: "¿Qué civilización construyó las pirámides de Egipto?", opciones: ["Mayas", "Aztecas", "Incas", "Egipcios"], respuesta: 3},
    { pregunta: "Qué significa en Inglés:  'I like cooking'", opciones: ["Yo cocinando", "Me gusta cocinar", "Me gusta cocinando", "Me gusta la cocina"], respuesta: 1},
    { pregunta: "¿A cuántos MB equivale un GB?", opciones: ["1024 Kilobytes", "1024 Bytes", "1024 Megabytes", "1024 Gigabytes"], respuesta: 2},
    { pregunta: "¿Quién se volvió loco en 'Don Quijote de la Mancha'?", opciones: ["El cura", "Dulcinea", "Alonso Quijano", "Sancho Panza"], respuesta: 2},
    
    { pregunta: "¿Qué astro ilumina la Tierra 12 h al día, normalmente?", opciones: ["Luna", "Vía Láctea", "Sol","Ninguna de las anteriores es correcta"], respuesta: 2},
    { pregunta: "¿Cuál es el perímetro de un hexágono, sabiendo que un lado mide 2,5 cm?", opciones: ["15 cm", "20 cm", "10,5 cm", "12,5 cm"], respuesta: 0},
    { pregunta: "¿Quién fue el primer emperador romano?", opciones: ["Trajano", "Nerón", "Julio César ", "Augusto"], respuesta: 3},
    { pregunta: "Qué significa en Inglés:  'Download the game'", opciones: ["Subir el juego", "Reiniciar el juego", "Descargar el juego", "Borrar el juego"], respuesta: 2},
    { pregunta: "¡Cuales son los elementos que corresponden a la categoría 'Sistemas Operativos'?", opciones: ["Word, Excel, Power Point", "Antivirus, Diseñadores Gráficos", "Windows, Linux, Unix", "Google Chrome, Explorador de Windows, Microsoft Edge"], respuesta: 2},
    { pregunta: "¿Quién era el mejor amigo del gaucho Martín Fierro?", opciones: ["Santos Vega", "Don Segundo", "Fierro no tenia amigos", "Cruz"], respuesta: 3},
    
    { pregunta: "¿Qué planeta tiene más anillos?", opciones: ["Júpiter", "Saturno", "Urano", "Neptuno"], respuesta: 1},
    { pregunta: "¿Cuál es el resultado de: 190.000 x 0?", opciones: ["190.000", "0", "19.000", "10"], respuesta: 1},
    { pregunta: "¿En qué año se declaró la independencia de Argentina?", opciones: ["1806", "1810", "1816", "1820"], respuesta: 2},
    { pregunta: "Qué significa en Inglés:  'Shut down'", opciones: ["Sentate", "Callate", "Agachate", "Apagar"], respuesta: 3},
    { pregunta: "¡Cuales son los componentes físicos y tangibles de la PC?", opciones: ["Hardware", "Periféricos", "Software", "Los Programas"], respuesta: 0},
    { pregunta: "¿Cuándo se publicó 'El Eternauta'?", opciones: ["1957", "1963", "1970", "1974"], respuesta: 0},
    
    { pregunta: "En el asado la comida se cocina con:", opciones: ["El carbón reposando", "Fuego vivo", "Fuego bajo", "El carbón ardiendo"], respuesta: 3},
    { pregunta: "¿Cuál es el resultado de: 2 + 3 x 4?", opciones: ["10", "12", "14", "20"], respuesta: 2},
    { pregunta: "¿Qué invento permitió difundir libros en el Renacimiento?", opciones: ["La brújula", "La imprenta", "El astrolabio", "La pólvora"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'Update your app'", opciones: ["Sube tu app", "Bájate una app", "Reinicia tu app", "Actualiza tu aplicación"], respuesta: 3},
    { pregunta: "¿Dónde comienza la historia de 'El Eternauta'?", opciones: ["En una nave espacial", "En una base militar", "En una casa de Buenos Aires", "En un tren descarrilado"], respuesta: 2},
    { pregunta: "Como se llama el contenedor donde se encuentran todo el harware de una Computadora", opciones: ["Gabinete", "PC", "Caja de componentes", "Todas son correctas"], respuesta: 0},

    
    { pregunta: "¿Qué gas liberan las plantas en la fotosíntesis?", opciones: ["Dióxido de carbono", "Nitrógeno", "Helio", "Oxígeno"], respuesta: 3},
    { pregunta: "Si X = 5 ... ¿Cuál es el resultado de: X + X + 3?", opciones: ["10", "20", "12", "13"], respuesta: 3},
    { pregunta: "¿Quién fue el primer presidente de la Nación Argentina unificada?", opciones: ["Juan Manuel de Rosas", "Bartolomé Mitre", "Justo José de Urquiza", "Bernardino Rivadavia"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'Restart the PC'", opciones: ["Llorar frente al monitor", "Restablecer la PC", "Reempezar la PC", "Reiniciar la computadora"], respuesta: 3},
    { pregunta: "La biomasa... ¿De qué origen es?", opciones: ["Animal", "Vegetal", "Las dos anteriores son correctas", "Ninguna es correcta"], respuesta: 2},
    { pregunta: "¿Que es un servidor?", opciones: ["Una base de datos", "Una antena", "Alfred", "Ninguna de las anteriores"], respuesta: 3},
    
    { pregunta: "¿Qué parte del ojo regula la entrada de luz?", opciones: ["Pupila", "Retina", "Córnea", "Cristalino"], respuesta: 0},
    { pregunta: "¿Cuál es el perímetro de un cuadrado, si uno de sus lados tiene 6 cm?", opciones: ["18 cm", "24 cm", "12 cm", "30 cm"], respuesta: 1},
    { pregunta: "¿Cuál fue la primera ciudad fundada en el actual territorio argentino?", opciones: ["Buenos Aires", "Córdoba", "Santiago del Estero", "Mendoza"], respuesta: 2},
    { pregunta: "Qué significa en Inglés:  'Delete the document'", opciones: ["Borrar el documento", "Guardar el documento", "Leer el documento", "Deletrear el documento"], respuesta: 0},
    { pregunta: "¿Qué provoca la catástrofe en 'El Eternauta'?", opciones: ["Un terremoto", "Un ataque nuclear", "Una epidemia desconocida", "Una nevada mortal"], respuesta: 3},
    { pregunta: "¿Como se le conoce al Mouse?", opciones:["Puntero", "Raton", "Cursor", "Controlador"], respuesta: 1},
    
    { pregunta: "Un perro que puede comer carne y plantas... ¿qué es?", opciones: ["Herbívoro", "Carnívoro", "Detritívoro", "Omnívoro"], respuesta: 3},
    { pregunta: "¿Cuál es el valor de X en la ecuación: 2 X + 5 = 15?", opciones: ["X = 10", "X = -5", "X = -10", "X = 5"], respuesta: 3},
    { pregunta: "¿Qué grupo social lideró la Revolución Francesa de 1789?", opciones: ["La nobleza", "El clero", "La burguesía", "Los reyes"], respuesta: 2},
    { pregunta: "Qué significa en Inglés: 'I can code'", opciones: ["Yo puedo codear", "Puedo programar", "Puedo codear", "Puedo comer"], respuesta: 1},
    { pregunta: "¿Cuál de los siguientes es un género literario?", opciones: ["Narrativo", "Científico", "Biográfico", "Todas son correctas"], respuesta: 0},
    { pregunta: "¿Cual de estos no es un perferico?", opciones: ["USB", "Monitor", "Teclado", "Gabinete"], respuesta: 3},
    
    { pregunta: "¿Cuál de los siguientes, no es un órgano?", opciones: ["Apéndice", "Pelo", "Piel", " Ojos"], respuesta: 1},
    { pregunta: "¿Qué figura forma un polígono de 5 lados?", opciones: ["Un hexágono", "Un octogono", "Un pentágono", "Un heptágono"], respuesta: 2},
    { pregunta: "¿Qué pueblo habitaba Machu Picchu?", opciones: ["Aztecas", "Incas", "Mayas", "Toltecas"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'She must study'", opciones: ["Ella debería estudiar", "Ella puede estudiar", "Ella no estudia", "Ella debe estudiar"], respuesta: 3},
    { pregunta: "¿Qué es un cuento?", opciones: ["Una historia real", "Un poema dramático", "Una narración breve", "Una noticia"], respuesta: 2},
    { pregunta: "¿Cual de estos es un programa de Office?", opciones: ["Word", "Groove", "InfoPath", "Todas las anteriores"], respuesta: 3},
    
    { pregunta: "La estrella de mar es:", opciones: ["Reptil", "Pez", "Patricio estrella", "Equinodermo"], respuesta: 3},
    { pregunta: "¿Qué figura forma un polígono de 7 lados?", opciones: ["Un pentágono", "Un heptágono", "Un hexágono", "Un dodecágono"], respuesta: 1},
    { pregunta: "¿Qué país colonizó Brasil?", opciones: ["España", "Francia", "Inglaterra", "Portugal"], respuesta: 3},
    { pregunta: "Qué significa en Inglés:  'He should rest'", opciones: ["Él debería descansar", "Él va a correr", "Él está bailando", "Él descansa siempre"], respuesta: 0},
    { pregunta: "¿Cómo está estructurada una palabra esdrújula?", opciones: ["No lleva tilde", "Solo tiene dos sílabas", "Siempre llevan tilde", "Tilde en la antepenúltima sílaba"], respuesta: 3},
    { pregunta: "¿Cual de estos no es un editor de codigo official?", opciones: ["Intelij Idea", "Visual Studio Code", "Eclipse", "Troya"], respuesta: 3},

    { pregunta: "¿Cuál de estos no es un glóbulo?", opciones: ["Glóbulo rojo", "Glóbulo blanco", "Glóbulo verde", "Todas son correctas"], respuesta: 2},
    { pregunta: "¿Qué son las secciones cónicas en matemáticas?", opciones: ["Polígonos de un prisma", "Curvas al cortar un cono en un plano", "Figuras 3D de rotación", "Transformaciones de un cuadrado"], respuesta: 1},
    { pregunta: "¿Qué batalla consolidó el poder de San Martín en Chile?", opciones: ["Maipú", "Ayacucho", "Chacabuco", "Junín"], respuesta: 0},
    { pregunta: "Qué significa en Inglés:  'You must not lie'", opciones: ["No debes mentir", "No debes dormir", "No debes leer", "No debes reír"], respuesta: 0},
    { pregunta: "¿Cuántas letras tiene el abecedario español actual?", opciones: ["30", "28", "27", "25"], respuesta: 2},
    { pregunta: "¿Cual de estos es mas completo para automatizar tareas en windows?", opciones: ["CMD", "PowerShell", "VBS Script", "Node.js"], respuesta: 1},


    { pregunta: "¿Qué pasa cuando la Tierra da una vuelta completa sobre su eje, alrededor del Sol?", opciones: ["Pasa un año", "Pasa una estación", "Pasa un día", "Pasa un eclipse solar"], respuesta: 2},
    { pregunta: "¿Cuál de estas no es una sección cónica?", opciones: ["Elipse", "Parabola", "Hiperbola", "Hexágono"], respuesta: 3},
    { pregunta: "¿Qué continente fue llamado 'el Nuevo Mundo'?", opciones: ["África", "Asia", "Oceanía", "América"], respuesta: 3},
    { pregunta: "Qué significa en Inglés:  'They may come later'", opciones: ["Tal vez vengan después", "Vienen ahora", "Nunca vienen", "No pueden venir"], respuesta: 0},
    { pregunta: "¿Cuántas vocales hay en el idioma español?", opciones: ["6", "5", "4", "Ninguna es correcta"], respuesta: 1},
    { pregunta: "¿Cual de estos procesadores es el peor?", opciones: ["Intel Celeron", "Ryzen 3 3600G", "K8 Athlon 64", "Ninguno es correcto"], respuesta: 0},


    { pregunta: "¿Cuál de los siguientes no es un tipo de eclipse?", opciones: ["Eclipse anular", "Eclipse umbral", "Eclipse total", "Eclipse parcial"], respuesta: 1},
    { pregunta: "¿Cuál es la definición de 'REDONDEAR' un número?", opciones: ["Dividirlo en partes iguales", "Convertirlo en una fracción", "Aproximarlo al valor más cercano", "Multiplicarlo por 10"], respuesta: 2},
    { pregunta: "¿Quién fue conocido como el “Libertador de América?", opciones: ["San Martín", "Bolívar", "Hidalgo", "Morelos"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'Can I help you?'", opciones: ["¿Puedo ayudarte?", "¿Puedes ayudarme?", "No puedo ayudarte", "Ayúdame ya"], respuesta: 0},
    { pregunta: "¿Cuántas consonantes tiene el alfabeto español?", opciones: ["25", "22", "19", "17"], respuesta: 1},


    { pregunta: "Si el Sol se superpone con la Luna, ¿qué pasa?", opciones: ["Un eclipse lunar", "Un eclipse solar", "Un eclipse anular", "Ninguna de las anteriores es correcta"], respuesta: 1},
    { pregunta: "¿Cuál es el valor de X en la ecuación: X / 4 + 2 = 5?", opciones: ["X = 6", "X = 8", "X = 12", "X = 10"], respuesta: 2},
    { pregunta: "¿Qué hecho marca el inicio de la Edad Media?", opciones: ["La caída del Imperio Romano de Occidente", "El descubrimiento de América", "La Revolución Francesa", "La Primera Guerra Mundial"], respuesta: 0},
    { pregunta: "Qué significa en Inglés:  'I must go now'", opciones: ["Debo irme ahora", "Puedo irme mañana", "Quiero irme nunca", "No debo irme"], respuesta: 0},
    { pregunta: "¿Cuál es un adjetivo calificativo?", opciones: ["Mañana", "Correr", "Casa", "Sonso"], respuesta: 3},

    { pregunta: "¿Qué debería comer Messi luego de jugar un partido?", opciones: ["Verduras", "Asado", "Batido de proteínas", "Hamburguesas de McDonald's" ], respuesta: 2},
    { pregunta: "8 obreros levantan una pared en 4 días. Después de un recorte presupuestario solo quedan 4... ¿en cuánto tiempo levantan otra pared?", opciones: ["2 días", "4 días", "6 días", "8 días"], respuesta: 3},
    { pregunta: "¿En qué ciudad se firmó la Declaración de la Independencia de Argentina? ", opciones: ["Buenos Aires", "Tucumán", "Córdoba", "Rosario"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'We can play'", opciones: ["Juguemos a la play", "Ponele play", "Jugamos play", "Podemos jugar"], respuesta: 3},
    { pregunta: "¿Qué es una metáfora?", opciones: ["Una rima", "Una comparación sin usar 'como'", "Una exageración", "Una descripción literal"], respuesta: 1},

    { pregunta: "¿Cuántos dedos tiene un ajolote?", opciones: ["5 dedos", "4 dedos", "3 dedos", "6 dedos"], respuesta: 0},
    { pregunta: "¿Qué estructura celular regula el paso de sustancias hacia el interior y exterior de la célula?", opciones: ["Núcleo", "Mitocondria", "Membrana plasmática", "Ribosomas"], respuesta: 2},
    { pregunta: "¿Qué civilización inventó la escritura cuneiforme?", opciones: ["Egipcia", "Mesopotámica", "Griega", "China"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'He might call you'", opciones: ["Te llama seguro", "Quizás te llame", "No te llama", "Llama al perro"], respuesta: 1},
    { pregunta: "¿Qué autor escribió Cien años de soledad?", opciones: ["Jorge Luis Borges", "Mario Vargas Llosa", "Julio Cortázar", "Gabriel García Márquez"], respuesta: 3},

    { pregunta: "¿Cuál alimento te nutre más?", opciones: ["Pancho", "Milanesa", "Galletitas", "Salmón"], respuesta: 3},
    { pregunta: "La digestión mecánica se encarga de: ", opciones: ["Moler y triturar", "Producir enzimas", "No tiene funcionalidad", "Produce hormonas"], respuesta: 0},
    { pregunta: "¿Quién fue el último virrey del Río de la Plata?", opciones: ["Santiago de Liniers", "Baltasar Hidalgo de Cisneros", "Rafael de Sobremonte", "Juan José de Vértiz"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'I should eat healthy food'", opciones: ["Debería comer comida saludable", "Debo dormir", "No debo comer nada", "Como pizza siempre"], respuesta: 0},
    { pregunta: "¿Qué significa 'narrador omnisciente'?", opciones: ["Que participa en la historia", "Que solo observa desde afuera", "Que usa 'yo'", "Que sabe todo sobre los personajes"], respuesta: 3},

    { pregunta: "¿Cuál de estos está formado por enzimas?", opciones: ["Proteínas", "Hidratos de Carbonos", "Lípidos", "Ac. Nucleicos"], respuesta: 0},
    { pregunta: "¿Qué país fue gobernado por Napoleón Bonaparte?", opciones: ["Italia", "España", "Inglaterra", "Francia"], respuesta: 3},
    { pregunta: "¿Cuál elemento de estos no es un metal?", opciones: ["Na", "Cl", "Mg", "Zn"], respuesta: 1},
    { pregunta: "Qué significa en Inglés: 'Better'", opciones: ["Raro", "Igual", "Mejor", "Peor"], respuesta: 2},    
    { pregunta: "¿Cuál es el género principal de Hamlet?", opciones: ["Cuento", "Comedia", "Romance", "Tragedia"], respuesta: 3},
    
    
    { pregunta: "¿Qué caracteriza al modernismo literario?", opciones: ["Lenguaje técnico", "Uso de jerga popular", "Lenguaje refinado y musical", "Temas políticos"], respuesta: 2},
    { pregunta: "¿Qué civilización desarrolló el calendario más preciso en América?", opciones: ["Mayas", "Aztecas", "Incas", "Olmecas"], respuesta: 0},
    { pregunta: "Qué significa en Inglés:  'Faster'", opciones: ["Más lento", "Más gordo", "Más caro","Más rápido"], respuesta: 3},
    { pregunta: "¿Qué es una hipérbole?", opciones: ["Una metáfora", "Una exageración", "Una comparación", "Una ironía"], respuesta: 1},
    
    { pregunta: "¿Qué es un carbohidrato?", opciones: ["Una molécula que almacena información genética", "Un conjunto de vitaminas esenciales para el cuerpo", "Un nutriente energético formado por carbono, hidrógeno y oxígeno", "Fuente principal de energía"], respuesta: 3},
    { pregunta: "¿Cuál es la función principal de las proteínas?", opciones: ["Formar y reparar tejidos", "Brindar energía de forma rápida al cuerpo", "Almacenar la información genética de los organismos", "Transportar oxígeno en todos los líquidos corporales"], respuesta: 0},
    { pregunta: "¿Qué movimiento literario pertenece al siglo XIX y exalta la libertad y el sentimiento?", opciones: ["Realismo", "Neoclasicismo", "Romanticismo", "Vanguardismo"], respuesta: 2},
    { pregunta: "¿Qué significa 'prehistoria'?", opciones: ["Historia sin documentos escritos", "Historia de los dinosaurios", "Historia de los imperios antiguos", "Historia de la Edad Media"], respuesta: 0},
    { pregunta: "Qué significa en Inglés:  'The best'", opciones: ["El raro", "El mejor", "El peor", "El medio"], respuesta: 1},
    { pregunta: "¿Qué género mezcla verso y actuación?", opciones: ["Narrativa", "Teatro", "Poesía", "Ensayo"], respuesta: 1},
    
    { pregunta: "¿Cuál es la molécula principal que almacena la información genética en los seres vivos?", opciones: ["ARN", "ADN", "Insulina", "Crucero"], respuesta: 1},
    { pregunta: "¿Cuál es la función principal de los ribosomas en la célula?", opciones: ["Sintetizar proteínas", "Almacenar energía", "Regular el paso de sustancias por la membrana intracelular, hacia la glándula suprarrenal", "Producir hormonas"], respuesta: 0},
    { pregunta: "¿Quién fue el autor del cruce de los Andes?", opciones: ["Manuel Belgrano ", "José de San Martín", "Simón Bolívar", "Mariano Moreno"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'The worst'", opciones: ["El mejor", "El peorcito", "El peor", "El aburrido"], respuesta: 2},
    { pregunta: "¿Quién escribió 'Don Segundo Sombra'?", opciones: ["Julio Cortazar", "José Hernández", "Leopoldo Lugones", "Ricardo Güiraldes"], respuesta: 3},
    
    { pregunta: "¿Qué orgánulo produce la mayor parte de ATP?", opciones: ["Lisosoma", "Aparato de Golgi", "Membrana plasmática", "Mitocondrías"], respuesta: 3},
    { pregunta: "¿Cuál es la función del flagelo?", opciones: ["Ayudar con la digestión en las células", "Ayudar a que la célula pueda desplazarse", "Ayudar a proteger el ADN", "No tiene finalidad en la célula"], respuesta: 1},
    { pregunta: "¿Qué nombre recibe el primer gobierno patrio argentino de 1810?", opciones: ["Junta Grande", "Cabildo Abierto", "Primera Junta", "Triunvirato"], respuesta: 2},
    { pregunta: "Qué significa en Inglés:  'Smaller than'", opciones: ["Más pequeño que", "Más grande que", "Más lindo que", "Igual que"], respuesta: 0},
    { pregunta: "¿Qué tipo de texto tiene personajes, ambiente y conflicto?", opciones: ["Lírico", "Expositivo", "Argumentativo", "Narrativo"], respuesta: 3},
    
    { pregunta: "¿Qué significa la sigla ADN?", opciones: ["Ácido ribonucleico", "Ácido del núcleo ", "Ácido desoxirribonucleico", "Ácido de nitrato"], respuesta: 2},
    { pregunta: "¿Cuál es la fórmula química del agua?", opciones: ["Dos moléculas de oxígeno y una de hidrógeno", "Dos moléculas de hidrógeno y dos de oxígeno", "Dos moléculas de hidrógeno y una de agua", "Dos moléculas de hidrógeno y una de oxígeno"], respuesta: 3},
    { pregunta: "¿Qué era el feudalismo?", opciones: ["Un sistema económico capitalista", "Un sistema de comercio marítimo", "Un tipo de república democrática", "Un sistema político y social basado en tierras y vasallaje"], respuesta: 3},
    { pregunta: "Qué significa en Inglés:  'More interesting than'", opciones: ["Muy interesante", "Más interesante que", "Menos aburrido", "No interesante"], respuesta: 1},
    { pregunta: "¿Qué autor escribió El Aleph?", opciones: ["Julio Cortázar", "Jorge Luis Borges", "Adolfo Bioy Casares", "Ricardo Piglia"], respuesta: 1},
    
    { pregunta: "¿Cuál es la respuesta correcta con respecto a la célula procariota?", opciones: ["Tiene núcleo definido", "No tiene ADN", "Tiene nucleolo", "No tiene núcleo definido "], respuesta: 3},
    { pregunta: "¿Qué significa 'Renacimiento'?", opciones: ["Muerte de la cultura clásica", "Época de guerras religiosas", "Resurgimiento del arte y la ciencia", "Revolución Industrial"], respuesta: 2},
    { pregunta: "Qué significa en Inglés:  'The most powerful'", opciones: ["El más bonito", "El más débil", "El más poderoso", "El más chiquito"], respuesta: 2},
    { pregunta: "¿Qué país utilizó el sistema de virreinatos en América?", opciones: ["Portugal", "Francia", "Inglaterra", "España"], respuesta: 3},
    { pregunta: "¿Qué personaje griego fue condenado a empujar una piedra eternamente?", opciones: ["Prometeo", "Aquiles", "Sísifo", "Odiseo"], respuesta: 2},

    { pregunta: "¿Quién fue el creador de la bandera argentina?", opciones: ["José de San Martín", "Manuel Belgrano", "Mariano Moreno", "Cornelio Saavedra"], respuesta: 1},
    { pregunta: "Qué significa en Inglés:  'The fastest car'", opciones: ["El auto más caro", "El auto más rápido", "El auto más lento", "El auto más feo"], respuesta: 1},
    { pregunta: "¿Qué figura literaria se usa en 'llora el cielo'?", opciones: ["Hipérbole", "Comparación", "Personificación", "Anáfora"], respuesta: 2},

    { pregunta: "¿Qué eran las Cruzadas?", opciones: ["Viajes de exploración a América", "Revoluciones burguesas", "Expediciones militares para recuperar Tierra Santa", "Guerras entre reinos europeos"], respuesta: 2},
    { pregunta: "Qué significa en Inglés:  'Python is easier than C++'", opciones: ["Una pitón es más grande que C++", "Python es más difícil que C++", "Python es igual que C++", "Python es más fácil que C++"], respuesta: 3},
    { pregunta: "¿Qué tipo de texto busca convencer al lector?", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Lírico"], respuesta: 2},
    
    { pregunta: "¿Qué cultura habitaba en México al llegar los españoles, y vivían sobre un pantano?", opciones: ["Incas", "Aztecas", "Mayas", "Toltecas"], respuesta: 1},
    { pregunta: "Qué significa en Inglés: 'Never give up'", opciones: ["Retroceder nunca", "Rendirse jamás", "Nunca te rindas", "Nunca estudies"], respuesta: 2},
    { pregunta: "¿Qué significa 'intertextualidad'?", opciones: ["Rima entre versos", "Relación entre textos distintos", "Repetición de palabras", "Exageración"], respuesta: 1},
    
    { pregunta: "¿Qué acontecimiento ocurrió en 1789?", opciones: ["La independencia de Argentina", "La caída del Imperio Romano", "La independencia de México", "La Revolución Francesa"], respuesta: 3},
    { pregunta: "Qué significa en Inglés: 'Keep calm'", opciones: ["Gritar fuerte", "Correr rápido", "Dormir mucho", "Mantener la calma"], respuesta: 3},
    { pregunta: "¿Quién fue Alfonsina Storni?", opciones: ["Escritora chilena", "Poeta argentina", "Novelista mexicana", "Dramaturga española"], respuesta: 1},
    
    { pregunta: "¿Quién fue conocido como el 'Padre de la Patria' en Argentina?", opciones: ["San Martín", "Belgrano", "Moreno", "Mitre"], respuesta: 0},
    { pregunta: "Qué significa en Inglés: 'Work as a team'", opciones: ["Grupo de trabajo", "Trabajar en equipo", "Dormir juntos", "Trabajar en silencio"], respuesta: 1},
    { pregunta: "¿Qué es una epopeya?", opciones: ["Relato policial", "Crónica periodística", "Relato policial", "Poema largo sobre hazañas heroicas"], respuesta: 3},
    
    { pregunta: "¿Qué ciudad fue el centro del Imperio Romano de Oriente?", opciones: ["Constantinopla", "Roma", "Atenas", "París"], respuesta: 0},
    { pregunta: "Qué significa en Inglés: 'Be polite'", opciones: ["Ser amable", "Ser policía", "Ser político", "Ser popular"], respuesta: 0},
    { pregunta: "¿Qué autor escribió 'Campos de Castilla'?", opciones: ["Juan Ramón Jiménez", "Antonio Machado", "Miguel Hernández", "Rubén Darío"], respuesta: 1},
    
    { pregunta: "¿Qué imperio construyó un extenso sistema de caminos en los Andes?", opciones: ["Maya", "Azteca", "Inca", "Olmeca"], respuesta: 2},
    { pregunta: "Qué significa en Inglés: 'Dress properly'", opciones: ["Vestirse raro", "No vestirse", "vestirse rápidamente", "Vestirse adecuadamente"], respuesta: 3},
    { pregunta: "¿Qué es un verso?", opciones: ["Cada línea de un poema", "El título del poema", "La estrofa completa", "El tema del poema"], respuesta: 0},
    
    { pregunta: "¿Qué significa 'Edad Contemporánea'?", opciones: ["Periodo posterior a la Revolución Francesa", "Época de los dinosaurios", "Época medieval", "Periodo clásico griego"], respuesta: 0},
    { pregunta: "Qué significa en Inglés: 'Have a nice day'", opciones: ["Toma un lindo día", "Come un buen día", "Que tengas un buen día", "Que tengas un mal día"], respuesta: 2},
    { pregunta: "¿Qué movimiento literario surge después del modernismo?", opciones: ["Realismo", "Vanguardismo", "Romanticismo", "Naturalismo"], respuesta: 1},
    
    { pregunta: "¿Quién fue Simón Bolívar?", opciones: ["Un virrey español", "Un rey europeo", "Un presidente argentino", "Un libertador sudamericano"], respuesta: 3},
    { pregunta: "¿Qué autor escribió 'El túnel'?", opciones: ["Ernesto Sabato", "Adolfo Bioy Casares", "Julio Cortázar", "Jorge Luis Borges"], respuesta: 0},
    { pregunta: "Qué significa en Inglés: 'Arrive on time'", opciones: ["Salir temprano", "Dormir en el trabajo", "Llegar tarde", "Llegar a tiempo"], respuesta: 3},

    { pregunta: "¿Qué tratado puso fin a la Primera Guerra Mundial en 1919?", opciones: ["Tratado de Versalles", "Tratado de Tordesillas", "Tratado de Utrecht", "Tratado de París"], respuesta: 0},
    { pregunta: "Qué significa en Inglés: 'This mother'", opciones: ["Está madre !!", "Desmadre", "Esta madre", "Estas madres"], respuesta: 2},
    { pregunta: "¿Qué recurso usa la repetición de sonidos?", opciones: ["Aliteración", "Metáfora", "Ironía", "Hipérbole"], respuesta: 0},

    { pregunta: "Qué significa en Inglés: 'Be respectful'", opciones: ["Ser respetuoso", "Ser divertido", "Ser ruidoso", "Ser famoso"], respuesta: 0},
    { pregunta: "Qué significa en Inglés: 'Meet deadlines'", opciones: ["Cruzar la linea muerta", "Conocer la línea", "Conocer la línea muerta", "Cumplir con los plazos"], respuesta: 3},
    { pregunta: "Qué significa en Inglés: 'Show respect'", opciones: ["Hacer un show", "Mostrar fotos", "Mostrar respeto", "Ver televisión"], respuesta: 2},

    ];

    preguntas.sort(() => Math.random() - 0.5);

    let score = 0;
    let indicePregunta = 0;
    let totalPorRonda = 10;
    let timer;
    let timeleft = 20;
    const TIME_PER_QUESTION = 20;
    const timerSpan = document.getElementById("timer");
    const quizBox = document.getElementById("quiz-box");
    const finalBox = document.getElementById("final-box");

    function mostrarPregunta() {
        const preguntaEl = document.getElementById("pregunta");
        const opcionesEl = document.getElementById("opciones");
        const contadorEl = document.getElementById("contador");
        const scoreEl = document.getElementById("score");

        if (!preguntaEl || !opcionesEl || !contadorEl || !scoreEl) {
            console.warn("Algún elemento del Quiz no se encontro en el DOM.");
            return;
        }

        if (indicePregunta >= totalPorRonda) {
            document.getElementById("quiz-box").style.display = "none";
            document.getElementById("final-box").style.display = "block";
            return;
        }
        let actual = preguntas[indicePregunta];
        
        preguntaEl.textContent = actual.pregunta;
        opcionesEl.innerHTML ="";

        actual.opciones.forEach((opcion, i) => {
            let boton = document.createElement("button");
            boton.textContent = opcion;
            boton.onclick = () => verificarRespuesta(i);
            opcionesEl.appendChild(boton);
        });
        
        contadorEl.textContent = `${indicePregunta + 1} de ${totalPorRonda}`;
        scoreEl.textContent = `Correctas: ${score}`;
        resetTimer();
    }

    function verificarRespuesta(opcion) {
        const actual = preguntas[indicePregunta];
        if (opcion === actual.respuesta) {
            alert("¡Correcto!");
            score ++;
        } else {
            alert("Incorrecto. La respuesta correcta era: " + actual.opciones[actual.respuesta]);
        }
        indicePregunta++;
        mostrarPregunta();
        if (indicePregunta >= preguntas.length) {
            indicePregunta = 0;
            preguntas.sort(() => Math.random() - 0.5);
        }
    }

    function resetTimer() {
        clearInterval(timer);
        timeleft = TIME_PER_QUESTION;
        timerSpan.textContent = timeleft;
        
        timer = setInterval(() => {
            timeleft--;
            timerSpan.textContent = timeleft;
            
            if (timeleft <=0) {
                clearInterval (timer);
                alert('Tiempo agotado!!!');
                indicePregunta ++;
                mostrarPregunta();
            }   
        }, 1000);
    }


   document.getElementById("btn-certificado").addEventListener("click", () => {
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const studentName = document.getElementById("nombre").value.trim() || "Estudiante";
    const studentEmail = document.getElementById("email").value.trim() || "sin_email@example.com";
    const btn = document.getElementById("btn-certificado");

    // Desactivar botón mientras genera
    btn.disabled = true;
    btn.textContent = "Generando certificado...";

    const img = new Image();
    img.src = "EPS.jpg"; // Ruta del logo

    img.onload = () => {
        // === Contenido del PDF ===
        doc.addImage(img, "PNG", 75, 10, 60, 30);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(28);
        doc.setTextColor(0, 102, 204);
        doc.text("Quiz Interdisciplinario", 105, 60, { align: "center" });

        doc.setFontSize(22);
        doc.setTextColor(0, 153, 51);
        doc.text("Certificado de Finalización", 105, 80, { align: "center" });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text(`Se otorga a: ${studentName}`, 105, 100, { align: "center" });
        doc.text(`Casilla de correo: ${studentEmail}`, 105, 120, { align: "center" });
        doc.text("Por completar el Quiz Interdisciplinario", 105, 140, { align: "center" });
        doc.text(`Puntuación: ${score} / ${totalPorRonda}`, 105, 160, { align: "center" });

        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 102, 0);
        doc.setFontSize(14);
        doc.text("Emitido por: Educación Profesional Secundaria - Proyecto EPS", 105, 180, { align: "center" });
        doc.text("Fecha: " + new Date().toLocaleDateString(), 105, 200, { align: "center" });

        doc.setFont("helvetica", "italic");
        doc.setTextColor(102, 0, 204);
        doc.text("¡Felicitaciones, sigue aprendiendo y mejorando!", 105, 220, { align: "center" });

        doc.addImage(img, "PNG", 90, 240, 30, 15);

        // === Guardar localmente (opcional) ===
        doc.save(`Certificado_${studentName}.pdf`);
        document.getElementById("Form-Data").style.display = "block";
        };
        
    });


    document.getElementById("btn-reiniciar").addEventListener("click", () => {
        const quizBox = document.getElementById("quiz-box");
        const finalBox = document.getElementById("final-box");
        
        // Reiniciar variables
        indicePregunta = 0;
        score = 0;

        // Limpiar formulario
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";

        // Mostrar el quiz y ocultar el final
        finalBox.style.display = "none";
        document.getElementById("Form-Data").style.display = "none";
        quizBox.style.display = "block";
        

        // Barajar preguntas y reiniciar contador
        preguntas.sort(() => Math.random() - 0.5);
        mostrarPregunta();
    });
    mostrarPregunta();
}
