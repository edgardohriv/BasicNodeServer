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

