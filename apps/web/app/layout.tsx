import "./globals.css";

export const metadata = {
  title: "Find a Project",
  description: "Find a project to contribute to, or start your own.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-200 dark:bg-stone-900">{children}</body>
    </html>
  );
}
