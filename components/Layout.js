import NavBar from "./NavBar";

export const metadata = {
  title: "Community Labs",
  description:
    "",
};

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-28">
          {children}
        </div>
      </div>
    </div>
  );
}