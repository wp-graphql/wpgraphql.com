export interface WPTemplate {
  name: string;
  component: React.ComponentType<any>;
}

export interface WPTemplateMap {
  [key: string]: WPTemplate;
}

export interface WPNode {
  __typename?: string;
  uri?: string;
  id?: string;
  databaseId?: string;
  slug?: string;
  isFrontPage?: boolean;
  isPostsPage?: boolean;
  isTermNode?: boolean;
  isContentNode?: boolean;
  taxonomyName?: string;
  contentType?: {
    node?: {
      name?: string;
    };
  };
  template?: {
    templateName?: string;
  };
} 