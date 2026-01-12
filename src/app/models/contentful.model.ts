import { EntryFieldTypes } from 'contentful';

export interface BlogEntrySkeleton {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFieldTypes.Text;
    publishDate: EntryFieldTypes.Date;
    overview: EntryFieldTypes.Text;
    entryContext: EntryFieldTypes.RichText;
  };
}

export interface MemberPageSkeleton {
  contentTypeId: 'memberArea';
  fields: {
    pageTitle: EntryFieldTypes.Text;
    pageContent: EntryFieldTypes.RichText;
  };
}

export interface PageSkeleton {
  contentTypeId: 'GenericPage';
  fields: {
    pageTitle: EntryFieldTypes.Text;
    pageContent: EntryFieldTypes.RichText;
  };
}

export interface PublicEventSkeleton {
  contentTypeId: 'publicEvent';
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    dateAndTime: EntryFieldTypes.Date;
    address: EntryFieldTypes.Text;
    location: EntryFieldTypes.Location;
  };
}
