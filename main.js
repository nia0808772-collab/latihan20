let dataBarang = [] //aray global untuk menyimpan data barang 

// fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function process() {
  //reset data barang setiap kali proses di jalankan
  dataBarang = [] 
  
  //reset output setiap kali proses harga dijalankan
  document.getElementById("hasil").innerHTML = ""
  
   let JUMLAH_BARANG = Number(prompt("Masukan total belanja barang")) 
  
  // LOOP INPUT HARGA BARANG
  for (let i = 1; i <= JUMLAH_BARANG; i++) {
    let harga = Number(prompt("Masukkan harga barang ke-" + i));
    dataBarang.push(harga)
  }
  
  //aktifkan tombol cetak
  document.getElementById("cetak").disabled = false
  
  //menampilkaninfo barang yang sudah diinput
  document.getElementById("hasil").innerHTML = "Data barang berhasil di input.(jumlah barang:" + dataBarang.length + ")  "
}

function cetak(){
  let total = 0
  let output = ""

//loop input harga barang dari array global data barang
for (let i = 0; i < dataBarang.length; i++) {
  let harga = dataBarang [i]
  total += harga
  
  output += "Barang ke-" + (i + 1) + ": Rp " + rupiah(harga) + "<br>"
}
  // HITUNG DISKON
  let diskon = 0
  if (total > 500000) {
    diskon = total * 0.2
  }

  let setelahDiskon = total - diskon

  // HITUNG PPN
  let ppn = setelahDiskon * 0.1

  // TOTAL BAYAR
  let totalBayar = setelahDiskon + ppn

  // OUTPUT RINGKASAN
  output += `
    <div class="ringkasan">
      Total belanja: Rp ${rupiah(total)}<br>
      Diskon: Rp ${rupiah(diskon)}<br>
      PPN 10%: Rp ${rupiah(ppn)}<br>
      Total bayar: Rp ${rupiah(totalBayar)}
    </div>
  `

  document.getElementById("hasil").innerHTML = output
}