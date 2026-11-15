const certificateFiles: Record<string, { url: string; filename: string }> = {
  "python-full-stack-internship": {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IMUuA6VOeYR1qjyAQszVEsmqUj/a57d0d17-f6af-4c10-bd97-6b462ed2d70c.pdf",
    filename: "Rudra-Madhab-Sahoo-Python-Full-Stack-Internship.pdf",
  },
  "codealpha-python-internship": {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IMUuA6VOeYR1qjyAQszVEsmqUj/48e99a70-1a38-4622-acc4-dc524b38ab5f.pdf",
    filename: "Rudra-Madhab-Sahoo-CodeAlpha-Python-Internship.pdf",
  },
  "programming-with-c": {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IMUuA6VOeYR1qjyAQszVEsmqUj/ab05cc89-327e-41c0-a204-0b9c53af1d41.pdf",
    filename: "Rudra-Madhab-Sahoo-Programming-with-C-Coursera.pdf",
  },
  "campuscrew-priority-member": {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IMUuA6VOeYR1qjyAQszVEsmqUj/ebb974a5-d5eb-419c-8a8d-85f2fd46afcd.pdf",
    filename: "Rudra-Madhab-Sahoo-CampusCrew-Priority-Member.pdf",
  },
};

export default async function handler(req: any, res: any) {
  const name = String(req.query?.name ?? "");
  const certificate = certificateFiles[name];

  if (!certificate) {
    res.status(404).json({ error: "Certificate not found" });
    return;
  }

  try {
    const upstream = await fetch(certificate.url);
    if (!upstream.ok) {
      res.status(502).json({ error: "Certificate file is temporarily unavailable" });
      return;
    }

    const pdf = Buffer.from(await upstream.arrayBuffer());
    const shouldDownload = req.query?.download === "1";

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `${shouldDownload ? "attachment" : "inline"}; filename="${certificate.filename}"`
    );
    res.setHeader("Content-Length", String(pdf.length));
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.status(200).send(pdf);
  } catch {
    res.status(502).json({ error: "Unable to retrieve the certificate right now" });
  }
}
