import Header from '../components/Header';
import SoundEnabledProvider from '../components/SoundEnabledProvider/SoundEnabledProvider';
import './styles.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <SoundEnabledProvider>
          <Header />
          {children}
          <footer>
            <img alt="" src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundEnabledProvider>
      </body>
    </html>
  );
};

export default RootLayout;
