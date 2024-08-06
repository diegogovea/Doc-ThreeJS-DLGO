const cubeFolder = gui.addFolder("Cube")
cubeFolder.add(cube.rotation, "x", 0, Math.PI * 2)
cubeFolder.add(cube.rotation, "y", 0, Math.PI * 2)
cubeFolder.add(cube.rotation, "z", 0, Math.PI * 2)
cubeFolder.open()

const cameraFolder = gui.addFolder("Camera")
cameraFolder.add(camera.position, "z",0,20)
cameraFolder.open()

//ESTA PARTE DE CODIGO SERVIRÁ PARA MÁS ADELANTE
