import Navbar from '../components/Navbar';
import styles from './page.module.css';
import Image from 'next/image';

export default function SettingsPage() {
  return (
    <div className={styles.settingsBg}>
      <Navbar />
      <div className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>&#8592;</span>
          <span className={styles.settingsTitle}>Settings</span>
        </div>
        <div className={styles.sectionDivider}></div>
        <div className={styles.sectionTitle}>Profile</div>
        <div className={styles.profileCard}>
          <Image
            src="/profilepic.png"
            alt="Profile"
            width={56}
            height={56}
            className={styles.profilePic}
          />
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>David</span>
            <span className={styles.profileHandle}>@DavidLegend27</span>
          </div>
        </div>
      </div>

      <div className={styles.settingsList}>
        <div className={styles.settingsItem}>General</div>
        <div className={`${styles.settingsItem} ${styles.settingsItemBold}`}>Courses</div>
        <div className={`${styles.settingsItem} ${styles.settingsItemBold}`}>Notifications</div>
        <div className={`${styles.settingsItem} ${styles.settingsItemBold}`}>Sounds</div>
      </div>

      <div className={styles.settingsSection}>
        <div className={styles.settingsList}>
          <div className={styles.settingsItem}>Accessibility</div>
          <div className={styles.settingsItem}>
            <span>Dark Mode</span>
            <div className={`${styles.toggleSwitch} off`}>
              <div className={styles.toggleKnob}></div>
            </div>
          </div>
          <div className={styles.settingsItem}>Color Blind</div>
          <div className={styles.settingsItem}>Text to Speech</div>
        </div>
      </div>

      <div className={styles.settingsSection}>
        <div className={styles.settingsList}>
          <div className={styles.settingsItem}>Account/Security</div>
          <div className={styles.settingsItem}>Password</div>
          <div className={styles.settingsItem}>Personal Information</div>
          <div className={styles.settingsItem}>2FA</div>
          <div className={styles.settingsItem}>Account recovery</div>
          <div className={`${styles.settingsItem} ${styles.settingsItemDanger}`}>Delete Account</div>
        </div>
      </div>
    </div>
  );
}
