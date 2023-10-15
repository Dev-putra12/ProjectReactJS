Cara menggunakan router di react ( jadi memisahkan tiap component lalu diapnggil untuk menjadi 1 sampi seperti pemisahan components pada framework lain atau native)

1. buat folder dan file di directory src dengan yang diperlukan seperti :

- Components ( untuk menampung navbar,footer dll yang akan tetap diapnggil di tiap page)
- Pages ( untuk memudahkan tiap pages akan dibagi seperti home,rentals,kelas dll ) \* ketikan rafce untuk membuat struktur otomatis,
- setelah semua terbuat, lalu ubah di main.jsx dan App.jsx sesuai isi dari content yang dibuat, contoh :

`main.jsx`import React from 'react'`
`import ReactDOM from 'react-dom/client'`
`import App from './App.jsx'`// ini digunakan untuk menggunakan browser router , dan harus digunakan jika ingin menggunakan metode seperti ini`import { BrowserRouter } from 'react-router-dom';``

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
// lalu tambahkan disini agar membaca isi dari App.jsx
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>,
)

`App.jsx`
`import { Routes, Route } from "react-router-dom";`

// components
// ini digunakan untuk menginport components yang akan ditampilkan, import wajib dalam react sebelum content dapat ditampilkan
`import NavbarComponents from "./components/NavbarComponents";`
`import FooterComponents from "./components/FooterComponents";`
// Pages
// ini digunakan untuk menginport page yang akan ditampilkan, import wajib dalam react sebelum content dapat ditampilkan
`import HomePage from "./pages/HomePage";`
`import ClassPage from "./pages/ClassPage";`
`import TestimonialPage from "./pages/TestimonialPage";`
`import FaqPage from "./pages/FaqPage";`
`import SyaratKetenPage from "./pages/SyaratKetenPage";`

function App() {
return <div>
// ini akan memanggil isi dari NavbarComponents
<NavbarComponents />
// routes disini wajib untuk mengapit page page yang akan ditampilkan, sama seperti kerangka main.jsx diatas
<Routes>
<Route path="/" Component={HomePage} />
<Route path="class" Component={ClassPage} />
<Route path="testimonial" Component={TestimonialPage} />
<Route path="faq" Component={FaqPage} />
<Route path="syaratketen" Component={SyaratKetenPage} />
</Routes>
// ini akan memanggil isi dari FooterComponents
<FooterComponents />

  </div>;
}
export default App
``

Depedency :

- `Npm install react-router-dom`
- `Npm install`

Note :
untuk struktur router itu ada 3:

1. `<BrowserRouter>` - Digunakan untuk menyiapkan routing pada aplikasi kita.
2. `<Routes>` - Rout harus membungkus route ( seperti ul li )
3. `<Route path="/">` - Menentukan bahwa jika alamat browser sesuai dengan '/' maka akan diarahkan kesana

`PROJECT SUDAH BISA DITAMPILKAN DI REACT SEDERHANA DENGAN SETTINGAN SEPERTI DIATAS`
