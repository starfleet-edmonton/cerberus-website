import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { documentToHtmlString, Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types';

@Component({
  selector: 'app-contentful-rich-text',
  template: `<div [innerHTML]="toHtml(document())"></div>`,
  standalone: true,
})
export class ContentfulRichText {
  public document = input<Partial<Document> | undefined>(undefined);
  jsonPipe: JsonPipe = new JsonPipe();

  // Instructions for adjusting the renderNodes here
  // https://www.npmjs.com/package/@contentful/rich-text-html-renderer

  options: Partial<Options> = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data['target'].fields;
        const mimeType = file.contentType;
        const mimeGroup = mimeType.split('/')[0];
        return '<img src="' + file.url + '" alt="' + title + '" />';
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        return '';
        // return (
        //   'Block Embedded Entry <pre>' +
        //   //       this.jsonPipe.transform(node.data['target']) +
        //   '</pre>'
        // );
      },
      [INLINES.ASSET_HYPERLINK]: (node) => {
        const { title, file } = node.data['target'].fields;
        return '<a href= "' + file.url + '" target="_blank">' + title + '</a>';
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        return '';
        // const sys = node.data['target'].sys;
        // const { title } = node.data['target'].fields;
        // // TODO need to setup a default page that will display using the sys.id field
        // return 'Entry Hyperlink' + title + ' <pre>' + this.jsonPipe.transform(sys) + '</pre>';
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        return '';
        // return (
        //   'Inline Embedded Entry <pre>' +
        //   //   this.jsonPipe.transform(node.data['target']) +
        //   '</pre>'
        // );
      },
    },
  };

  toHtml(document: Partial<Document> | undefined): string {
    if (document === undefined) {
      return '';
    }

    return documentToHtmlString(document as Document, this.options);
  }
}
