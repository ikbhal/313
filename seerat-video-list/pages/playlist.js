import Head from 'next/head';
import Playlist from '../components/Playlist'; // Import the Playlist component

const PlayListPage = () => {
  return (
    <div>
      <Head>
        <title>Seerat Video List</title>
      </Head>
      <Playlist /> 
    </div>
  );
};

export default PlayListPage;
