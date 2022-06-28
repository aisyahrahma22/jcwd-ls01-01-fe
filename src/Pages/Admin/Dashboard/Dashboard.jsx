import React, { useState } from "react";
import './Dashboard.css';
// import Prosentase1 from '../Gambar/Prosentase1.svg';
// import Prosentase2 from '../Gambar/Prosentase2.svg';
// import Grafik1 from '../Gambar/Grafik1.svg';
import SidebarAdmin from '../../../Components/Admin/SidebarAdmin/SidebarAdmin.jsx';


const DashboardAdmin  = () => {
    return(
        <div className="container">
             <SidebarAdmin />
                <div className="full-box-dashboard-admin-page">
                <div className="tulisan-analisis-produk-admin">Analisis Produk dan Toko</div>
                <div className="keterangan-update-terakhir-barang">Update terakhir: 20 Januari 2022, 14.30 WIB</div>
                <div className="box-1-dashboard-admin">
                    <div className="judul-profit-hari-ini">Profit Hari Ini</div>
                    <div className="nominal-total-profit-hari-ini">Rp 10.213.500</div>
                    <div className="row-profit-dashboard"><span className="material-icons">arrow_circle_right</span></div>
                    <div className="keterangan-row-profit">+5.700.000</div>
                    <div className="prosentase-profit-box"></div>
                </div>
                <div className="box-2-dashboard-admin">
                    <div className="judul-total-pemesanan-today">Total Pemesanan Hari Ini </div>
                    <div  className="nominal-total-pemesanan-today">110</div>
                    <div className="row-2-profit-dashboard"><span className="material-icons">arrow_circle_right</span></div>
                    <div className="keterangan-row-2-profit">-60</div>
                    <div className="prosentase-profit-box-2"></div>
                </div>
                <div className="box-3-dashboard-admin">
                    <div className="judul-sisa-stok-today">Sisa Stok Hari Ini</div>
                    <div className="nominal-sisa-stok-today">5.980</div>
                    <div className="row-sisa-stok-dashboard"><span className="material-icons">arrow_circle_right</span></div>
                    <div className="keterangan-row-sisa-stok">+1.200</div>
                    <div className="prosentase-sisa-stok-box-2"></div>
                </div>
                <div className="tulisan-penting-hari-ini">Penting Hari Ini</div>
                <div className="tulisan-aktivitas-dashboard">Aktivitas yang perlu kamu ketahui untuk menjaga kepuasan pelanggan</div>
                <div className="box-pesanan-baru-dashboard-admin">
                    <div className="judul-box-pesanan">Pesanan Baru</div>
                    <div className="nominal-box-pesanan">7</div>
                </div>
                <div className="box-siap-dikirim-dashboard-admin">
                    <div className="judul-box-siap-dikirim">Siap Dikirim</div>
                    <div className="nominal-box-siap-dikirim">3</div>
                </div>
                <div className="box-sedang-dikirim-dashboard-admin">
                    <div className="judul-box-sedang-dikirim">Sedang Dikirim</div>
                    <div className="nominal-box-sedang-dikirim">0</div>
                </div>
                <div className="box-selesai-dashboard-admin">
                    <div className="judul-box-selesai">Selesai</div>
                    <div className="nominal-box-selesai">7</div>
                </div>
                <div className="box-dibatalkan-dashboard-admin">
                    <div className="judul-box-dibatalkan">Dibatalkan</div>
                    <div className="nominal-box-dibatalkan">3</div>
                </div>
                <div className="box-chat-baru-dashboard-admin">
                    <div className="judul-box-chat-baru">Chat Baru</div>
                    <div className="nominal-box-chat-baru">0</div>
                </div>
                <div className="tulisan-kadaluarsa-obat-dashboard">Kedaluwarsa Obat</div>
                <div className="tulisan-cek-tanggal-kadaluarsa-dashboard">Cek tanggal kedaluwarsa untuk mengorganisir stok obat </div>
                <div className="box-kadaluarsa-dashboard-admin">
                    <div className="keterangan-telah-expired">Telah Kedaluwarsa</div>
                    <div className="nominal-telah-expired">17</div>
                    <div className="keterangan-expired-bulan-ini">Kedaluwarsa Bulan Ini</div>
                    <div className="jumlah-expired-bulan-ini">0</div>
                    <div className="keterangan-expired-3-bulan-lagi">Kedaluwarsa 3 Bulan Kedepan</div>
                    <div className="nominal-expired-3-bulan-lagi">3</div>
                </div>
                <div className="box-profit-dashboard-admin">
                    <div className="judul-dalam-box-profit">Profit</div>
                    <div className="keterangan-dalam-box-profit">Data dinyatakan dalam jutaan rupiah</div>
                    <div className="dropdown-dalam-box-profit">Dropdown</div>
                    <div className="grafix-box-dalam-box-profit"></div>
                </div>
                <div className="box-penjualan-obat-dashboard-admin">
                    <div className="tulisan-pejualan-obat-1">Penjualan Obat</div>
                    <div className="garis-1-dalam-box-pejualan-obat"></div>
                    <div className="keterangan-dalam-box-pejualan-obat">Obat Bebas</div>
                    <div className="dropdown-dalam-box-pejualan-obat">Dropdown</div>
                    <div className="grafix-box-dalam-box-pejualan-obat"></div>
                </div>
                </div>
        </div>
    )
}

export default DashboardAdmin