var space = document.querySelector("body > space");
var earth = document.querySelector("body > earth");
var face = document.querySelector("body > earth > face");

earth.onmousemove = function (e) {
  //face seguir o cursor do mouse quando hover earth
  var posicaoY = e.pageY - earth.offsetTop;
  var posicaoX = e.pageX - earth.offsetLeft;
  if (posicaoY < earth.offsetHeight / 2) {
    face.style.top = posicaoY + "px";
    face.style.bottom = "auto";
  } else {
    face.style.top = posicaoY - 60 + "px";
    face.style.bottom = "auto";
  }
  if (posicaoX < earth.offsetWidth / 2) {
    face.style.left = posicaoX + "px";
    face.style.right = "auto";
  } else {
    face.style.left = posicaoX - 100 + "px";
    face.style.right = "auto";
  }
};

earth.onmouseleave = function (e) {
  //centralizar face novamente
  face.style.top = earth.offsetHeight / 2 - face.offsetHeight / 2 + "px";
  face.style.left = earth.offsetWidth / 2 - face.offsetWidth / 2 + "px";
};

class cloudClass {
  constructor() {
    //modelos = altura|largura
    let modelos = ["30|70", "10|30", "25|35", "25|40", "10|40", "15|50", "20|60", "20|45", "25|85", "25|85"];

    let index_modelos = Math.floor(Math.random() * 10);
    let modelo = modelos[index_modelos].split("|");

    this.altura = modelo[0];
    this.largura = modelo[1];
    this.opacidade = Math.random();
    this.velocidade = Math.floor(Math.random() * (30 - 10 + 1) + 10);

    this.top = Math.floor(Math.random() * (120 - 20 + 1) + 20);
  }
}

function generateCloud() {
  var surface = document.querySelector("body > earth > surface");

  for (var i = 0; i < 7; i++) {
    let nuvem = new cloudClass();
    surface.innerHTML = surface.innerHTML + "<cloud style='top:" + nuvem.top + "px;height:" + nuvem.altura + "px;width:" + nuvem.largura + "px;opacity:" + nuvem.opacidade + ";animation-duration:" + nuvem.velocidade + "s;'></cloud>";
  }
}

generateCloud();

class starClass {
  constructor() {
    this.size = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    this.top = Math.floor(Math.random() * (1500 - 0 + 1) + 0);
    this.left = Math.floor(Math.random() * (1500 - 0 + 1) + 0);
  }
}

function generateStar() {
  for (var i = 0; i < 100; i++) {
    let estrela = new starClass();
    space.innerHTML = space.innerHTML + "<star style='top:" + estrela.top + "px;left:" + estrela.left + "px;height:" + estrela.size + "px;width:" + estrela.size + "px;'></star>";
  }
}

generateStar();
