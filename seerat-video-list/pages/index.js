// pages/index.js
import Head from 'next/head';
import VideoList from '../components/VideoList';
import videos from '../public/videos.json';
import Link from 'next/link'; // Import the Link component

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Seerat Video List</title>
      </Head>
      <Link href="/playlist"> {/* Create a link to the PlayListPage */}
        <a>Go to Playlist</a>
      </Link>
      <VideoList videos={videos} />
    </div>
  );
};

export default HomePage;
