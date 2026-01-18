import { useState, useEffect } from "react";
import { useGetCertificatePdfQuery } from "./certificateApiSlice.js";

import "../../styles/certificate.css";
import { FaTimes } from "react-icons/fa";
import Loader from "../ui/Loader.jsx";

const Certificate = ({ open, onClose }) => {
  const {
    data: pdfBlob,
    isLoading,
    isError,
  } = useGetCertificatePdfQuery(undefined, { skip: !open });
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [pdfBlob]);

  if (!open) return null;
  if (isLoading) return <Loader />;
  if (isError) return null;

  return (
    <div className="certificate-modal">
      <div className="certificate-title">
        <h2>Certificado:</h2>
        <button className="style__button" onClick={onClose}>
          <FaTimes className="faIcon__style close__button"/>
        </button>
      </div>
      <iframe
        className="certificate__iframe"
        src={pdfUrl}
        title="Certificado"
        frameborder="0"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Certificate;
