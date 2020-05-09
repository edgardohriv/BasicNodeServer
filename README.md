# BasicNodeServer

1.- Iniciamos inicializando el repositorio git y subiendolo al servidor remoto

    echo "# BasicNodeServer" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/edgardohriv/BasicNodeServer.git
    git push -u origin master

2 .- Create .gitignore file
    # Ignore node_modules folder
    node_modules

    # binaries
    dist/

    # editors
    .vs/
    .vscode/

3.- Inicializamos node 

    npm init y
    
4.- Installing necesary packages typescript , ts-node , nodemon , express 

    -D para que los incluya como paquetes de desarrollo 
    npm i -D typescript ts-node express nodemon  @types/node @types/express

5.- Creamos el archivo tsconfig.json

    tsc --init

6.- tweak tsconfig.json

7.- Creamos la carpeta src a nivel root , la carpeta dist se crea automaticamente al compilar

8.- Agregamos las tareas a ejecutar con npm en el archivo package.json

9.- Creamos las clases server, router e index y ejecutanmos desde consola:
    
    npm run dev

10.- Verificamos la funcionalidad del router entrando a : http://localhost:{PUERTO}/

11.- Si hemos creado el archivo tasks.json dentro de la carpeta .vscode podremos ejecutar "npm run dev" desde visual studio code tecleando CTRL+SHIFT+B .

    Este archivo lo podemos crear automaticamente desde la opcion "Terminal" => "Configure Default Build Task" en el menu principal de visual studio code.
    VSCode nos mostrarpa los scripts que  hayamos definido dentro del archivo "package.json"  por ejemplo aqui yo he definido 3 scripts:

        "start":"dist/index.js",
        "dev":"nodemon src/index.ts",
        "build":"tsc "

        ( Estos scrips se ejecutan desde terminal ejecutando : "npm run {script}" )

    Por lo tanto me  vscode me pedira a partir de cual script quiero generar el archivo task.json