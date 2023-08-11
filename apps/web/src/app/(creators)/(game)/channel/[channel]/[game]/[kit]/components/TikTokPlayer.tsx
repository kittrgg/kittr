'use client';

import Script from 'next/script';

export function TikTokPlayer() {
  return (
    <>
      <blockquote
        cite="https://www.tiktok.com/@thehuskerrs/video/7265515675571997994"
        className="tiktok-embed"
        data-video-id="7265515675571997994"
        style={{ width: '325px' }}
      >
        <section />
      </blockquote>
      <Script async src="https://www.tiktok.com/embed.js" />
    </>
  );
}
