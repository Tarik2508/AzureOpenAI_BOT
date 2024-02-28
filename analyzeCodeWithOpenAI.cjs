const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const apikey = process.env.OPENAPI_API_KEY;
const client = new OpenAIClient(
  "https://ai-code-review-assistant.openai.azure.com/", 
  new AzureKeyCredential(apikey)
);
const { id, created, choices, usage } = await client.getCompletions("<deployment ID>", ["Tell me something"]);
