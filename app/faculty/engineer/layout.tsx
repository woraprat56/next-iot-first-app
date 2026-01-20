export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <h1 className="text-center text-pink-500 font-bold">
        wow wow wow
      </h1>
      {children}
      <h1 className="text-center text-pink-500 font-bold">
        wee wee wee
      </h1>
    </section>
  );
}