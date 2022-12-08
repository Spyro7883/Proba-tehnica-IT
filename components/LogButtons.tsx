import * as React from 'react';

const LogButtons: React.FC = () => {
  return (
    <header className="title-messsage">
      <button className="login" type="submit">
        Logare
      </button>
      <button className="create-account" type="submit">
        Creare cont
      </button>
    </header>
  );
};

export default LogButtons;
