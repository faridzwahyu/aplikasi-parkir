export function dapatTanggal() {
    const now = new Date();

    const tanggal = now.getDate();
    const bulan = now.getMonth() + 1;
    const tahun = now.getFullYear();
    
    return `${tanggal}/${bulan}/${tahun}`;
}