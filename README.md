# AesyPruebatecnica01

1. Asegurate de tener Node.js y npm instalados
2. Se solicita crear la aplicacion utilizando estas tecnologias: Angular
3. Se querie una cuenta de Github

# Ejercicio Practico
* Objetivo: Crear una aplicaicon que ayude a obtener una lista de usuarios y muestre la informacion de sus perfiles, explotando la Api: https://api.github.com/search/users?q=BusquedaQueQueramos

# REQUERIMIENTOS GENERALES
1. La aplicacion debe cumplir con los siguientes requisitos funcionales:
* Crear una aplicacion que incluya un campo de entrada texto y un boton para que pueda capturar el usuario y recuperar la informacion de la API
* Mostrar los primeros 10 usuarios del resultado de la busqueda, incluyendo su nombre de usuario ('user.login') y el id ('user.id') de cada registro
* Convertir cada Perfil de usuario en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya la propiedad 'user.login' como parametro
* Crear un componente independiente en el que se lea el parametro de la URL, y a continuacion, obtenga los datos de dicho usuario mediante la siguiente API : https://api.github.com/search/users?q=BusquedaQueQueramos
* Incluir la imagen del usuario ('avatar_url') y alguna otra informacion (de su eleccion) en el componente
* Incluir un validador que verifique que el texto de busqueda de usuarios sea de un minimo de 4 caracteres, y otro que NO permita realizar la busqueda de la palabra "mariogiron"
* Crear grafico para mostrar el numero de seguidores
* Incluir componente para mostrar mensajes de Errores Generales en toda la app