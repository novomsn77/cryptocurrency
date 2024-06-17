const light = document.querySelector("#sun");
const moonMode = document.querySelector("#moon");
const modoDark = document.querySelector("html");
const imageLogo = document.querySelector(".logo");
const total = document.querySelector(".total");
const spanTotal = document.querySelector("span");
const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const sol = document.getElementById("solana");
const flk = document.getElementById("floki");
const maga = document.getElementById("magacap");
const doge = document.getElementById("dogecoin");
const dwh = document.getElementById("dogwifcoin");
const pepe = document.getElementById("pepecap");
const pepetoken = document.getElementById("pepe");
const btcToken = document.getElementById("bitcoincap");
const magatoken = document.getElementById("maga");
const solanaToken = document.getElementById("solanacap")
const ethereumToken = document.getElementById("ethereumcap")
const dogwifToken = document.getElementById("dogwifcap")
const dogeToken = document.getElementById("dogecap")
const flokiToken = document.getElementById("flokicap")
const footer = document.querySelector(".logorodape")



light.addEventListener("click", () => {
  modoDark.classList.remove("dark");
  imageLogo.src = "./image/logo_cripto.png";
  light.style.display = "none";
  moonMode.style.display = "block";
  footer.src = "./image/logo_cripto.png";
  
});

moonMode.addEventListener("click", () => {
  modoDark.classList.add("dark");
  light.style.display = "block";
  imageLogo.src = "./image/logo_cripto white.png";
  moonMode.style.display = "none";
  footer.src = "./image/logo_cripto white.png";
  });


  var currentTime = new Date().getHours();
  if (18 <= currentTime && currentTime < 24) {
    modoDark.classList.add("dark");
    imageLogo.src = "./image/logo_cripto white.png";
    moonMode.style.display = "none";
    light.style.display = "block";
    footer.src = "./image/logo_cripto white.png";
    } else if (24 <= currentTime && currentTime > 1) {
      modoDark.classList.remove("dark");
      imageLogo.src = "./image/logo_cripto.png";
      footer.src = "./image/logo_cripto.png";
    }
  

var priceCoin = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Csolana%2Cethereum%2Cdogecoin%2Cdogwifcoin%2Cfloki%2Cmaga%2Cpepe&vs_currencies=brl&include_market_cap=true',
  method: 'GET',
  headers: {
  }
  };



  $.ajax(priceCoin).done(function (response) {
    //console.log(response);
    btc.innerHTML = response.bitcoin.brl;
    eth.innerHTML = response.ethereum.brl;
    sol.innerHTML = response.solana.brl;
    flk.innerHTML = response.floki.brl;
    doge.innerHTML = response.dogecoin.brl;
    dwh.innerHTML = response.dogwifcoin.brl;
    magatoken.innerHTML = response.maga.brl;
    maga.innerHTML = response.maga.brl_market_cap;
    pepetoken.innerHTML = response.pepe.brl;
    pepe.innerHTML = response.pepe.brl_market_cap;
    btcToken.innerHTML = response.bitcoin.brl_market_cap;
    solanaToken.innerHTML = response.solana.brl_market_cap;
    ethereumToken.innerHTML = response.ethereum.brl_market_cap;
    dogeToken.innerHTML = response.dogecoin.brl_market_cap;
    dogwifToken.innerHTML = response.dogwifcoin.brl_market_cap;
    flokiToken.innerHTML = response.floki.brl_market_cap;
    });

    

/*

let btnacess = 0;
btnPeguntar.addEventListener('click', () => {
  if(btnacess === articleTexto.length - 1){
    btnacess = 0;
  }else{
    btnacess ++
    
  } 


  articleTexto.forEach((acessar) => {
    acessar.classList.remove('active');
    });
    articleTexto[btnacess].classList.add('active');

    });
*/

  
  
  




