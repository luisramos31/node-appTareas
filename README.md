## Aplicación de comandos (AppTareas)

Este es el codigo de la app

Recuerden instalar los paquetes de node

```
mpn install
```
LISTA DE COMANDOS:

Para crear una tarea nueva:

```
node app crear -d "nombreTarea"
```

Para mostrar el listado de tareas:
```
node app listar
```

Para actualizar el estado de una tarea:

```
node app actualizar -d "nombreTareaPorActualizar" -c true (o false)
```

Para borrar una tarea:

```
node app borrar -d "nombreTareaPorBorrar"
```

