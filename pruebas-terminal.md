pruebas terminal

¿Qué es cygwin? 

Cygwin es una consola, herramientas GNU que proporcionan un comportamiento similar a los sistemas Unix en Microsoft Windows. GNU es un sistema operativo desoftware libre, es decir, respeta la libertad de los usuarios. El sistema operativo GNU consiste en paquetes de GNU (programas publicados específicamente por el proyecto GNU) además de software libre publicado por terceras partes. El desarrollo de GNU ha permitido que se pueda utilizar un ordenador sin software que atropelle nuestra libertad.

Sesión del 15 de diciembre de 2022:

Descargamos Cygwin y ejecutamos setup-x86_64.exe. En esta sesión instalamos librerías y paquetes. Para ello nos vamos a view category y seleccionamos la opción full. Ahí podemos ver toda la lista de paquetes disponibles, no es necesario instalar las cosas que no vayamos a usar porque opcupa espacio en disco. Instalamos curl, programa para comunicarnos con protocolos de internet. linx, navegador web en linea de comandos. Git y libgit. Ruby, un lenguaje informático. Certificates. Wbget y wbget2.

En cygwin vamos a ejecutar los comandos de bash, un lenguaje de programación que funciona en la terminal de Linux. Bash --version para saber que versión tenemos. También podemos abrir man bash y se abre el manual de bash. 
Estructura que se utiliza en la terminal: comando+opciones+argumentos.   
less y more para leer un archivo de texto. 

¿Qué es git? 

Git es un sistema de control de versiones distribuido gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta proyectos muy grandes, con rapidez y eficiencia.

Apt-cyg es un programa para funcionar el modo apt en la terminal. apt-cyg es un administrador de paquetes de Cygwin. Incluye un instalador de línea de comandos para Cygwin que coopera con Cygwin Setup y usa el mismo repositorio.

Instalamos Nano con apt-cyg install nano. Al instalar nano en mi ordenador da error, intentamos probar si es culpa del antivirus que tengo instalado en mi ordenador y lo pausamos para ver si ese es el problema. No da error y deja instalar nano. 

El primer comando que hemos aprendido a utilizar es pwd, que significa 'dónde estoy', es decir, en que carpeta o lugar estoy de mi ordenador.  Tras esto editamos un archivo con nano donde hay una variable de cygwin que dice cual es el tipo de sistema que queremos utilizar si el de Windows o el de cygwin. Para ello escribimos nano/etc/nsswitch.conf y le damos a enter. Nos vamos a la parte baja del archivo y escribimos db_home: windows. Otra línea debajo con # y escribo "establezco que la variable db_home es la de windows". Ya nos sale conectado con los discos de Windows, por eso aparece /cygdrive/c/Users/Paula. Hacemos un ls, listame los archivos de esta carpeta, y vemos todo lo que tenemos en nuestro espacio.   


Posteriormente copiamos la dirección del enlace de nuestro repositorio de Github. Entramos a través de la terminal a nuestro entorno de trabajo y copiamos lo siguiente: git clone + direccion de enlace. Con esto clonamos la dirección del repositorio, Git se descarga una copia de todo lo que tenemos en una carpeta que se va a llamar como se llama el repositorio. Para comprobar que lo tenemos hacemos un ls. ¿Cómo vamos a la carpeta? con cd, cambiar directorio. Directorio es lo mismo que carpeta. 

¿Cómo ver el contenido de, por ejemplo, el readme? Con el comando less.

Creamos el archivo Pruebas-terminal.md. Lanzamos nano con el nombre pruebas-termninal y lo guardamos. Pero solo lo tenemos en la terminal, pero no lo tenemos en Github

Clase 4

Cygwin es como si tuvieramos linux en Windows, para conectarse lo hace a través de una carpeta que se llama cygdrive. Es un punto de montaje, como con los USB. 

Subimos Pruebas-terminal.md a Github. Primeros hacemos un Git status, ahi nos dice que hay archivos sin seguimiento y nos dice que tenemos que hacer. Usamos git add para comitearlo. Primero conectamos Git con la terminal. Git remote -v, mirame los Git remotos de ese repositorio; aparece dos lineas, push y fetch.

Escribimos git config user.name y nos dice cual es el usuario que tiene configurado y nos dice que no tiene niguno. A continucion escribimos el nombre de nuestra cuenta de GitHub. Nos vamos a settings en Github y dentro a tokens, allí generamos un nuevo token. Ponemos echo y el token > ../. token nos va a crear un archivo oculto y ahi vamos a tener el token. Después hacemos un git add (.este punto es necesario). Después ponemos git status. Git commit -m "subo cambios a pruebas terminal". Git push y se suben los cambios con el nombre de la cuenta y el token.


Clase 5

Cofigurar nanorc. Escribimos nano ~/. nanorc y se abre nuestro archivo nano. Nano es un editor de texto que configuramos desde la terminal. 
