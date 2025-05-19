import { Button } from "antd";

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="py-8 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-300">Email</a>
          <a href="#" className="hover:text-blue-300">LinkedIn</a>
          <a href="#" className="hover:text-blue-300">GitHub</a>
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 rounded text-black" />
            <input type="email" placeholder="Email" className="w-full p-2 rounded text-black" />
            <textarea placeholder="Message" className="w-full p-2 rounded text-black"></textarea>
            <Button type="primary">Send</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;