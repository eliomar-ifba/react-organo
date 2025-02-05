import "./Rodape.css";

const Rodape = () => {
  const urlLogo = "/assets/imagens/logo.png";

  return (
    <footer className="rodape">
      <div className="redes-sociais">
        <a href="https://www.facebook.com" target="_blank">
          <img src="./assets/imagens/fb.png" alt="facebook" />
        </a>
        <a href="https://www.x.com" target="_blank">
          <img src="./assets/imagens/tw.png" alt="twiter" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="./assets/imagens/ig.png" alt="instagram" />
        </a>
      </div>

      <img src={urlLogo} alt="Logo organo" />
      <p>
        Desenvolvido por: <strong>Eliomar e Alura</strong>.
      </p>
    </footer>
  );
};

export default Rodape;
