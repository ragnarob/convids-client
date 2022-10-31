/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Event = {
  __typename?: 'Event';
  country: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
};

export type EventResponse = {
  __typename?: 'EventResponse';
  data?: Maybe<Event>;
  error?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type Maker = {
  __typename?: 'Maker';
  country: Scalars['String'];
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addEvent?: Maybe<EventResponse>;
  deleteEvent?: Maybe<EventResponse>;
  updateEvent?: Maybe<EventResponse>;
};


export type MutationAddEventArgs = {
  country: Scalars['String'];
  date: Scalars['String'];
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  country?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  artist?: Maybe<SongArtist>;
  artists?: Maybe<Array<Maybe<SongArtist>>>;
  event: Event;
  events: Array<Event>;
  maker?: Maybe<Maker>;
  makers?: Maybe<Array<Maybe<Maker>>>;
  video?: Maybe<Video>;
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMakerArgs = {
  id: Scalars['ID'];
};


export type QueryMakersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};


export type QueryVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Song = {
  __typename?: 'Song';
  artist: SongArtist;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type SongArtist = {
  __typename?: 'SongArtist';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Video = {
  __typename?: 'Video';
  date: Scalars['String'];
  event?: Maybe<Event>;
  id: Scalars['ID'];
  maker: Maker;
  songs?: Maybe<Array<Maybe<Song>>>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type VideoResponse = {
  __typename?: 'VideoResponse';
  data?: Maybe<Video>;
  error?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, title: string, country: string, date: string }> };


export const GetEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<GetEventsQuery, GetEventsQueryVariables>;