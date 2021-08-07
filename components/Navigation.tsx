import Link from "next/link";
const Navigation = () => {
  return (
    <div className="h-14 bg-gray-100 flex items-center justify-center">
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Navigation;
