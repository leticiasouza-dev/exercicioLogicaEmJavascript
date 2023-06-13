var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d"); //getContext para criar um pincel para desenhos 2d


pincel.fillStyle = "lightgrey"; // fillStyle para definir a cor que vou usar..
pincel.fillRect(0, 0, 600,400);  //fillReact para preencher um retangulo. 

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);


// para criar um triângulo.
pincel.fillStyle = " yellow";
pincel.beginPath() // criar um novo caminho.
pincel.moveTo(300, 200); //ponto inicial do nosso triângulo.
pincel.lineTo(200, 400) // linha até tal ponto
pincel.lineTo(400, 400) // linha até tal ponto
pincel.fill() // para preencher


//criação da bolinha(circulo)
pincel.fillStyle = "blue";
pincel.beginPath() 
pincel.arc(300, 200, 50, 0, 2 * 3.14); // .arc para criação de um circulo.
pincel.fill()

