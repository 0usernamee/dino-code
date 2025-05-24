import Navbar from '../components/Navbar';
import ChallengeCarousel from '../components/ChallengeCarousel';
import styles from './page.module.css';
import Image from 'next/image';
import Footer from "../components/Footer";

export default function ProfilePage() {
  return (
    <div className={styles.profileBg}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.greeting}>Hi, David</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
          <Image
            src="/profilepic.png"
            alt="Profile"
            width={196}
            height={196}
            className={styles.profilePic}
          />
          <h3 style={{ textAlign: 'center', color: '#000000', marginTop: '1rem', fontWeight: 600, fontSize: '1.3rem' }}>DavidLegend27</h3>
          <h5 style={{ textAlign: 'center', color: '#444', marginTop: '0.3rem', fontWeight: 500, fontSize: '1rem' }}>JavaScript, HTML</h5>
          <h4 style={{ textAlign: 'center', color: '#222', marginTop: '2.2rem', fontWeight: 600, fontSize: '1.1rem' }}>22 Friends</h4>
          <div style={{ width: 345, height: 91, background: '#FFF', borderRadius: 13, marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 24 }}>
            <h5 style={{ textAlign: 'left', color: '#222', fontWeight: 500, fontSize: '1rem', margin: 0 }}>
              Hi my name is David, I am new to the world of programming and excited to learn!
            </h5>
          </div>
        </div>
        <div style={{ marginTop: '2.5rem', marginBottom: '1.2rem', textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', color: '#222' }}>
          Current Streak
        </div>
        <ChallengeCarousel />
        <Footer />
      </div>
    </div>
  );
}
