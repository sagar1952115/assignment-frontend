import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AddNew from "../components/sidebar-component/AddNew";
import SpeechEnhancement from "../components/sidebar-component/SpeechEnhancement";
import Transcription from "../components/sidebar-component/Transcription";
import Translation from "../components/sidebar-component/Translation";
import MobileSidebar from "../components/MobileSidebar";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("add-new");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`flex w-full min-h-screen text-white bg-dark-green ${
          showModal ? "bg-black/80 pointer-events-none" : ""
        }`}
      >
        <div className="hidden lg:w-1/5 lg:block ">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="flex flex-col justify-between w-full text-white lg:w-4/5 ">
          <Navbar />
          <div className="flex items-center justify-center p-2">
            <div className="rounded-lg border-2 border-white border-dashed stroke-2 w-[640px] h-[485px]">
              {activeTab === "add-new" && (
                <AddNew
                  setActiveTab={setActiveTab}
                  setShowModal={setShowModal}
                />
              )}
              {activeTab === "speech-enhancement" && (
                <SpeechEnhancement
                  setActiveTab={setActiveTab}
                  setShowModal={setShowModal}
                />
              )}
              {activeTab === "transcription" && (
                <Transcription
                  setActiveTab={setActiveTab}
                  setShowModal={setShowModal}
                />
              )}
              {activeTab === "translation" && (
                <Translation
                  setActiveTab={setActiveTab}
                  setShowModal={setShowModal}
                />
              )}
            </div>
          </div>
          <div className="">
            <Footer />
            <MobileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Dashboard;
