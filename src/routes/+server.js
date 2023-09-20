import Tesseract from "tesseract.js";
import { json } from "@sveltejs/kit";
import { Buffer } from "node:buffer";

// eslint-disable-next-line no-undef
globalThis.Buffer = Buffer;

export const POST = async ({ request }) => {
  const data = await request.formData();
  const uploadedFile = data.get("file");
  const imageBuffer = await getBufferFromFile(uploadedFile);

  const worker = await Tesseract.createWorker();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");

  console.log("Parsing text from image...\n")

  const { data: { text } } = await worker.recognize(imageBuffer);

  console.log("Finished!\n")

  console.log(text);

  return json({
    parsedText: text
  });
};

const getBufferFromFile = async (file) => Buffer.from(await file.arrayBuffer());
