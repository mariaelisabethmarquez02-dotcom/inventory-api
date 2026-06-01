const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const analyzeInventory = async (req, res) => {

  try {

    const { products } = req.body;

    const prompt = `
Analiza este inventario:

${JSON.stringify(products)}

Responde en español.

Para cada producto indica:

- Riesgo (Alto, Medio o Bajo)
- Recomendación

Al final genera un resumen general.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    res.status(200).json({
      ok: true,
      analysis: response.text
    });

  } catch (error) {

  console.error("ERROR GEMINI:", error);

  res.status(500).json({
    ok: false,
    error: error.message
  });

}

};

module.exports = {
  analyzeInventory
};