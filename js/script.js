function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (!alas || !tinggi) {
    alert("Semua field pada bagian LUAS harus diisi dan tidak boleh 0!");
    return;
  }

  const hasil = 0.5 * alas * tinggi;
  document.getElementById("hasilLuas").innerText = `Luas segitiga: ${hasil}`;
}

function hitungKeliling() {
  const sisi1 = parseFloat(document.getElementById("sisi1").value);
  const sisi2 = parseFloat(document.getElementById("sisi2").value);
  const sisi3 = parseFloat(document.getElementById("sisi3").value);

  if (!sisi1 || !sisi2 || !sisi3) {
    alert("Semua field pada bagian KELILING harus diisi dan tidak boleh 0!");
    return;
  }

  const hasil = sisi1 + sisi2 + sisi3;
  document.getElementById("hasilKeliling").innerText = `Keliling segitiga: ${hasil}`;
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasilLuas").innerText = "";
}

function resetKeliling() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("hasilKeliling").innerText = "";
}
