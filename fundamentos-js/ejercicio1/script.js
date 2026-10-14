function ejecutarEjercicio() {
      const texto = "Hola JavaScript";
      const numero = 2026;
      const booleano = true;
      const objeto = { nombre: "Ana", edad: 25 };

      console.log("console.log -> Cadena de texto:", texto, "| Tipo:", typeof texto);
      console.info("console.info -> Número:", numero, "| Tipo:", typeof numero);
      console.debug("console.debug -> Booleano:", booleano, "| Tipo:", typeof booleano);
      console.error("console.error -> Objeto:", objeto, "| Tipo:", typeof objeto);

      document.getElementById("resultado").innerText = 
        `Variables declaradas:\n` +
        `- texto: "${texto}" (${typeof texto})\n` +
        `- numero: ${numero} (${typeof numero})\n` +
        `- booleano: ${booleano} (${typeof booleano})\n` +
        `- objeto: ${JSON.stringify(objeto)} (${typeof objeto})`;
    }