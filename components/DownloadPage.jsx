import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";

const DownloadPage = ({ rootElementId, DownloadFileName }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "pt", "a2");
      pdf.addImage(imgData, "JPEG", 2, 2);
      pdf.save(`${DownloadFileName}`);
    });
  };
  return (
    <div>
      <main className={styles.main}>
        <Button
          color="secondary"
          size="large"
          onClick={downloadFileDocument}
          variant="contained"
        >
          Download Page
        </Button>
      </main>
    </div>
  );
};

export default DownloadPage;
