import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  api: {
    from: {
      source: "file",
      relativePath: "config/swagger.json",
    },
    outputDir: "src/api-client",
    to: async (context) => {
      const filenamePrefix = "api";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenameCase: "camel",
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
