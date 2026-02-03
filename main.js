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
  document.getElementById("hasil").innerHTML = "Data barang berhasil di input.(jumlah barang:" + dataBarang.length + ") "
}

function cetak(){
  
}