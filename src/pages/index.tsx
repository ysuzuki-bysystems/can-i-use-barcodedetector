import Head from "next/head";
import { useEffect, useState } from "react";

function Loading() {
  return <div style={{ color: "silver" }}>(loading...)</div>;
}

function NotHas() {
  return <div>Your browser cannot use `BarcodeDetector`.😢</div>
}

function Has() {
  return <div>Your browser can use `BarcodeDetector`.👍</div>
}

export default function Home(): React.ReactNode {
  const [has, setHas] = useState<boolean | null>(null);
  useEffect(() => {
    const ok = "BarcodeDetector" in window;
    setHas(ok);
  }, [setHas]);

  let content = ((has) => {
    switch (has) {
      case null: return Loading();
      case false: return NotHas();
      case true: return Has();
    }
  })(has);

  return (
    <>
      <Head>
        <title>Can I use `BarcodeDetector`.</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🤔</text></svg>"
        />
      </Head>
      <main style={{ display: "flex", height: "calc(100vh - 8px - 8px)", fontSize: "84px", lineBreak: "anywhere", lineHeight: 1, fontFamily: "monospace" }}>
        <div style={{ margin: "auto" }}>
          {content}
        </div>
      </main>
    </>
  );
}
