import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Hello, I’m Kyle Masuga</h1>
        <Image
          src="https://res.cloudinary.com/do9qt3sjt/image/upload/v1715271357/me-james-peak_lgngst.jpg"
          alt="Kyle Masuga."
          width={400}
          height={400}
        />
      </div>
      <div className="container description">
        <p>
          I’m a Jack of many trades, currently bustling as a frontend web
          developer, utilizing best practices and keeping the code clean and
          simple. I’m big on inclusivity and am an advocate for accessibility
          and web performance.
        </p>
        <p>
          In my free time I enjoy hiking or biking in the mountains, playing
          tennis, getting creative making designs in Affinity Designer, or
          continue learning to play the ukulele, all among many other varied
          interests not mentioned. I guess you could say, I’m also a Jack of
          many interests.
        </p>
      </div>
    </main>
  );
}
