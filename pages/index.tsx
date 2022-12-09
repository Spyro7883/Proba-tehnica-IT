import Image from 'next/image';
import CentralHeader from '../components/CentralHeader';
import TitleImage from '../components/TitleImage';
import MemeButton from '../components/MemeButton';
import LogButtons from '../components/LogButtons';
import SaltyImage from '../components/SaltyImage';
import ImageUploader from '../components/ImageUploader';

export default function Home() {
  return (
    <div className="container">
      <TitleImage />
      <LogButtons />
      <MemeButton />
      <main className="upper-main">
        <CentralHeader />
        <SaltyImage />
      </main>
      <main className="center-main">
        <ImageUploader />
      </main>
      {/*<main className="bottom-main" />*/}

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
