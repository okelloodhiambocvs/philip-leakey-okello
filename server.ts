/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { createServer as createViteServer } from "vite";
import PDFDocument from "pdfkit";

// Explicitly retrieve raw biography, achievements, and timeline to avoid ES module client-only imports
const biographyIntro = "Philip Leakey Okello represents a rare caliber of institutional leadership—one defined by systemic reform, regulatory rigor, and an unwavering commitment to public trust. Over nearly two decades of state-level service, he has steered major public organizations through periods of profound operational modernization, converting regulatory mandates into high-yield social and economic governance structures.";

const biographyJourney = [
  {
    phase: "The Foundation of Fiscal Discipline",
    title: "Assistant Accountant to Head of Finance",
    description: "Philip's career began in the rigorous crucibles of public financial systems. Serving initially as an Assistant Accountant and ascending to Head of Finance, he established internal controls, spearheaded modern treasury practices, and oversaw the fiscal transparency of capital budgets. This early focus on financial architecture instilled a deep respect for resource stewardship, risk boundaries, and absolute transparency."
  },
  {
    phase: "Transition to Institutional Oversight",
    title: "Director of Corporate Services",
    description: "As Director of Corporate Services, Philip bridged the gap between financial compliance and enterprise strategy. He commanded diverse teams spanning legal, human capital, procurement, and information systems. He restructured administrative departments, modernized IT infrastructures to automate physical workflows, and designed long-range strategic plans aligned with national legislative frameworks."
  },
  {
    phase: "National Executive Authority",
    title: "Acting CEO to Chief Executive Officer",
    description: "Appointed first as Acting CEO and subsequently verified as substantiative Chief Executive Officer, Philip inherited the responsibility of regulating vital security service sectors in Kenya. Under his stewardship, the regulator moved from passive oversight to active industry-wide standardization, digital certification, and rigorous policy enforcement. He has balanced national security protocols with private sector market growth, creating a template for regulatory transformation."
  }
];

const legacyQuote = "True governance is not merely the enforcement of rules, but the creation of an environment where integrity becomes a natural default, and public services operate with predictable excellence.";

const achievements = [
  { metric: "3,000+", label: "Secured Entities", context: "Security corporate operations monitored, vetted, and regulated nationwide to maintain national defense guidelines." },
  { metric: "KSh 1.2B+", label: "Budget Oversight", context: "Cumulative public finance allocations managed and audited with immaculate accountability and flawless legal compliance." },
  { metric: "100+", label: "Direct Executives Led", context: "Led inter-disciplinary cohorts of legal, compliance, finance, and technical experts toward unified institutional targets." },
  { metric: "15+", label: "Years Governance Presence", context: "Guiding policy and public sector administration under three separate legislative cabinets." }
];

const timeline = [
  {
    role: "Chief Executive Officer",
    organization: "Private Security Regulatory Authority (PRSA)",
    period: "2018 - Present",
    description: "Appointed to spearhead the regulation, licensing, and structural modernization of Kenya’s private security sector. Philip leads a workforce of regulatory officers and manages over 3,000 corporate security providers, ensuring alignment with constitutional security mandates.",
    keyImpacts: [
      "Pioneered the digitization of the national corporate licensing system, reducing service delivery cycles from 90 days to 14 days.",
      "Oversaw the introduction of a national biometric guard registration program, enhancing state records and security vetting of over 300,000 personnel.",
      "Formulated and implemented structural training manuals for private guards, establishing a standardized code of conduct and human rights-based operating models.",
      "Advised the Board of Directors on policy frameworks to integrate private providers with national disaster recovery and law enforcement operations."
    ]
  },
  {
    role: "Acting Chief Executive Officer",
    organization: "Private Security Regulatory Authority",
    period: "2016 - 2018",
    description: "Formally charged to establish the foundational offices, regulatory processes, and policy directives for the newly created state corporation. Steered the agency through initial gazettement and stakeholder consensus-building.",
    keyImpacts: [
      "Led the drafting of draft private security regulations, presenting to the Parliamentary Committee on Delegated Legislation.",
      "Prepared and defended the Authority’s inaugural strategic plan and secured initial parliamentary funding allocations of KSh 250M.",
      "Established the agency’s internal human resources, administrative, and data management systems, creating a robust framework for operational governance."
    ]
  },
  {
    role: "Director, Corporate Services",
    organization: "State Corporations Registry & Regulatory Agencies",
    period: "2011 - 2016",
    description: "Directed auxiliary units including human capital, regulatory compliance, technology infrastructure, procurement, and corporate communication, ensuring corporate governance standards met National Treasury guidelines.",
    keyImpacts: [
      "Directed the integration of automated enterprise resource planning (ERP) systems, trimming administrative overhead by 22%.",
      "Created a robust training matrix for middle-management, which increased staff audit compliance and legal accountability metrics to record-high levels.",
      "Managed external strategic legal battles, protecting public land and asset allocations of state registries through collaborative litigation strategies."
    ]
  },
  {
    role: "Head of Accounts and Finance / Senior Accountant",
    organization: "Various Public Sector Institutions",
    period: "2006 - 2011",
    description: "Accountable for internal treasury control, annual financial planning, and external compliance reviews. Designed financial management frameworks and represented the management in parliamentary public accounts committee sessions.",
    keyImpacts: [
      "Supervised budget formulation and audit processes for high-impact capital projects with aggregate allocations exceeding KSh 1.2 Billion.",
      "Pioneered early adoption of Integrated Financial Management Information Systems (IFMIS) ahead of mandatory treasury guidelines.",
      "Received consecutive 'Unqualified' audit opinions from the Auditor-General, confirming flawless structural record-keeping."
    ]
  }
];

