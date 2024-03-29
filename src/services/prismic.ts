// @ts-ignore
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import { NextApiRequest, PreviewData } from "next";
import sm from "./sm.json";

interface PrismicContext {
  req?: NextApiRequest;
  previewData: PreviewData;
}

interface PrismicResolver {
  [key: string]: any;
}

// Revisar

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export function linkResolver(doc: PrismicResolver) {
  switch (doc.type) {
    case "posts":
      return `/${doc.uid}`;
    default:
      return null;
  }
}

export function createClient(config: PrismicContext) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
