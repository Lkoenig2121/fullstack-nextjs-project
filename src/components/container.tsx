export default function Container({ children }) {
  return (
    <div className="max-w-[1300px] mx-auto bg-white min-h-screen flex flex-col">
      {children}
    </div>
  );
}
