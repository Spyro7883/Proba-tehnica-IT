import * as React from 'react';

const ImageUploader: React.FC = () => {
  return (
    <main className="image-uploader">
      <h1 className="h1-image">Ai tupeu și crezi că ești amuzant?</h1>
      <h2 className="h2-image">
        Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem
        meme-ul.
      </h2>
      <h1 className="description">Descriere</h1>
      <input className="text-upload" placeholder="descriere" />
      <h1 className="meme">Meme (jpg, jpeg, png, gif)</h1>
      <input
        type="text"
        name="file"
        className="meme-upload"
        placeholder="drag & drop image or click to upload"
      />
      <button type="submit" className="send">
        Trimite
      </button>
    </main>
  );
};

export default ImageUploader;
