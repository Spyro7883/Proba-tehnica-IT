import Image from 'next/image';
import CentralHeader from '../components/CentralHeader';
import TitleImage from '../components/TitleImage';
import MemeButton from '../components/MemeButton';
import LogButtons from '../components/LogButtons';
import SaltyImage from '../components/SaltyImage';
import ImageUploader from '../components/ImageUploader';
import MostViewed from '../components/MostViewed';
import ViewedImages from '../components/ViewedImages';
import CopyrightFooter from '../components/CopyrightFooter';

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
      <main className="bottom-main">
        <MostViewed />
        <ViewedImages />
      </main>

      <footer className="footer">
        <p className="new-footer">
          Copyright 2022 | La muncă, nu la întins mâna.
        </p>
        <span className="logo">{<CopyrightFooter />}</span>
      </footer>
    </div>
  );
}
