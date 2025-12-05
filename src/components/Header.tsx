import React, { useContext, useEffect, useState } from "react";
import LumangiLogo from "../assets/images/LumangiLogo.svg";
import RewardWheel from "../assets/images/RewardWheel.svg";
import Button from "../UI/Button";
import { useWeb3React } from "@web3-react/core";
import ConnectWallet from "./auth/ConnectWallet";
import { AuthContext, ActionTypes } from "../contexts/AuthContext";

export function Header() {
  const { updateAuthAction, isAuthenticated } = useContext(AuthContext);
  const { account } = useWeb3React();
  const handleLogin = () => {
    updateAuthAction(ActionTypes.Login);
  };
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [selectedWallet, setSelectedWallet] = useState<
    "MetaMask" | "WalletConnect" | "Coinbase" | null
  >(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    if (account && selectedWallet) {
      setIsAuthModalOpen(false);
    }
  }, [account, selectedWallet]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between w-full px-4 md:px-8 lg:px-20 py-4 md:py-5">
        
        {/* Left Section - Logo */}
        <div className="flex items-center justify-start flex-1">
          <a className="w-full h-full flex items-center" href="/">
            <img
              src={"/dots.png"}
              alt="logo"
              className="h-8 sm:h-10 md:h-12 mr-2 sm:mr-3 w-8 sm:w-10 md:w-12"
            />
            <img
              src={LumangiLogo}
              alt="logo"
              className="max-w-full w-32 sm:w-36 md:w-48 lg:w-60"
            />
          </a>
        </div>

        {/* Desktop - Right Section Buttons */}
        <div className="hidden md:flex items-center justify-end flex-1 space-x-2 md:space-x-4">
          {!isAuthenticated && (
            <Button
              color="default"
              onClick={handleLogin}
              label="Register/Login"
              customStyle="!text-white border-white border border-opacity-50 text-xs md:text-sm px-3 py-2 md:px-4"
              title="Coming Soon!!"
            />
          )}
          <Button
            onClick={() => setIsAuthModalOpen(true)}
            label={!!account ? account : "Connect Wallet"}
            color="dangerText"
            disabled={!!account}
            customStyle="w-32 md:w-36 lg:w-40 text-ellipsis overflow-hidden whitespace-nowrap text-xs md:text-sm px-3 py-2 md:px-4"
            title={account ? account : ""}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t border-white/10">
          {!isAuthenticated && (
            <Button
              color="default"
              onClick={() => {
                handleLogin();
                setIsMobileMenuOpen(false);
              }}
              label="Register/Login"
              customStyle="w-full !text-white border-white border border-opacity-50 text-xs px-3 py-2"
              title="Coming Soon!!"
            />
          )}
          <Button
            onClick={() => {
              setIsAuthModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            label={!!account ? account : "Connect Wallet"}
            color="dangerText"
            disabled={!!account}
            customStyle="w-full text-ellipsis overflow-hidden whitespace-nowrap text-xs px-3 py-2"
            title={account ? account : ""}
          />
        </div>
      )}

      <ConnectWallet
        isModalOpen={isAuthModalOpen}
        setIsModalOpen={setIsAuthModalOpen}
        setSelectedWallet={setSelectedWallet}
      />
    </>
  );
}

export default Header;