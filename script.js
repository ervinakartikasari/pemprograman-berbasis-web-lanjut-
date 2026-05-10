function tampilkanNama() {
  let nama = document.getElementById("namaInput").value;

  document.getElementById("hasilNama").innerHTML = "Halo, " + nama + " 👋";
}

function tambahHobi() {
  let hobi = document.getElementById("hobiInput").value;

  if (hobi !== "") {
    let li = document.createElement("li");

    li.textContent = hobi;

    document.getElementById("listHobi").appendChild(li);

    document.getElementById("hobiInput").value = "";
  }
}

function hapusSemua() {
  document.getElementById("listHobi").innerHTML = "";
}

document.getElementById("realtimeInput").addEventListener("keyup", function () {
  document.getElementById("hasilRealtime").innerHTML =
    "Kamu mengetik: " + this.value;
});
