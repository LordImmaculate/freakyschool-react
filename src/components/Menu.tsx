export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col fixed top-72 left-1/2 transform -translate-x-1/2 w-7xl py-4 bg-white text-black border rounded-3xl items-center justify-center gap-4">
      {children}
    </div>
  );
}
