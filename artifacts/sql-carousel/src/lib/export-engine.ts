import html2canvas from "html2canvas";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export interface ExportPackageOptions {
  handle: string;
  topicKey: string;
  topicTitle: string;
  igCaption: string;
  xThread: string;
  onProgress?: (current: number, total: number, message: string) => void;
}

export async function exportCarouselToZip(options: ExportPackageOptions): Promise<void> {
  const { handle, topicKey, topicTitle, igCaption, xThread, onProgress } = options;
  const elements = document.querySelectorAll(".slide-capture-node");
  if (!elements || elements.length === 0) {
    throw new Error("No slide nodes found to capture");
  }

  const zip = new JSZip();
  const folder = zip.folder(`${handle}_${topicKey}`);

  // Add social copy files
  folder?.file("instagram_linkedin_caption.txt", igCaption);
  folder?.file("twitter_thread.txt", xThread);
  folder?.file("metadata.json", JSON.stringify({
    handle,
    topicKey,
    topicTitle,
    slideCount: elements.length,
    exportedAt: new Date().toISOString(),
    resolution: "2X Retina (1080x1350 equivalent)",
  }, null, 2));

  // Capture all slide canvases
  for (let i = 0; i < elements.length; i++) {
    if (onProgress) {
      onProgress(i + 1, elements.length, `Capturing Slide ${i + 1}/${elements.length}...`);
    }
    const element = elements[i] as HTMLElement;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });

    const dataUrl = canvas.toDataURL("image/png");
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
    const slideNum = String(i + 1).padStart(2, "0");
    folder?.file(`slide_${slideNum}.png`, base64Data, { base64: true });
  }

  if (onProgress) {
    onProgress(elements.length, elements.length, "Packaging ZIP archive...");
  }

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `${handle}_${topicKey}_carousel_pack.zip`);
}

export async function exportCarouselToPdf(options: ExportPackageOptions): Promise<void> {
  const { handle, topicKey, onProgress } = options;
  const elements = document.querySelectorAll(".slide-capture-node");
  if (!elements || elements.length === 0) {
    throw new Error("No slide nodes found to capture");
  }

  if (onProgress) {
    onProgress(1, elements.length, "Loading PDF Engine...");
  }

  // Load jsPDF dynamically from ESM
  // @ts-ignore
  const jspdfModule = await import(/* @vite-ignore */ "https://esm.sh/jspdf@2.5.1");
  const jsPDF = jspdfModule.jsPDF || jspdfModule.default?.jsPDF || jspdfModule.default;

  // 4:5 aspect ratio in PDF points (420 x 525)
  const pdfW = 420;
  const pdfH = 525;
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: [pdfW, pdfH],
  });

  for (let i = 0; i < elements.length; i++) {
    if (onProgress) {
      onProgress(i + 1, elements.length, `Rendering PDF Slide ${i + 1}/${elements.length}...`);
    }

    if (i > 0) {
      pdf.addPage([pdfW, pdfH], "portrait");
    }

    const element = elements[i] as HTMLElement;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#060709",
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
  }

  if (onProgress) {
    onProgress(elements.length, elements.length, "Saving LinkedIn PDF document...");
  }

  pdf.save(`${handle}_${topicKey}_linkedin_carousel.pdf`);
}
