import './App.css';
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Opinion } from "./components/Opinion/Opinion";
import { OpinionCard } from "./components/OpinionCard/OpinionCard";
import avatar from "./assets/images/man.png";
import avatar2 from "./assets/images/girl.png"
import { Stat } from "./components/Stat/Stat";
import { StatData } from "./components/StatData/StatData";
import { Visitor } from "./components/Visitor/Visitor";
import { VisitorCard } from "./components/VisitorCard/VisitorCard";
import pic from "./assets/images/br.jpeg"
import pic2 from "./assets/images/gl.jpeg"
import { Activity } from "./components/Activity/Activity"
import { ActivityCard } from "./components/ActivityCard/ActivityCard"
import bg1 from "./assets/images/bg1.jpeg"
import bg2 from "./assets/images/bg2.jpeg"
import bg3 from "./assets/images/bg3.jpeg"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"




function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />

        <Opinion>
          <OpinionCard quote="“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”" img={avatar} title="Mohammad Hatta" desc="Wakil Presiden Indonesia Pertama" />

          <OpinionCard quote="“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!" img={avatar2} title="Najwa Shihab" desc="Duta Membaca" />
        </Opinion>

        <Stat>
          <StatData name="500+" desc="Judul Buku"/>
          <StatData name="$0" desc="Gratis Peminjaman"/>
          <StatData name="5" desc="Kegiatan Rutin"/>
        </Stat>

        <Visitor>
          <VisitorCard pic={pic2} heading="Guy Hawkins" desc="32 Tahun, Karyawan"/>
          <VisitorCard pic={pic} heading="Brooklyn Simmons" desc="20 Tahun, Mahasiswa"/>
        </Visitor>

        <Activity>
          <ActivityCard bg={bg1} />
          <ActivityCard bg={bg2} />
          <ActivityCard bg={bg3} />
        </Activity>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
