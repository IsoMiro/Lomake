function validoiLomake() {
    var kayttajaID = document.getElementById('kayttajaID').value;
    var salasana = document.getElementById('salasana').value;
    var postinumero = document.getElementById('postinumero').value;
    var sahkoposti = document.getElementById('sahkoposti').value;
    var sukupuoli = document.getElementById('sukupuoli').value;
    var kieli = document.getElementById('kieli').value;
    var maa = document.getElementById('maa').value;
  
    var virheet = [];
  
    // Nollaa aiemmat virheet
    document.getElementById('kayttajaID-virhe').innerHTML = "";
    document.getElementById('salasana-virhe').innerHTML = "";
    document.getElementById('postinumero-virhe').innerHTML = "";
    document.getElementById('sahkoposti-virhe').innerHTML = "";
    document.getElementById('sukupuoli-virhe').innerHTML = "";
    document.getElementById('kieli-virhe').innerHTML = "";
    document.getElementById('maa-virhe').innerHTML = "";
  
    if (kayttajaID.length < 6) {
      virheet.push("Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä.");
      document.getElementById('kayttajaID-virhe').innerHTML = "Vähintään 6 merkkiä.";
    }
  
    if (salasana.length < 6 || !/[0-9]/.test(salasana) || !/[A-Z]/.test(salasana) || !/[!@£$€&%#]/.test(salasana)) {
      virheet.push("Salasanan pitää olla vähintään 6 merkkiä pitkä ja sisältää vähintään yksi numero, yksi iso kirjain ja jokin erikoismerkki (!@£$€&%#).");
      document.getElementById('salasana-virhe').innerHTML = "Salasana ei täytä vaatimuksia.";
    }
  
    if (!/^\d{5}$/.test(postinumero)) {
      virheet.push("Postinumeron pitää olla 5 numeroa.");
      document.getElementById('postinumero-virhe').innerHTML = "Tarkista postinumero.";
    }
  
    if (!/^\S+@\S+\.\S+$/.test(sahkoposti)) {
      virheet.push("Sähköpostiosoitteen tulee olla sähköpostiosoitteen muotoinen.");
      document.getElementById('sahkoposti-virhe').innerHTML = "Tarkista sähköpostiosoite.";
    }
  
    if (sukupuoli === "") {
      virheet.push("Valitse sukupuoli.");
      document.getElementById('sukupuoli-virhe').innerHTML = "Valitse sukupuoli.";
    }
  
    if (kieli === "") {
      virheet.push("Valitse kieli.");
      document.getElementById('kieli-virhe').innerHTML = "Valitse kieli.";
    }
  
    if (maa === "") {
      virheet.push("Valitse maa.");
      document.getElementById('maa-virhe').innerHTML = "Valitse maa.";
    }
  
    if (virheet.length > 0) {
      var virheviesti = virheet.join("\n");
      alert("Seuraavat virheet havaittu:\n" + virheviesti);
    } else {
      alert("Lomake lähetetty onnistuneesti!");
      // Voit tässä lisätä lomakkeen lähettämisen palvelimelle tai muun haluamasi toiminnallisuuden.
    }
  }
  