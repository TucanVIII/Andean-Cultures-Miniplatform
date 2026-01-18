import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function buildCertificate(data,dataCallback, endCallback) {
  const doc = new PDFDocument({ size: "A4", layout: "landscape", margin: 50 });

  //on Data started
  doc.on("data", dataCallback);

  // on End finished
  doc.on("end", endCallback);

  // Drawing document
  // Landscape layout change dimensions: x:841, y:595
  drawBackground(doc);
  drawBorder(doc);
  drawTitle(doc);
  drawSubTitle(doc);
  drawUserInfo(doc,data);
  drawFooter(doc);

  doc.end();
}

function drawBackground(doc) {
  const bgPath = path.join(__dirname, "../public/images/appLogo.png");
  doc.save();
  doc.opacity(0.09);
  doc.image(bgPath, 0, 0, {
    width: doc.page.width,
    height: doc.page.height,
  });
  doc.restore();
}

function drawBorder(doc) {
  const distanceMargin = 12;
  const innerMargin = 20;
  doc
    .lineWidth(1)
    .strokeColor("#d9ad26")
    .rect(
      distanceMargin,
      distanceMargin,
      doc.page.width - distanceMargin * 2,
      doc.page.height - distanceMargin * 2,
      12
    )
    .stroke();

  doc
    .lineWidth(3)
    .strokeColor("#efb810")
    .rect(
      innerMargin,
      innerMargin,
      doc.page.width - innerMargin * 2,
      doc.page.height - innerMargin * 2,
      12
    )
    .stroke();
}

function drawTitle(doc) {
  doc
    .moveDown(4)
    .font("Times-BoldItalic")
    .fontSize(86)
    .fill("#212121")
    .text("CERTIFICADO", { align: "center" });
}

function drawSubTitle(doc) {
  doc
    .font("Times-Roman")
    .fontSize(18)
    .fill("#212121")
    .text("De finalización a:", { align: "center" });
}

function drawUserInfo(doc,data) {
  const name = data.fullName;
  const issuedDate = data.dateIssued.toLocaleDateString();
  const totalScore = data.finalScore;
  doc.moveDown(1);
  doc.fontSize(70).font("Times-BoldItalic").fill("#022042");
  const textWidth = doc.widthOfString(name);
  const textHeight = doc.currentLineHeight();
  const x = (doc.page.width - textWidth) / 2;
  const y = doc.y;
  doc.text(name, x, y);
  doc
    .moveTo(x, y + textHeight + 5)
    .lineTo(x + textWidth, y + textHeight + 5)
    .lineWidth(1)
    .strokeColor("#444")
    .stroke();

  // Issued date
  doc.moveDown(0.5);
  const pageWidth = doc.page.width;
  const contentWidth = 600;
  const xPos = (pageWidth - contentWidth) / 2;
  doc
    .fontSize(14)
    .font("Times-Roman")
    .fill("#444")
    .text(
      `Por haber completado con éxito el curso de historia sobre la formación y el desarrollo de las culturas andinas precolombinas. Otorgado el ${issuedDate}. Con una nota total de ${totalScore}`,
      xPos,
      doc.y,
      {
        align: "center",
        width: contentWidth,
      }
    );
}

function drawFooter(doc) {
  const y = doc.page.height - 100;
  const medalPath = path.join(__dirname, "../public/images/medalla.png");

  // Left sign
  doc.moveTo(150, y).lineTo(300, y).stroke();
  doc.fontSize(10).text("{NOMBRE DOCENTE}\nDocente de Cátedra", 150, y + 10, {
    align: "center",
    width: 150,
  });

  // Award ribbon
  const medalWidth = 180;
  const medalX = (doc.page.width - medalWidth) / 2;
  const medalY = y - 60;

  doc.image(medalPath, medalX, medalY, {
    width: medalWidth,
  });

  // Right sign
  doc.moveTo(500, y).lineTo(650, y).stroke();
  doc.text("John Mesías\nCoordinador de Desarrollo", 500, y + 10, {
    align: "center",
    width: 150,
  });
}