// In-memory newsletter subscribers list for brief retention (can be expanded later)
const newsletterSubscribers = new Set<string>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Newsletter subscription brief endpoint
  app.post("/api/newsletter-subscribe", (req, res) => {
    const { email } = req.body;
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "A valid email address is required." });
    }
    const cleanEmail = email.trim().toLowerCase();
    
    // Add to our persistent database / set
    newsletterSubscribers.add(cleanEmail);
    console.log(`[NEWSLETTER] New executive subscriber registered: ${cleanEmail}`);
    
    return res.status(200).json({ 
      success: true, 
      message: "Successfully registered to the Office executive briefs." 
    });
  });

  // Lazy-initialization helper for Gemini client to prevent crashes if key is initially absent
  let aiClient: any = null;
  function getGeminiClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required but missing. Please add it via Settings > Secrets.");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // Translation Service Proxy powered by Google Cloud Translation API & Gemini for Global Strategic Outreach
  app.post("/api/translate", async (req, res) => {
    const { text, texts, targetLanguage } = req.body;
    
    const target = targetLanguage || "en";
    if (target !== "en" && target !== "sw" && target !== "fr") {
      return res.status(400).json({ success: false, message: "Unsupported target language." });
    }

    const langMapping: Record<string, string> = {
      en: "English",
      sw: "Swahili (Kiswahili)",
      fr: "French (Français)"
    };
    const targetLangName = langMapping[target];

    const googleApiKey = process.env.GOOGLE_TRANSLATION_API_KEY;

    // Case 1: Batch translation request
    if (Array.isArray(texts)) {
      if (texts.length === 0) {
        return res.status(200).json({ success: true, translatedTexts: [] });
      }

      // Try Google Cloud Translation API first if the user configured a key
      if (googleApiKey) {
        try {
          const url = `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(googleApiKey)}`;
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              q: texts,
              target: target,
              format: "html"
            })
          });

          if (response.ok) {
            const data = await response.json();
            if (data && data.data && Array.isArray(data.data.translations)) {
              const finalTranslations = data.data.translations.map((t: any) => t.translatedText);
              return res.status(200).json({ success: true, translatedTexts: finalTranslations });
            }
          } else {
            const errText = await response.text();
            console.warn("[WARN] Google Cloud Translation API failed, falling back to Gemini:", response.status, errText);
          }
        } catch (err: any) {
          console.warn("[WARN] Google Cloud Translation API error, falling back to Gemini:", err.message);
        }
      }

      // Fallback: Gemini Batch Translation
      try {
        const ai = getGeminiClient();
        
        const prompt = `You are an expert diplomatic translator specialized in global governance, policy framework, public sector administration, and East African parastatals.
Translate the following array of texts accurately, professionally, and eloquently into ${targetLangName} (ISO code: ${target}).
Maintain the exact professional tone (academic, authoritative, and elegant) of the original texts.
If there are HTML, React JSX tags, or markdown formatting tags in any text, keep them completely unchanged and preserve them perfectly.
Return a JSON array of strings of the exact same length where each element is the translation of the corresponding original text. Keep the translations in the exact same array index order.

Original Texts to Translate (as a JSON array of strings):
${JSON.stringify(texts)}`;

        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "ARRAY",
              items: { type: "STRING" }
            }
          }
        });

        const translatedText = response.text || "[]";
        let translatedTexts: string[] = [];
        try {
          translatedTexts = JSON.parse(translatedText.trim());
        } catch (parseErr) {
          console.warn("Failed to parse batch JSON response from Gemini, raw response:", translatedText);
        }

        // Fill length mismatch with original values
        const finalTranslations = texts.map((original, index) => {
          return translatedTexts[index] !== undefined ? translatedTexts[index] : original;
        });

        return res.status(200).json({ success: true, translatedTexts: finalTranslations });
      } catch (error: any) {
        console.warn("[WARN] Batch translation service error, using graceful fallback:", error.message);
        return res.status(200).json({
          success: false,
          message: error.message || "Failed to contact translation service.",
          translatedTexts: texts // Fallback to original texts
        });
      }
    }

    // Case 2: Single translation request
    if (!text || typeof text !== "string") {
      return res.status(400).json({ success: false, message: "Valid text or texts array is required for translation." });
    }

    // Try Google Cloud Translation API first if a key is provided
    if (googleApiKey) {
      try {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(googleApiKey)}`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            q: [text],
            target: target,
            format: "html"
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data && data.data && Array.isArray(data.data.translations) && data.data.translations[0]) {
            const translated = data.data.translations[0].translatedText;
            return res.status(200).json({ success: true, translatedText: translated });
          }
        } else {
          const errText = await response.text();
          console.warn("[WARN] Google Cloud Translation API single translation failed, falling back to Gemini:", response.status, errText);
        }
      } catch (err: any) {
        console.warn("[WARN] Google Cloud Translation API single translation error, falling back to Gemini:", err.message);
      }
    }

    // Fallback: Gemini Single Translation
    try {
      const ai = getGeminiClient();

      const prompt = `You are an expert diplomatic translator specialized in global governance, policy framework, public sector administration, and East African parastatals.
Translate the following text accurately, professionally, and eloquently into ${targetLangName} (ISO code: ${target}).
Maintain the exact professional tone (academic, authoritative, and elegant) of the original text.
If there are HTML, React JSX tags, or markdown formatting tags, keep them completely unchanged and preserve them perfectly.
Only deliver the translated text itself without any introduction, explanations, notes, or meta-commentary.

Original Text to Translate:
${text}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      const translated = response.text || text;
      return res.status(200).json({ success: true, translatedText: translated.trim() });
    } catch (error: any) {
      console.warn("[WARN] Translation service error, using graceful fallback:", error.message);
      return res.status(200).json({
        success: false,
        message: error.message || "Failed to contact translation service.",
        translatedText: text // Fallback to original text gracefully on failure
      });
    }
  });

  // Server-side PDF generation endpoint with robust layout design
  app.get("/api/download-cv", (req, res) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margins: { top: 56, bottom: 56, left: 56, right: 56 },
        bufferPages: true
      });

      // Setup HTTP response headers for PDF streaming download
      res.setHeader("Content-Disposition", "attachment; filename=Philip_Leakey_Okello_CV.pdf");
      res.setHeader("Content-Type", "application/pdf");

      doc.pipe(res);

      // Design Palette Definitions
      const colorNavy = "#0F2744";
      const colorGold = "#C9A227";
      const colorCharcoal = "#333333";
      const colorGray = "#555555";
      const colorLightGray = "#EEEEEE";

      // 1. Elegant Letterhead Top Border Accent
      doc.rect(0, 0, doc.page.width, 10).fill(colorNavy);
      doc.rect(0, 10, doc.page.width, 4).fill(colorGold);

      // 2. Main Executive Header
      doc.moveDown(1.5);
      doc.fillColor(colorNavy)
         .font("Times-Bold")
         .fontSize(24)
         .text("PHILIP LEAKEY OKELLO, CPA-K", { characterSpacing: 1 });

      doc.moveDown(0.2);
      doc.fillColor(colorGold)
         .font("Times-Bold")
         .fontSize(10)
         .text("CHIEF EXECUTIVE OFFICER  |  PUBLIC SECTOR GOVERNANCE & COMPLIANCE EXPERT", { characterSpacing: 1.5 });

      doc.moveDown(0.4);
      doc.fillColor(colorCharcoal)
         .font("Helvetica-Oblique")
         .fontSize(9)
         .text("Nairobi Registry, Kenya   |   +254 726 140 245   |   info@leakeyokello.com   |   leakeyokello.com");

      // Header separation line
      doc.moveDown(0.6);
      doc.strokeColor(colorGold).lineWidth(1).moveTo(56, doc.y).lineTo(doc.page.width - 56, doc.y).stroke();
      doc.moveDown(1);

      // 3. Section I: Executive Summary
      doc.fillColor(colorNavy).font("Times-Bold").fontSize(12).text("I. EXECUTIVE PROFILE & LEADERSHIP STATURE", { underline: false });
      doc.moveDown(0.4);
      doc.fillColor(colorCharcoal).font("Helvetica").fontSize(9.5).lineGap(4).text(biographyIntro, { align: "justify" });
      doc.moveDown(0.8);

      // Legacy Quote callout
      const quoteY = doc.y;
      doc.rect(56, quoteY, doc.page.width - 112, 45).fill("#FAF9F6");
      doc.strokeColor(colorGold).lineWidth(2).moveTo(56, quoteY).lineTo(56, quoteY + 45).stroke();
      doc.fillColor(colorNavy)
         .font("Times-Italic")
         .fontSize(10)
         .text(`"${legacyQuote}"`, 70, quoteY + 12, { width: doc.page.width - 140, align: "center", lineGap: 3 });
      
      doc.y = quoteY + 55; // Reset doc.y manually after fixed-size rect positioning
      doc.moveDown(0.6);

      // 4. Section II: Key Fiduciary & Governance Achievements
      doc.fillColor(colorNavy).font("Times-Bold").fontSize(12).text("II. KEY INSTITUTIONAL ACHIEVEMENTS");
      doc.moveDown(0.5);

      // Render Achievements in a 2-Column Table Grid
      let startY = doc.y;
      const colWidth = (doc.page.width - 112 - 20) / 2;

      achievements.forEach((ach, index) => {
        const isSecondCol = index % 2 === 1;
        const xPos = isSecondCol ? 56 + colWidth + 20 : 56;
        const yPos = isSecondCol ? startY : doc.y;

        // Custom container background for high-contrast presentation
        doc.rect(xPos, yPos, colWidth, 48).fill("#F7F9FC");
        doc.strokeColor(colorNavy + "15").lineWidth(0.5).rect(xPos, yPos, colWidth, 48).stroke();

        doc.fillColor(colorGold).font("Helvetica-Bold").fontSize(12).text(ach.metric, xPos + 10, yPos + 8);
        doc.fillColor(colorNavy).font("Helvetica-Bold").fontSize(8.5).text(ach.label, xPos + 10, yPos + 22);
        doc.fillColor(colorCharcoal).font("Helvetica").fontSize(7.5).lineGap(1).text(ach.context, xPos + 10, yPos + 32, { width: colWidth - 20 });

        if (!isSecondCol) {
          // Keep track of the top coordinate before progressing to second column rendering
        } else {
          doc.y = yPos + 48; // Push document down after matching each row pair
          doc.moveDown(0.2);
        }
      });

      doc.moveDown(0.8);

      // 5. Section III: Public Leadership Chronology
      doc.fillColor(colorNavy).font("Times-Bold").fontSize(12).text("III. PROFESSIONAL CHRONOLOGY & SYSTEMIC IMPACT");
      doc.moveDown(0.5);

      timeline.forEach((role) => {
        // Prevent orphaned headings by checking available page depth
        if (doc.y > doc.page.height - 120) {
          doc.addPage();
          // Re-draw elegant border header on successive pages
          doc.rect(0, 0, doc.page.width, 10).fill(colorNavy);
          doc.rect(0, 10, doc.page.width, 4).fill(colorGold);
          doc.moveDown(2);
        }

        // Role title & Period header
        doc.fillColor(colorNavy).font("Times-Bold").fontSize(11).text(role.role);
        const periodY = doc.y - doc.currentLineHeight() - 1;
        doc.fillColor(colorGold)
           .font("Helvetica-Bold")
           .fontSize(8.5)
           .text(role.period, doc.page.width - 56 - 100, periodY, { width: 100, align: "right" });

        doc.fillColor(colorCharcoal).font("Helvetica-Bold").fontSize(9).text(role.organization);
        doc.moveDown(0.2);
        
        doc.fillColor(colorGray).font("Helvetica-Oblique").fontSize(8.5).lineGap(3).text(role.description);
        doc.moveDown(0.3);

        // Core Impacts Bullet points
        role.keyImpacts.forEach((imp) => {
          if (doc.y > doc.page.height - 40) {
            doc.addPage();
            // Re-draw elegant border header on successive pages
            doc.rect(0, 0, doc.page.width, 10).fill(colorNavy);
            doc.rect(0, 10, doc.page.width, 4).fill(colorGold);
            doc.moveDown(2);
          }

          doc.fillColor(colorGold).font("Helvetica-Bold").fontSize(10).text("• ", 68, doc.y);
          const bulletTextY = doc.y - doc.currentLineHeight() + 1;
          doc.fillColor(colorCharcoal)
             .font("Helvetica")
             .fontSize(8.5)
             .lineGap(2)
             .text(imp, 78, bulletTextY, { width: doc.page.width - 134, align: "justify" });
          doc.moveDown(0.15);
        });

        doc.moveDown(0.6);
        doc.strokeColor(colorGold + "30").lineWidth(0.5).moveTo(56, doc.y).lineTo(doc.page.width - 56, doc.y).stroke();
        doc.moveDown(0.6);
      });

      // 6. Section IV: Biography Journey Milestones
      if (doc.y > doc.page.height - 100) {
        doc.addPage();
        doc.rect(0, 0, doc.page.width, 10).fill(colorNavy);
        doc.rect(0, 10, doc.page.width, 4).fill(colorGold);
        doc.moveDown(2);
      }

      doc.fillColor(colorNavy).font("Times-Bold").fontSize(12).text("IV. REGULATORY JOURNEY & KEY HIGHLIGHTS");
      doc.moveDown(0.5);

      biographyJourney.forEach((phase) => {
        if (doc.y > doc.page.height - 80) {
          doc.addPage();
          doc.rect(0, 0, doc.page.width, 10).fill(colorNavy);
          doc.rect(0, 10, doc.page.width, 4).fill(colorGold);
          doc.moveDown(2);
        }

        doc.fillColor(colorGold).font("Helvetica-Bold").fontSize(8.5).text(phase.phase.toUpperCase(), { characterSpacing: 1 });
        doc.fillColor(colorNavy).font("Times-Bold").fontSize(10.5).text(phase.title);
        doc.moveDown(0.2);
        doc.fillColor(colorCharcoal).font("Helvetica").fontSize(8.5).lineGap(3).text(phase.description, { align: "justify" });
        doc.moveDown(0.5);
      });

      // Dynamic Footer Page Numbers for all generated pages
      const range = doc.bufferedPageRange();
      for (let i = range.start; i < range.start + range.count; i++) {
        doc.switchToPage(i);
        doc.fillColor(colorGray)
           .font("Helvetica-Oblique")
           .fontSize(7.5)
           .text(
             `Philip Leakey Okello  |  Curriculum Vitae  |  Nairobi, Kenya`,
             56,
             doc.page.height - 38,
             { width: doc.page.width - 112, align: "left" }
           );
        
        doc.fillColor(colorNavy)
           .font("Helvetica-Bold")
           .fontSize(7.5)
           .text(
             `Page ${i + 1} of ${range.count}`,
             56,
             doc.page.height - 38,
             { width: doc.page.width - 112, align: "right" }
           );
      }

      doc.end();
    } catch (error) {
      console.error("[ERROR] Failed to generate CV PDF:", error);
      res.status(500).send("Executive dossier rendering encountered a serious failure.");
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started. Listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
