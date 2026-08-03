# NEXFOR · entrega 3B · versión 2.3.0

**El nexo entre la vocación y el servicio**
Secretaría Académica · DCFyCCCO · Melina La Fuente & Eliana Velázquez · 2026

---

## Qué hay en esta carpeta

| Archivo | Para qué es |
|---|---|
| `index.html` | La app. Es el archivo principal. |
| `manifest.webmanifest` | Lo que hace que se pueda instalar como aplicación. |
| `sw.js` | Lo que hace que abra sin conexión. |
| `icon-192.png` · `icon-512.png` | El ícono de NEXFOR en el celular y en el escritorio. |
| `apple-touch-icon.png` | El ícono en iPhone. |
| `favicon.png` | El ícono chico de la pestaña del navegador. |
| `escudo.png` | El escudo institucional. |

**Los ocho archivos van juntos, en la misma carpeta.** Si falta alguno, la app abre
pero no se puede instalar.

---

## Cómo subirla a GitHub

1. Entrá a tu repositorio en GitHub.
2. **Add file → Upload files** y arrastrá los ocho archivos.
3. Abajo, en el cuadro de comentario, escribí algo como
   *"NEXFOR 2.0.0 · entrega 1"* y tocá **Commit changes**.
4. Andá a **Settings → Pages** y verificá que esté publicando desde la rama principal.
5. Esperá uno o dos minutos y abrí la dirección de tu GitHub Pages.

Si ya tenías la versión anterior subida, GitHub te va a preguntar si querés
reemplazar `index.html`. Decile que sí.

---

## Cómo instalarla

**Android / computadora (Chrome, Edge):** al abrirla aparece abajo un cartel que dice
*Instalá NEXFOR*. Si no aparece, entrá al menú ⋮ del navegador y elegí
**Instalar aplicación**.

**iPhone (Safari):** tocá el botón de compartir y después **Agregar a inicio**.

Una vez instalada abre con su propio ícono, sin barra de navegador, y la sesión
queda guardada: no hay que escribir la contraseña cada vez.

---

## Cómo entrar

| Quién | Usuario | Contraseña inicial |
|---|---|---|
| Mely | `melina` | `melina2026` |
| Eliana | `eliana` | `eliana2026` |
| Sergio | `sergio` | `sergio2026` |
| Docentes | `apellido.nombre` — por ejemplo `acevedo.federico` | `docente2026` |
| Instructores nuevos | `apellido.nombre` — por ejemplo `euliarte.daniela` | `instructor2026` |
| Aspirantes | su DNI | su DNI |

**La primera vez, la app obliga a cambiar la contraseña.** Después de eso, la clave
inicial ya no sirve y nadie puede verla: solo se puede blanquear.

Dos casos con usuario especial, porque hay dos Vázquez:
`vazquez.contencion` (Emanuel) y `vazquez.tiro` (Mauricio).

---

## Qué anda en esta entrega

**De la entrega 1**
- Ingreso con las cuentas reales, cambio de contraseña obligatorio la primera vez
- Registro de accesos y de recorrido de pantallas
- Saludo según la hora y según quién entra
- Las cuatro paletas y el modo claro / oscuro, guardados en el perfil
- Funciona sin conexión

**Nuevo en la entrega 2**

| Pantalla | Qué se puede hacer | Quién |
|---|---|---|
| **Centro de Comando** | Aspirantes activos, materias, asistencia del día, temas sin firmar, qué clase se está dictando ahora y últimos temas cargados | Todos |
| **Pizarra de Horarios** | Ver el horario; editar celdas, agregar y borrar franjas | Ver: todos · Editar: Académica |
| **Revisión de Aspirantes** | Separar apellido y nombre, corregir datos y **asignar sección de a uno o de a varios** | Académica |
| **Libro de Temas** | Cargar el tema (el Nº de clase y el código se generan solos), **firmar con el dedo**, imprimir en el formato oficial | Docentes y Académica |
| **Asistencia** | Marcar P / A / J / T con un toque, "todos presentes", contadores del día | Docentes, Académica e instructores |
| **Calificaciones** | 1ª y 2ª nota, examen final donde corresponde, con Prom. Cursada y Prom. Final calculados y aviso de riesgo | Docentes y Académica |
| **Mi Perfil** | Cambiar mis datos, cómo quiero que me salude, paleta, modo y **mi contraseña** | Todos |

## Por dónde empezar

1. **Revisión de Aspirantes** primero. Sin sección asignada, la asistencia y las notas
   no tienen a quién cargarle nada. Usá "Separar nombres", corregí lo que esté mal,
   marcá varios con el casillero y asignales la sección de una vez.
