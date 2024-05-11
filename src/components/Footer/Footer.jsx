import { FaFacebookSquare,  FaInstagramSquare, FaSlackHash, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border bg-gray-100">
      <div className="flex justify-around  container mx-auto p-10 ">  

        <div>
        <p className="text-6xl font-extrabold mb-2 "> <FaSlackHash></FaSlackHash></p> 
        <p className="font-bold">ACME School Library.<br />Providing reliable tech since 2014</p>
        </div>
       
      <div>
        <h3 className="text-3xl font-bold">Social</h3>
        <div className="divider my-2"></div>
        <div className="flex gap-3 justify-center items-center">
          <p className="text-3xl font-extrabold"><FaTwitter></FaTwitter></p>
          <p className="text-3xl font-extrabold"> <FaFacebookSquare></FaFacebookSquare></p>
          <p className="text-3xl font-extrabold"> <FaInstagramSquare></FaInstagramSquare></p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Footer;