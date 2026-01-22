// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, EntriesQueries, Entry, EntryFieldTypes } from 'contentful';
import { PageSkeleton, PublicEventSkeleton } from '../models/contentful.model';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: 'hj4b9t39v9vm',
  accessToken: '4CNn-N7aeQsAjxO6Fi9Sc4yXM22VXYsIYhVrMcN0cMQ',
  hostname: 'preview.contentful.com',

  contentTypeIds: {
    page: 'page',
  },
};

@Injectable()
export class PreviewContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
    host: CONFIG.hostname,
    environment: 'master',
  });

  constructor() {}

  getOnePage(id: string) {
    return this.cdaClient.getEntry<PageSkeleton>(id);
  }

  getOneEvent(id: string) {
    return this.cdaClient.getEntry<PublicEventSkeleton>(id);
  }
}