2. Después ya se puede cargar asistencia y notas de esa sección.

**Nuevo en la entrega 3A**

| Pantalla | Qué se puede hacer | Quién |
|---|---|---|
| **Material de Estudio** | Subir Word o PDF (el texto se extrae solo y queda para NEXIA), pegar links de Drive o YouTube, abrir, borrar, y ver el medidor de espacio | Subir: docentes y Académica · Ver: todos |
| **NEXIA** | Preguntar y recibir respuesta de lo cargado o del material, citando documento y página. Lo que no sabe queda pendiente | Todos · el panel de pendientes, Académica |
| **Mensajes** | Escribir a Secretaría Académica o a una persona, responder, marcar leído | Todos |
| **Comunicados** | Publicar, fijar arriba, borrar | Publicar: docentes y Académica |
| **Calendario** | Ver el mes, tocar un día para cargar un evento, borrar | Cargar: docentes y Académica |
| **Novedades** | Parte diario por tipo | Docentes y Académica |

## Cómo entrenar a NEXIA

1. Andá a **Material de Estudio**, elegí la materia y subí el Word o el PDF.
2. Mientras sube, la app le extrae el texto sola. Cuando termina te dice cuántos bloques
   leyó, y en la lista el material queda marcado con **NEXIA lo leyó**.
3. Probá en **NEXIA** una pregunta sobre ese documento: te contesta con el fragmento y de
   qué documento y página salió.
4. Lo que no sepa queda en **consultas sin responder**. Respondelas con palabras clave y
   NEXIA las contesta sola de ahí en adelante.

Empezá por el **reglamento de convivencia**: es el que responde la mayoría de las
consultas.

**Nuevo en la entrega 3B**

| Pantalla | Qué se puede hacer | Quién |
|---|---|---|
| **Usuarios** | Crear cuentas, editar, dar de baja, **blanquear contraseñas**, marcar quién es instructor de cada sección y pegar una lista de aspirantes de una vez | Ver: Académica · Crear y blanquear: administración |
| **Conducta y Certificados** | Cargar las dos notas de conducta con las amonestaciones y los certificados a la vista; cargar amonestaciones por cantidad; cargar certificados médicos que justifican las inasistencias solos | Instructor de su sección · Académica |
| **Perfil 360°** | El legajo completo: mérito, promedios, asistencia, materias en riesgo, notas por materia, talleres, conducta, amonestaciones, certificados e informes | Docentes, instructores y Académica |
| **Informes** | Los cuatro tipos, con los antecedentes del aspirante autocompletados y PDF con membrete y firma | Docentes, instructores y Académica |
| **Materias** | Crear, editar tipo, escala y examen final; asignar docentes | Académica |

---

## IMPORTANTE · antes de usar Usuarios: la función de Supabase

El blanqueo de contraseñas no puede hacerse desde el HTML porque necesita la clave
secreta del proyecto. Va en una función que vive dentro de Supabase. **Se instala una
sola vez** y después no se toca más.

1. Entrá al panel de Supabase → **Edge Functions** (menú de la izquierda).
2. Tocá **Deploy a new function** → **Via Editor**.
3. En el nombre poné exactamente: `admin-usuarios`
4. Borrá todo el código de ejemplo que aparece y **pegá el contenido del archivo
   `admin-usuarios.ts`** que viene con esta entrega.
5. Tocá **Deploy**. Tarda menos de un minuto.

No hace falta configurar ninguna clave: Supabase le pasa la suya sola.

La función verifica dos cosas antes de hacer nada: que quien la llama esté logueado y
que su rol sea administración. Si un docente o un aspirante intentara usarla, la
rechaza.

**Mientras no la instales**, en Usuarios vas a poder ver y editar la lista, pero los
botones de crear y blanquear van a dar error.

## Qué viene en la última entrega

**Entrega 3C** — Aula Virtual con los exámenes, Mesa de Entradas, Panel de
Administración e Inteligencia Institucional.

---

## Si algo no anda

- **"Usuario o contraseña incorrectos"** con una clave que debería andar: puede que
  esa persona ya la haya cambiado. Hay que blanquearla.
- **"No hay conexión con el servidor"**: revisá internet. Si hay internet y sigue
  igual, puede que el proyecto de Supabase se haya pausado por inactividad —
  se despausa desde el panel.
- **No aparece el cartel de instalar**: solo aparece la primera vez y si no la
  instalaste antes. Igual se puede instalar desde el menú del navegador.
