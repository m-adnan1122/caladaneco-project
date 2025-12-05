import React, { useMemo } from "react";

import WhiteLogo from "../assets/images/header-logo-white.svg";

import Twitter from "../assets/images/social-media/twitter.svg";
import Fb from "../assets/images/social-media/fb.svg";
import Linkedin from "../assets/images/social-media/linkedin.svg";
import Insta from "../assets/images/social-media/instagram.svg";
import Discord from "../assets/images/social-media/discord.svg";
import Telegram from "../assets/images/social-media/telegram.svg";

const SocialMedia = () => {
  const socialMediaIcons = useMemo(() => {
    return [
      {
        icon: Twitter,
        type: "twitter",
        link: "https://twitter.com/LuMaNaGi",
      },
      {
        icon: Fb,
        type: "facebook",
        link: "https://www.facebook.com/Lumanagiswap",
      },
      {
        icon: Linkedin,
        type: "linkedin",
        link: "https://www.linkedin.com/company/lumanagi/",
      },
      {
        icon: Insta,
        type: "instagram",
        link: "https://www.instagram.com/lumanagi.dex/",
      },
      {
        icon: Discord,
        type: "discord",
        link: "https://discord.gg/KFzZbB6F",
      },
      {
        icon: Telegram,
        type: "telegram",
        link: "https://t.me/+bMAZj4p_PVM2NGM0",
      },
    ];
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 my-8">
        {socialMediaIcons.map((data, index) => (
          <React.Fragment key={`social-media-icon-item-${index}`}>
            <a href={data.link}>
              <img src={data.icon} alt={data.type} />
            </a>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

// const Company = () => {
//   const pages = useMemo(() => {
//     return [
//       {
//         label: "About us",
//         path: "/about-us",
//       },
//       {
//         label: "Blog",
//         path: "/blog",
//       },
//       {
//         label: "Press",
//         path: "/press",
//       },
//       {
//         label: "Careers",
//         path: "/careers",
//       },
//     ];
//   }, []);

//   const handleRoute = (path: string) => {
//     console.log("Routing to : ", path);
//   };

//   return (
//     <>
//       <div className="flex flex-col space-y-2 text-xl font-medium">
//         <div className="mb-2 text-gray-600">Company</div>
//         {pages.map((page, index) => (
//           <React.Fragment key={`company-item-${index}`}>
//             <div className="text-white" onClick={() => handleRoute(page.path)}>
//               {page.label}
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//     </>
//   );
// };

const Papers = () => {
  const pages = useMemo(() => {
    return [
      {
        label: "LitePaper",
        path: "",
        link: "https://lumanagi.com/wp-content/uploads/2023/01/Lumanagi-Lite-Paper-v3-1.pdf",
      },
      {
        label: "Pitch Deck",
        path: "",
      },
      {
        label: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        label: "Terms & Conditions",
        path: "/terms-conditions",
      },
      {
        label: "Cookies",
        path: "/cookies",
      },
    ];
  }, []);

  const handleRoute = (path: string) => {
    console.log("Routing to : ", path);
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-xl font-medium">
        <div className="mb-2 text-gray-600">Papers</div>
        {pages.map((page, index) => (
          <React.Fragment key={`company-item-${index}`}>
            {page.link ? (
              <a className="text-white" href={page.link}>
                {page.label}
              </a>
            ) : (
              <div
                className="text-white"
                onClick={() => handleRoute(page.path)}
              >
                {page.label}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export function Footer() {
  return (
    <div className="relative bottom-0 w-full" style={{ overflowX: 'hidden' }}>
      <div className="w-full px-4 sm:px-8 md:px-20">
        <div className="flex flex-col md:flex-row md:justify-between mt-20 md:mt-40 gap-8 md:gap-0">
          <div className="flex flex-col justify-center">
            <a className="w-full h-full" href="https://lumanagi.com">
              <img src={WhiteLogo} alt="logo" className="max-w-full w-48 sm:w-56 md:w-72" />
            </a>
            <SocialMedia />
          </div>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12 md:space-x-20">
            <Papers />
          </div>
        </div>
        <hr className="mt-8 mb-4 text-white" />
        <div className="flex flex-col sm:flex-row justify-center w-full mb-10 gap-2 sm:gap-4 text-white">
          <a className="opacity-50 text-center" href="https://lumanagi.com">
            © Lumanagi
          </a>
          <div className="flex justify-center">
            <span className="opacity-50">HU</span>
            <div className="ml-2">
              <span className="opacity-50">EN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;