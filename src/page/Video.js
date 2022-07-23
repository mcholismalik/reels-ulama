import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Video() {
  let { id } = useParams();
  const [datas, setDatas] = useState([
    {
      author: "Buya Yahya",
      title: "Mencari Ketenangan Hati",
      category: "tasawuf",
      videoUrl: "9Fu0SaECj30",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Fiqih dalam Berwudhu",
      category: "fiqih",
      videoUrl: "hYZ2jGx-BLA",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Definisi Ilmu Tauhid",
      category: "tauhid",
      videoUrl: "KZ4TJnZMvho",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Ilmu Tauhid di Bagi Dua",
      category: "tauhid",
      videoUrl: "XKoYwggz1eo",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Pembagian Tauhid",
      category: "tauhid",
      videoUrl: "ioLqAcjUAH0",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Belajar Fiqih dari Internet, Bolehkah ?",
      category: "fiqih",
      videoUrl: "BEBJMDhK-xA",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Cara Mandi Wajib/ Junub",
      category: "fiqih",
      videoUrl: "S6_yPNz9QLk",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Beribadah dengan Ilmu Tasawuf",
      category: "tasawuf",
      videoUrl: "6QoeTbRN1Rs",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Bahayanya Tasawuf Tanpa Ilmu Syari'at",
      category: "tasawuf",
      videoUrl: "no_mIqFChD8",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Penjelasan Aqidah Sederhana Untuk Anak",
      category: "aqidah",
      videoUrl: "ES-cuLLTXyk",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Muqodimah Aqidah Asy'ariah",
      category: "aqidah",
      videoUrl: "EuWRsVJsg1U",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Buya Yahya",
      title: "Akidah Yang Benar Bagi Orang Awam",
      category: "tasawuf",
      videoUrl: "8kvGp21mAow",
      channelUrl: "c/AlBahjahTV",
    },
    {
      author: "Gus Baha",
      title: "Cara Mengenal Allah",
      category: "aqidah",
      videoUrl: "Hh2xhFzOCg4",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Apa perbedaan antara Aqidah dan Tauhid",
      category: "aqidah",
      videoUrl: "7FiucYLf48I",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Kesalahan Paling Fatal Manusia Adalah Aqidah",
      category: "aqidah",
      videoUrl: "ZlQDtz_43hU",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Gus Baha: Orang Tasawuf Jarang Berdoa?!",
      category: "tasawuf",
      videoUrl: "4nksgERLNtA",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Tasawuf Tingkat Tinggi",
      category: "tasawuf",
      videoUrl: "74BVLUpUQ9c",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Biar Gak Kacau, Belajar Tasawuf itu Boleh, Asal...",
      category: "tasawuf",
      videoUrl: "wf-ppCL9jtQ",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Pentingnya Ilmu Fiqih Dikehidupan Kita Sehari-hari ",
      category: "fiqih",
      videoUrl: "3QmM4Kh3xDk",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Pembahasan Fiqih Tentang Sholat",
      category: "fiqih",
      videoUrl: "if1hg2RZxXo",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Cara Ngaji Fiqih yang Tepat Menurut Gus Baha",
      category: "fiqih",
      videoUrl: "bLlCp3PwOI8",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Cara Agar Tauhid Tidak Rusak",
      category: "tauhid",
      videoUrl: "jxioxfAYOFI",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Logika Tauhid",
      category: "tauhid",
      videoUrl: "To6UEKhYafo",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Gus Baha",
      title: "Mengajari Tauhid Dari Nol",
      category: "tauhid",
      videoUrl: "9SoaXKFpV5o",
      channelUrl: "c/NgajiGusBahaId",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Apakah tinggal solat harus diQodho? ",
      category: "fiqih",
      videoUrl: "fjrsDqBow2U",
      channelUrl: "c/AdiHidayatOfficial",
    },
   {
      author: "Ustadz Adi Hidayat",
      title: "Tanya Jawab Fiqih",
      category: "fiqih",
      videoUrl: "TyTBEsZ2KyU",
      channelUrl: "c/AdiHidayatOfficial",
    },
   {
      author: "Ustadz Adi Hidayat",
      title: "Fiqih Shalat: Bab Dzikir Setelah Shalat",
      category: "fiqih",
      videoUrl: "f2O-wgfZ75M",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Apa Itu Istilah Syariat, Thoriqoh, Makrifat ? ",
      category: "tasawuf",
      videoUrl: "w583C6zuoHs",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Dampak Yang Terjadi Jika Mendalami Ilmu Tasawuf",
      category: "tasawuf",
      videoUrl: "rv990XEcZkw",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Tasawuf (SUFI) itu apa ya Ustadz?",
      category: "tasawuf",
      videoUrl: "r8V6ers0QII",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Cara Memahami Aqidah",
      category: "aqidah",
      videoUrl: "0PozYfDyMzs",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Dimana Allah?",
      category: "aqidah",
      videoUrl: "otYYucyOojw",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Cara Menguatkan Iman",
      category: "aqidah",
      videoUrl: "S2qm4mJym6M",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Tauhid Mengenal Allah",
      category: "tauhid",
      videoUrl: "XnR9o648ApQ",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Memahami Ilmu Tauhid",
      category: "tauhid",
      videoUrl: "boX5NHcjWBE",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Ustadz Adi Hidayat",
      title: "Manfaat Mempelajari Tauhid Rububiyah Dan Asma' Wa Sifat",
      category: "tauhid",
      videoUrl: "Ew1V_OGWMqg",
      channelUrl: "c/AdiHidayatOfficial",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Mengenal Dzat Allah",
      category: "tauhid",
      videoUrl: "RKFLWCg9mlg",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Hakikat Musyahadah",
      category: "tauhid",
      videoUrl: "Mkcrt7PyIho",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Pengertian Makna Tauhid",
      category: "tauhid",
      videoUrl: "g8tWLVB78WM",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Ngaji Tasawuf",
      category: "tasawuf",
      videoUrl: "FV7pDiwdt-o",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Hakekat",
      category: "tasawuf",
      videoUrl: "6ujsnwhv5Xw",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Arti Thoriqoh (Tarekat)",
      category: "tasawuf",
      videoUrl: "6F5nfZakZcI",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Sumber Penyakit Dari Hati..",
      category: "fiqih",
      videoUrl: "iekB-adiHb0",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Dua Kunci Hidup Sukses dan Barokah",
      category: "fiqih",
      videoUrl: "HFlEpOpdCCs",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Cinta Dan Ketaatan",
      category: "fiqih",
      videoUrl: "GsQGxNlfGSQ",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Mengatasi Penyakit Was-Was Dalam Beribadah",
      category: "aqidah",
      videoUrl: "0wOUwE50pkA",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: " Thoriqoh Itu Satu Jalan ",
      category: "aqidah",
      videoUrl: "cZEyx6eVA3g",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Habib Muhammad Luthfi",
      title: "Apa Itu Nur Muhammad?",
      category: "aqidah",
      videoUrl: "jZcesCQwALI",
      channelUrl: "c/NUCHANNEL",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Allah Banyak Turunkan Ayat Aqidah ???",
      category: "aqidah",
      videoUrl: "mNxpvYqagTw",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Perbedaan",
      category: "aqidah",
      videoUrl: "5We3SWj9wiE",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Tuhanmu Tidak Meninggalkanmu Dan Tidak Pula Membencimu",
      category: "aqidah",
      videoUrl: "zyTQT5MzjwA",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Kajian Tauhid",
      category: "tauhid",
      videoUrl: "m9W4HNNi1SA",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Cukup Bagiku Allah",
      category: "tauhid",
      videoUrl: "vwkhzzeC7h8",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Salah Satu Diantara Dasar Ilmu",
      category: "tauhid",
      videoUrl: "ePM1dM7Ozpg",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Tazkiyatun Nufuz",
      category: "tasawuf",
      videoUrl: "G-PYBE2Z-Ko",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Ketika Harapan Tak Sejalan Dengan Kehendak Allah",
      category: "tasawuf",
      videoUrl: "4jGqK4GOHyQ",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Menggapai Ketenangan Disaat Diri Tertekan",
      category: "tasawuf",
      videoUrl: "nCOH566YMc8",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Fiqih Sosial Media",
      category: "fiqih",
      videoUrl: "h_GHZbgbtGg",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Tips Memilih Madzhab Fiqih",
      category: "fiqih",
      videoUrl: "_2Z7XLcgZfI",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Ustadz Hanan Attaki",
      title: "Hikmah Dibalik Ujian Perasaan",
      category: "fiqih",
      videoUrl: "YiBvn23TYKI",
      channelUrl: "c/HananAttaki",
    },
    {
      author: "Habib Jindan",
      title: "Keutamaan Istighfar dan Shalawat",
      category: "tauhid",
      videoUrl: "itnd3wPXajk",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Sifat Para Penghuni Syurga",
      category: "tasawuf",
      videoUrl: "MCum2VZ-SKo",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Apa Yang Mahal Dari Diri Kita?",
      category: "aqidah",
      videoUrl: "DKq_5wIY98g",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Musibah Tidak Akan Melangkahi Sedekah",
      category: "aqidah",
      videoUrl: "z_LRn5HDn_I",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Mau Enak Di Dunia? Perhatikan Hal Ini",
      category: "aqidah",
      videoUrl: "wadXXZbhQQw",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Jangan Tipu - Tipu Dalam Bermuamalah",
      category: "fiqih",
      videoUrl: "i5Wa-H6cUWg",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Sambung Silaturahim",
      category: "aqidah",
      videoUrl: "rZe8ZJ1SJQE",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Solusi Dari Segala Masalah",
      category: "tasawuf",
      videoUrl: "qWuS0DEbyHo",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Jangan Menyimpang Dari Jalan Mereka",
      category: "fiqih",
      videoUrl: "YTICbZqVDh8",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Biasakan Untuk Menyebut Kebaikan",
      category: "aqidah",
      videoUrl: "meEAtWdZYJk",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Umat Islam Yang Moderat",
      category: "fiqih",
      videoUrl: "MosdhhkpaG8",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Jindan",
      title: "Bedanya Orang Dulu Dengan Orang Sekarang",
      category: "fiqih",
      videoUrl: "tpP8c-d2aFk",
      channelUrl: "channel/UCXr4zBdHD9xXWCeZ0KzkRrw",
    },
    {
      author: "Habib Novel",
      title: "Jangan Tergesa-gesa",
      category: "tasawuf",
      videoUrl: "gXtvOTE_x58",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Optimis Tanpa Henti",
      category: "tasawuf",
      videoUrl: "Htw_u8L-P4g",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Cara Cepat Diguyur Rahmat",
      category: "fiqih",
      videoUrl: "1z1CPWt6X-Y",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Berkah Orang Tua",
      category: "aqidah",
      videoUrl: "W8laRccf0DQ",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Dampak Dzikir",
      category: "fiqih",
      videoUrl: "yND6oMy1ROE",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Cara Mudah Bersyukur",
      category: "fiqih",
      videoUrl: "lAp8uC-gCWM",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Sales Akhirat",
      category: "fiqih",
      videoUrl: "Ea9srsME83o",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Rumah Yang Bercahaya",
      category: "fiqih",
      videoUrl: "MC5Y1waA7Yc",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Cara Agar Bersemangat",
      category: "tasawuf",
      videoUrl: "hWWbXHfONAI",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Akhir Zaman",
      category: "fiqih",
      videoUrl: "0ta0AK5Y44U",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Obat Sumpek",
      category: "aqidah",
      videoUrl: "id7btkDhaQs",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Habib Novel",
      title: "Mau Tambahan Pahala?",
      category: "fiqih",
      videoUrl: "woGjSns_F-g",
      channelUrl: "c/HabibNovelAlaydrus",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Tausiyah Menyambut Idul Adha?",
      category: "fiqih",
      videoUrl: "Ga2e18S3C_o",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Jauhi Maksiat, Negara Aman",
      category: "fiqih",
      videoUrl: "SRlci_3IhRI",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Jihad Konstitusi",
      category: "tauhid",
      videoUrl: "u2AazJT5-zk",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Mati Bawa Apa?",
      category: "tauhid",
      videoUrl: "cyP82-Ke5PQ",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "3 Syarat Menjadi Umat Terbaik",
      category: "fiqih",
      videoUrl: "QHc8aIlzkMg",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Perbaiki Hubungan Dengan Allah",
      category: "tasawuf",
      videoUrl: "HDALdYCSiWU",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Sholat, Zakat Dan Bersedekah",
      category: "tasawuf",
      videoUrl: "uvwURf5y1ho",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Bagaimana Hukumnya Tahlil Dan Haul",
      category: "tasawuf",
      videoUrl: "mlM-nwN1acA",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Keberagaman Dalam Pandangan Islam",
      category: "tasawuf",
      videoUrl: "zD7ZQQmswiI",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Mencari Ilmu, Asbab Masuk Surga",
      category: "fiqih",
      videoUrl: "SvmjyUrk_Go",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "Membangun Integritas Muslim",
      category: "tauhid",
      videoUrl: "3kp_rrPIIjM",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Abdul Somad",
      title: "3 Golongan Yang Menahan Murka Allah",
      category: "fiqih",
      videoUrl: "PhXZJbd32Bo",
      channelUrl: "c/UstadzAbdulSomadOfficial",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Influencer, Antara Pahala Atau Dosa?",
      category: "fiqih",
      videoUrl: "5HgIL59AZy0",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Mau Jadi Orang Kaya",
      category: "fiqih",
      videoUrl: "VCnzNVRdZ2M",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Terganggu Adzan?!",
      category: "fiqih",
      videoUrl: "fVllr8PCmNA",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Apa itu Islam Kaffah?",
      category: "fiqih",
      videoUrl: "6ZbgH3kjhxI",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Hidayah Itu Takdir Atau Pilihan?",
      category: "fiqih",
      videoUrl: "dEKw9MCz4qA",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Bagaimana Cara Menyikapi Toleransi dalam Beragama?",
      category: "aqidah",
      videoUrl: "8Pkw9DVR8Kg",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Muslim Anti Syariat",
      category: "tauhid",
      videoUrl: "Glsh5E-ALHw",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Amal Terbaik",
      category: "fiqih",
      videoUrl: "lS1USRkDitQ",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Yang Nggak Kepikir Sama Kafir Quraisy?",
      category: "aqidah",
      videoUrl: "AEMQSpXNrNU",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Agar Tenang Jiwamu",
      category: "aqidah",
      videoUrl: "of3_8r3F40Q",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Bagaimana Cara Mengelola Waktu?",
      category: "aqidah",
      videoUrl: "kzwQHJybqd4",
      channelUrl: "c/FelixSiauw1453",
    },
    {
      author: "Ustadz Felix Siauw",
      title: "Di Saat-Saat Sulit",
      category: "aqidah",
      videoUrl: "PX4YXB7A8FY",
      channelUrl: "c/FelixSiauw1453",
    },
  ]);
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [dataFilters, setDataFilters] = useState([])

  const search = () => {
    var dataFilterBy = datas.filter(e => e.author === id)
    if (title != '') {
      dataFilterBy = dataFilterBy.filter(e => e.title === title)
    }
    if (category != '') {
      dataFilterBy = dataFilterBy.filter(e => e.category === category)
    }

    setDataFilters(dataFilterBy)
  }

  useEffect(() => {
    setDataFilters(datas.filter(e => e.author === id))
  }, []);


  return (
    <>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Reels Ulama</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
              <Link to={{pathname: "/"}}>
                <a class="nav-link">Beranda</a>
              </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <h1>Kajian - {id}</h1>
        </div>

        <div class="row">
          <div class="col-md-3">
            <input class="form-control mr-sm-2" type="search" placeholder="Judul" value={title} onInput={e => setTitle(e.target.value)} />
          </div>
          <div class="col-md-3">
            <input class="form-control mr-sm-2" type="search" placeholder="Kategori" value={category} onInput={e => setCategory(e.target.value)} />
          </div>
          <div class="col-md-3">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Cari</button>
          </div>
        </div>
     
        <div class="row">

          {
            dataFilters.map((e, i) => {
              let videoUrl = "https://www.youtube.com/embed/" + e.videoUrl 
              let channelUrl = "https://www.youtube.com/" + e.channelUrl
              return (
                <div class="col-md-4">
                  <div class="card m-2">
                      <div class="card-body">
                        <h5 class="card-title">{e.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{e.category}</h6>
                        <div>
                          <iframe style={{width: '100%', height: '300px'}}
                            src={videoUrl}>
                          </iframe>
                        </div>
                        <div class="col-md-12 mt-2 text-center">
                          <button type="button" class="btn btn-success" onClick={() => window.open(channelUrl, "_blank")}>Lihat Channel</button>
                        </div>
                      </div>
                    </div>
                </div>
              );
            })
          }
        
        </div>
      </div>
    </>
  );
}

export default Video