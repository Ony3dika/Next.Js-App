
import NavbarLink from "./navbarLink/navbarLink";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {

  const session = true;
  const isAdmin = true;
  return (
    <div className='flex items-center lg:px-0 px-5 lg:h-full h-screen lg:mt-0 mt-20 lg:flex-row flex-col lg:justify-between'>
      {links.map((link, index) => (
        <NavbarLink key={index} item={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavbarLink item={{ title: "Admin", path: "/admin" }} />}
          <button className='bg-primary-dark font-medium lg:w-auto w-1/3 lg:my-0 my-5 mx-3 py-1.5 lg:py-1 rounded-full text-base lg:px-3'>
            Logout
          </button>
        </>
      ) : (
        <NavbarLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
