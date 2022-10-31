/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetEvents {\n    events(limit: 3) {\n      id\n      title\n      country\n      date\n    }\n  }\n": types.GetEventsDocument,
};

export function graphql(source: "\n  query GetEvents {\n    events(limit: 3) {\n      id\n      title\n      country\n      date\n    }\n  }\n"): (typeof documents)["\n  query GetEvents {\n    events(limit: 3) {\n      id\n      title\n      country\n      date\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;