import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="prose prose-stone prose-xl dark:prose-invert max-w-full bg-stone-50 w-full h-screen"></main>
  );
}
