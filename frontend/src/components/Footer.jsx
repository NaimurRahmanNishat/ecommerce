import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus voluptas esse, corrupti iste non pariatur est rem
            sequi deleniti, optio quisquam totam doloribus error consequuntur,
            aspernatur in. Corrupti, odio facilis?
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivary</li>
                <li>Privicy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+8801568......</li>
                <li>contactinfo@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-2 text-center text-sm">Copyright @{new Date().getFullYear()} nrn.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;