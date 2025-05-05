import React from "react";

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-5">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2"><img className="w-6" src="/books.png" alt="" /> Books Shop</h2>
          <p className="mt-2 text-sm">
            Eng sara kitoblarni bizdan toping! O‘qing, o‘rganing, ilhom oling.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Tezkor Havolalar</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-400">Bosh sahifa</a></li>
            <li><a href="#" className="hover:text-gray-400">Kitoblar</a></li>
            <li><a href="#" className="hover:text-gray-400">Aloqa</a></li>
            <li><a href="#" className="hover:text-gray-400">Biz haqimizda</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Bizni kuzating</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-blue-400 flex items-center gap-1 transition ease-in-out"><img className="w-5" src="/facebook-icons.png" alt="" /> Facebook</a>
            <a href="#" className="hover:text-blue-500 flex items-center gap-1 transition ease-in-out"><img className="w-5" src="/twitter-icons.png" alt="" /> Twitter</a>
            <a href="#" className="hover:text-red-500 flex items-center gap-1 transition ease-in-out"><img className="w-4" src="/instagram-icons.png" alt="" /> Instagram</a>
          </div>
        </div>

      </div>

      <div className="mt-10 text-center text-sm border-t border-gray-600 pt-5">
        © 2025 Books Shop. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default FooterPage;
