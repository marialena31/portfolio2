import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: string | Date; output: string | Date };
  GatsbyImageData: {
    input: {
      layout: string;
      width: number;
      height: number;
      images: {
        fallback: { src: string; srcSet: string; sizes: string };
        sources: Array<{ srcSet: string; type: string; sizes: string }>;
      };
      placeholder?: { fallback: string };
    };
    output: {
      layout: string;
      width: number;
      height: number;
      images: {
        fallback: { src: string; srcSet: string; sizes: string };
        sources: Array<{ srcSet: string; type: string; sizes: string }>;
      };
      placeholder?: { fallback: string };
    };
  };
  JSON: { input: Record<string, unknown>; output: Record<string, unknown> };
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogPost = Node & {
  author: Scalars['String']['output'];
  children: Array<Node>;
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  excerpt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
  slug: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type BlogPostConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<BlogPostEdge>;
  group: Array<BlogPostGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type BlogPostConnectionDistinctArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostConnectionGroupArgs = {
  field: BlogPostFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogPostConnectionMaxArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostConnectionMinArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostConnectionSumArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostEdge = {
  next?: Maybe<BlogPost>;
  node: BlogPost;
  previous?: Maybe<BlogPost>;
};

export type BlogPostFieldSelector = {
  author?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  content?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type BlogPostFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  date?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type BlogPostGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<BlogPostEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<BlogPostGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type BlogPostGroupConnectionDistinctArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostGroupConnectionGroupArgs = {
  field: BlogPostFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogPostGroupConnectionMaxArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostGroupConnectionMinArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostGroupConnectionSumArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostSortInput = {
  author?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  content?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  excerpt?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  changeTime: Scalars['Date']['output'];
  children: Array<Node>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
};

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectorySortInput = {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
};

export type DuotoneGradient = {
  highlight: Scalars['String']['input'];
  opacity?: InputMaybe<Scalars['Int']['input']>;
  shadow: Scalars['String']['input'];
};

export type FieldSelectorEnum = 'SELECT';

export type File = Node & {
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  blksize?: Maybe<Scalars['Int']['output']>;
  blocks?: Maybe<Scalars['Int']['output']>;
  changeTime: Scalars['Date']['output'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']['output']>;
  rdev: Scalars['Int']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};

export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};

export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};

export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldSelector = {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  publicURL?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
};

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileSortInput = {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  children?: InputMaybe<NodeSortInput>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  publicURL?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
  ne?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
};

export type GatsbyImageFormat = 'AUTO' | 'AVIF' | 'JPG' | 'NO_CHANGE' | 'PNG' | 'WEBP';

export type GatsbyImageLayout = 'CONSTRAINED' | 'FIXED' | 'FULL_WIDTH';

export type GatsbyImagePlaceholder = 'BLURRED' | 'DOMINANT_COLOR' | 'NONE' | 'TRACED_SVG';

export type HomeBrandItem = {
  alt: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type HomeBrandItemFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  logo?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
};

export type HomeBrandItemFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeBrandItemFilterListInput = {
  elemMatch?: InputMaybe<HomeBrandItemFilterInput>;
};

export type HomeBrandItemSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  logo?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
};

export type HomeBrands = {
  items: Array<HomeBrandItem>;
  title: Scalars['String']['output'];
};

export type HomeBrandsFieldSelector = {
  items?: InputMaybe<HomeBrandItemFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type HomeBrandsFilterInput = {
  items?: InputMaybe<HomeBrandItemFilterListInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeBrandsSortInput = {
  items?: InputMaybe<HomeBrandItemSortInput>;
  title?: InputMaybe<SortOrderEnum>;
};

export type HomeButton = {
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  link: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeButtonFieldSelector = {
  isExternal?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  phoneNumber?: InputMaybe<FieldSelectorEnum>;
  text?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type HomeButtonFilterInput = {
  isExternal?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  phoneNumber?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeButtonFilterListInput = {
  elemMatch?: InputMaybe<HomeButtonFilterInput>;
};

export type HomeButtonSortInput = {
  isExternal?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  phoneNumber?: InputMaybe<SortOrderEnum>;
  text?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type HomeCallToAction = {
  buttons: Array<HomeButton>;
  title: Scalars['String']['output'];
};

export type HomeCallToActionFieldSelector = {
  buttons?: InputMaybe<HomeButtonFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type HomeCallToActionFilterInput = {
  buttons?: InputMaybe<HomeButtonFilterListInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeCallToActionSortInput = {
  buttons?: InputMaybe<HomeButtonSortInput>;
  title?: InputMaybe<SortOrderEnum>;
};

export type HomeHero = {
  cta: HomeButton;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HomeHeroFieldSelector = {
  cta?: InputMaybe<HomeButtonFieldSelector>;
  subtitle?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type HomeHeroFilterInput = {
  cta?: InputMaybe<HomeButtonFilterInput>;
  subtitle?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeHeroSortInput = {
  cta?: InputMaybe<HomeButtonSortInput>;
  subtitle?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type HomeJson = Node & {
  brands: HomeBrands;
  callToAction: HomeCallToAction;
  children: Array<Node>;
  hero: HomeHero;
  id: Scalars['ID']['output'];
  internal: Internal;
  needs: HomeNeeds;
  parent?: Maybe<Node>;
  services: HomeServices;
  testimonials: HomeTestimonials;
};

export type HomeJsonConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<HomeJsonEdge>;
  group: Array<HomeJsonGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<HomeJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type HomeJsonConnectionDistinctArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonConnectionGroupArgs = {
  field: HomeJsonFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeJsonConnectionMaxArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonConnectionMinArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonConnectionSumArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonEdge = {
  next?: Maybe<HomeJson>;
  node: HomeJson;
  previous?: Maybe<HomeJson>;
};

export type HomeJsonFieldSelector = {
  brands?: InputMaybe<HomeBrandsFieldSelector>;
  callToAction?: InputMaybe<HomeCallToActionFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  hero?: InputMaybe<HomeHeroFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  needs?: InputMaybe<HomeNeedsFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  services?: InputMaybe<HomeServicesFieldSelector>;
  testimonials?: InputMaybe<HomeTestimonialsFieldSelector>;
};

export type HomeJsonFilterInput = {
  brands?: InputMaybe<HomeBrandsFilterInput>;
  callToAction?: InputMaybe<HomeCallToActionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  hero?: InputMaybe<HomeHeroFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  needs?: InputMaybe<HomeNeedsFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  services?: InputMaybe<HomeServicesFilterInput>;
  testimonials?: InputMaybe<HomeTestimonialsFilterInput>;
};

export type HomeJsonGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<HomeJsonEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<HomeJsonGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<HomeJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type HomeJsonGroupConnectionDistinctArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonGroupConnectionGroupArgs = {
  field: HomeJsonFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeJsonGroupConnectionMaxArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonGroupConnectionMinArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonGroupConnectionSumArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonSortInput = {
  brands?: InputMaybe<HomeBrandsSortInput>;
  callToAction?: InputMaybe<HomeCallToActionSortInput>;
  children?: InputMaybe<NodeSortInput>;
  hero?: InputMaybe<HomeHeroSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  needs?: InputMaybe<HomeNeedsSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  services?: InputMaybe<HomeServicesSortInput>;
  testimonials?: InputMaybe<HomeTestimonialsSortInput>;
};

export type HomeNeedItem = {
  link: Scalars['String']['output'];
  question: Scalars['String']['output'];
  solution: Scalars['String']['output'];
};

export type HomeNeedItemFieldSelector = {
  link?: InputMaybe<FieldSelectorEnum>;
  question?: InputMaybe<FieldSelectorEnum>;
  solution?: InputMaybe<FieldSelectorEnum>;
};

export type HomeNeedItemFilterInput = {
  link?: InputMaybe<StringQueryOperatorInput>;
  question?: InputMaybe<StringQueryOperatorInput>;
  solution?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeNeedItemFilterListInput = {
  elemMatch?: InputMaybe<HomeNeedItemFilterInput>;
};

export type HomeNeedItemSortInput = {
  link?: InputMaybe<SortOrderEnum>;
  question?: InputMaybe<SortOrderEnum>;
  solution?: InputMaybe<SortOrderEnum>;
};

export type HomeNeeds = {
  items: Array<HomeNeedItem>;
  title: Scalars['String']['output'];
};

export type HomeNeedsFieldSelector = {
  items?: InputMaybe<HomeNeedItemFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type HomeNeedsFilterInput = {
  items?: InputMaybe<HomeNeedItemFilterListInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeNeedsSortInput = {
  items?: InputMaybe<HomeNeedItemSortInput>;
  title?: InputMaybe<SortOrderEnum>;
};

export type HomeServiceItem = {
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HomeServiceItemFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type HomeServiceItemFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeServiceItemFilterListInput = {
  elemMatch?: InputMaybe<HomeServiceItemFilterInput>;
};

export type HomeServiceItemSortInput = {
  description?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type HomeServices = {
  items: Array<HomeServiceItem>;
  title: Scalars['String']['output'];
};

export type HomeServicesFieldSelector = {
  items?: InputMaybe<HomeServiceItemFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type HomeServicesFilterInput = {
  items?: InputMaybe<HomeServiceItemFilterListInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeServicesSortInput = {
  items?: InputMaybe<HomeServiceItemSortInput>;
  title?: InputMaybe<SortOrderEnum>;
};

export type HomeTestimonialItem = {
  author: Scalars['String']['output'];
  company: Scalars['String']['output'];
  quote: Scalars['String']['output'];
  result: Scalars['String']['output'];
};

export type HomeTestimonialItemFieldSelector = {
  author?: InputMaybe<FieldSelectorEnum>;
  company?: InputMaybe<FieldSelectorEnum>;
  quote?: InputMaybe<FieldSelectorEnum>;
  result?: InputMaybe<FieldSelectorEnum>;
};

export type HomeTestimonialItemFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  company?: InputMaybe<StringQueryOperatorInput>;
  quote?: InputMaybe<StringQueryOperatorInput>;
  result?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeTestimonialItemFilterListInput = {
  elemMatch?: InputMaybe<HomeTestimonialItemFilterInput>;
};

export type HomeTestimonialItemSortInput = {
  author?: InputMaybe<SortOrderEnum>;
  company?: InputMaybe<SortOrderEnum>;
  quote?: InputMaybe<SortOrderEnum>;
  result?: InputMaybe<SortOrderEnum>;
};

export type HomeTestimonials = {
  items: Array<HomeTestimonialItem>;
  title: Scalars['String']['output'];
};

export type HomeTestimonialsFieldSelector = {
  items?: InputMaybe<HomeTestimonialItemFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type HomeTestimonialsFilterInput = {
  items?: InputMaybe<HomeTestimonialItemFilterListInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type HomeTestimonialsSortInput = {
  items?: InputMaybe<HomeTestimonialItemSortInput>;
  title?: InputMaybe<SortOrderEnum>;
};

export type ImageCropFocus =
  | 'ATTENTION'
  | 'CENTER'
  | 'EAST'
  | 'ENTROPY'
  | 'NORTH'
  | 'NORTHEAST'
  | 'NORTHWEST'
  | 'SOUTH'
  | 'SOUTHEAST'
  | 'SOUTHWEST'
  | 'WEST';

export type ImageFit = 'CONTAIN' | 'COVER' | 'FILL' | 'INSIDE' | 'OUTSIDE';

export type ImageFormat = 'AUTO' | 'AVIF' | 'JPG' | 'NO_CHANGE' | 'PNG' | 'WEBP';

export type ImageLayout = 'CONSTRAINED' | 'FIXED' | 'FULL_WIDTH';

export type ImagePlaceholder = 'BLURRED' | 'DOMINANT_COLOR' | 'NONE' | 'TRACED_SVG';

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  maxWidth?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64?: InputMaybe<Scalars['Boolean']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
};

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  base64?: Maybe<Scalars['String']['output']>;
  height: Scalars['Float']['output'];
  originalName?: Maybe<Scalars['String']['output']>;
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  srcSetWebp?: Maybe<Scalars['String']['output']>;
  srcWebp?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
  width: Scalars['Float']['output'];
};

export type ImageSharpFixedFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFixedSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  originalImg?: Maybe<Scalars['String']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  presentationHeight: Scalars['Int']['output'];
  presentationWidth: Scalars['Int']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  srcSetWebp?: Maybe<Scalars['String']['output']>;
  srcWebp?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
};

export type ImageSharpFluidFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpOriginal = {
  height?: Maybe<Scalars['Float']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ImageSharpOriginalFieldSelector = {
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpOriginalSortInput = {
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResize = {
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ImageSharpResizeFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpResizeSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpSortInput = {
  children?: InputMaybe<NodeSortInput>;
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']['output']>;
  contentDigest: Scalars['String']['output'];
  contentFilePath?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ignoreType?: Maybe<Scalars['Boolean']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']['input']>;
  glob?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  regex?: InputMaybe<Scalars['JSON']['input']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  itemCount: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type PortfolioProject = Node & {
  children: Array<Node>;
  description: Scalars['String']['output'];
  githubUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  internal: Internal;
  liveUrl: Scalars['String']['output'];
  parent?: Maybe<Node>;
  slug: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PortfolioProjectConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<PortfolioProjectEdge>;
  group: Array<PortfolioProjectGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<PortfolioProject>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type PortfolioProjectConnectionDistinctArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectConnectionGroupArgs = {
  field: PortfolioProjectFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PortfolioProjectConnectionMaxArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectConnectionMinArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectConnectionSumArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectEdge = {
  next?: Maybe<PortfolioProject>;
  node: PortfolioProject;
  previous?: Maybe<PortfolioProject>;
};

export type PortfolioProjectFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  githubUrl?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  liveUrl?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type PortfolioProjectFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  githubUrl?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  liveUrl?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type PortfolioProjectGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<PortfolioProjectEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<PortfolioProjectGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<PortfolioProject>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type PortfolioProjectGroupConnectionDistinctArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectGroupConnectionGroupArgs = {
  field: PortfolioProjectFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PortfolioProjectGroupConnectionMaxArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectGroupConnectionMinArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectGroupConnectionSumArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectSortInput = {
  children?: InputMaybe<NodeSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  githubUrl?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  liveUrl?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  optCurve?: InputMaybe<Scalars['Boolean']['input']>;
  optTolerance?: InputMaybe<Scalars['Float']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
  turdSize?: InputMaybe<Scalars['Float']['input']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_MAJORITY'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_WHITE';

export type Project = Node & {
  children: Array<Node>;
  description: Scalars['String']['output'];
  githubUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  internal: Internal;
  liveUrl?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  slug: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ProjectConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ProjectEdge>;
  group: Array<ProjectGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type ProjectConnectionDistinctArgs = {
  field: ProjectFieldSelector;
};

export type ProjectConnectionGroupArgs = {
  field: ProjectFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectConnectionMaxArgs = {
  field: ProjectFieldSelector;
};

export type ProjectConnectionMinArgs = {
  field: ProjectFieldSelector;
};

export type ProjectConnectionSumArgs = {
  field: ProjectFieldSelector;
};

export type ProjectEdge = {
  next?: Maybe<Project>;
  node: Project;
  previous?: Maybe<Project>;
};

export type ProjectFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  githubUrl?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  liveUrl?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type ProjectFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  githubUrl?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  liveUrl?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type ProjectGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ProjectEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ProjectGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type ProjectGroupConnectionDistinctArgs = {
  field: ProjectFieldSelector;
};

export type ProjectGroupConnectionGroupArgs = {
  field: ProjectFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectGroupConnectionMaxArgs = {
  field: ProjectFieldSelector;
};

export type ProjectGroupConnectionMinArgs = {
  field: ProjectFieldSelector;
};

export type ProjectGroupConnectionSumArgs = {
  field: ProjectFieldSelector;
};

export type ProjectSortInput = {
  children?: InputMaybe<NodeSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  githubUrl?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  liveUrl?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type Query = {
  allBlogPost: BlogPostConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allHomeJson: HomeJsonConnection;
  allImageSharp: ImageSharpConnection;
  allPortfolioProject: PortfolioProjectConnection;
  allProject: ProjectConnection;
  allService: ServiceConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allSkill: SkillConnection;
  blogPost?: Maybe<BlogPost>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  homeJson?: Maybe<HomeJson>;
  imageSharp?: Maybe<ImageSharp>;
  portfolioProject?: Maybe<PortfolioProject>;
  project?: Maybe<Project>;
  service?: Maybe<Service>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  skill?: Maybe<Skill>;
};

export type QueryAllBlogPostArgs = {
  filter?: InputMaybe<BlogPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BlogPostSortInput>>>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
};

export type QueryAllHomeJsonArgs = {
  filter?: InputMaybe<HomeJsonFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<HomeJsonSortInput>>>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
};

export type QueryAllPortfolioProjectArgs = {
  filter?: InputMaybe<PortfolioProjectFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PortfolioProjectSortInput>>>;
};

export type QueryAllProjectArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSortInput>>>;
};

export type QueryAllServiceArgs = {
  filter?: InputMaybe<ServiceFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ServiceSortInput>>>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
};

export type QueryAllSkillArgs = {
  filter?: InputMaybe<SkillFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SkillSortInput>>>;
};

export type QueryBlogPostArgs = {
  author?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  date?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryHomeJsonArgs = {
  brands?: InputMaybe<HomeBrandsFilterInput>;
  callToAction?: InputMaybe<HomeCallToActionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  hero?: InputMaybe<HomeHeroFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  needs?: InputMaybe<HomeNeedsFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  services?: InputMaybe<HomeServicesFilterInput>;
  testimonials?: InputMaybe<HomeTestimonialsFilterInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryPortfolioProjectArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  githubUrl?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  liveUrl?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryProjectArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  githubUrl?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  liveUrl?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryServiceArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  features?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySkillArgs = {
  category?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  level?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type Service = Node & {
  children: Array<Node>;
  description: Scalars['String']['output'];
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
  title: Scalars['String']['output'];
};

export type ServiceConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ServiceEdge>;
  group: Array<ServiceGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Service>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type ServiceConnectionDistinctArgs = {
  field: ServiceFieldSelector;
};

export type ServiceConnectionGroupArgs = {
  field: ServiceFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceConnectionMaxArgs = {
  field: ServiceFieldSelector;
};

export type ServiceConnectionMinArgs = {
  field: ServiceFieldSelector;
};

export type ServiceConnectionSumArgs = {
  field: ServiceFieldSelector;
};

export type ServiceEdge = {
  next?: Maybe<Service>;
  node: Service;
  previous?: Maybe<Service>;
};

export type ServiceFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  features?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type ServiceFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  features?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type ServiceGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ServiceEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ServiceGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Service>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type ServiceGroupConnectionDistinctArgs = {
  field: ServiceFieldSelector;
};

export type ServiceGroupConnectionGroupArgs = {
  field: ServiceFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceGroupConnectionMaxArgs = {
  field: ServiceFieldSelector;
};

export type ServiceGroupConnectionMinArgs = {
  field: ServiceFieldSelector;
};

export type ServiceGroupConnectionSumArgs = {
  field: ServiceFieldSelector;
};

export type ServiceSortInput = {
  children?: InputMaybe<NodeSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  features?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  title?: InputMaybe<SortOrderEnum>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  graphqlTypegen?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']['output']>;
  polyfill?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']['output']>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  graphqlTypegen?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  port?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String']['output'];
  children: Array<Node>;
  functionRoute: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']['output']>;
  originalAbsoluteFilePath: Scalars['String']['output'];
  originalRelativeFilePath: Scalars['String']['output'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String']['output'];
  relativeCompiledFilePath: Scalars['String']['output'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionSortInput = {
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  functionRoute?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  matchPath?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginName?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String']['output'];
  componentChunkName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  internalComponentName: Scalars['String']['output'];
  matchPath?: Maybe<Scalars['String']['output']>;
  pageContext?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  path: Scalars['String']['output'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  component?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  path?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
};

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageSortInput = {
  children?: InputMaybe<NodeSortInput>;
  component?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  path?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
};

export type SitePlugin = Node & {
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  packageJson?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']['output']>;
  pluginOptions?: Maybe<Scalars['JSON']['output']>;
  resolve?: Maybe<Scalars['String']['output']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldSelector = {
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  resolve?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
};

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginSortInput = {
  browserAPIs?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  resolve?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadata = {
  author?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  pageMetadata?: Maybe<SiteSiteMetadataPageMetadata>;
  siteUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataFieldSelector = {
  author?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<FieldSelectorEnum>;
  pageMetadata?: InputMaybe<SiteSiteMetadataPageMetadataFieldSelector>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  twitterUsername?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  pageMetadata?: InputMaybe<SiteSiteMetadataPageMetadataFilterInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  twitterUsername?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadata = {
  about?: Maybe<SiteSiteMetadataPageMetadataAbout>;
  contact?: Maybe<SiteSiteMetadataPageMetadataContact>;
  home?: Maybe<SiteSiteMetadataPageMetadataHome>;
  portfolio?: Maybe<SiteSiteMetadataPageMetadataPortfolio>;
  services?: Maybe<SiteSiteMetadataPageMetadataServices>;
};

export type SiteSiteMetadataPageMetadataAbout = {
  description?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataPageMetadataAboutFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataAboutFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataAboutSortInput = {
  description?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataContact = {
  description?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataPageMetadataContactFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataContactFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataContactSortInput = {
  description?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataFieldSelector = {
  about?: InputMaybe<SiteSiteMetadataPageMetadataAboutFieldSelector>;
  contact?: InputMaybe<SiteSiteMetadataPageMetadataContactFieldSelector>;
  home?: InputMaybe<SiteSiteMetadataPageMetadataHomeFieldSelector>;
  portfolio?: InputMaybe<SiteSiteMetadataPageMetadataPortfolioFieldSelector>;
  services?: InputMaybe<SiteSiteMetadataPageMetadataServicesFieldSelector>;
};

export type SiteSiteMetadataPageMetadataFilterInput = {
  about?: InputMaybe<SiteSiteMetadataPageMetadataAboutFilterInput>;
  contact?: InputMaybe<SiteSiteMetadataPageMetadataContactFilterInput>;
  home?: InputMaybe<SiteSiteMetadataPageMetadataHomeFilterInput>;
  portfolio?: InputMaybe<SiteSiteMetadataPageMetadataPortfolioFilterInput>;
  services?: InputMaybe<SiteSiteMetadataPageMetadataServicesFilterInput>;
};

export type SiteSiteMetadataPageMetadataHome = {
  description?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataPageMetadataHomeFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataHomeFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataHomeSortInput = {
  description?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataPortfolio = {
  description?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataPageMetadataPortfolioFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataPortfolioFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataPortfolioSortInput = {
  description?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataServices = {
  description?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataPageMetadataServicesFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataServicesFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataServicesSortInput = {
  description?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataSortInput = {
  about?: InputMaybe<SiteSiteMetadataPageMetadataAboutSortInput>;
  contact?: InputMaybe<SiteSiteMetadataPageMetadataContactSortInput>;
  home?: InputMaybe<SiteSiteMetadataPageMetadataHomeSortInput>;
  portfolio?: InputMaybe<SiteSiteMetadataPageMetadataPortfolioSortInput>;
  services?: InputMaybe<SiteSiteMetadataPageMetadataServicesSortInput>;
};

export type SiteSiteMetadataSortInput = {
  author?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<SortOrderEnum>;
  pageMetadata?: InputMaybe<SiteSiteMetadataPageMetadataSortInput>;
  siteUrl?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  twitterUsername?: InputMaybe<SortOrderEnum>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  graphqlTypegen?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  polyfill?: InputMaybe<SortOrderEnum>;
  port?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
};

export type Skill = Node & {
  category: Scalars['String']['output'];
  children: Array<Node>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Node>;
};

export type SkillConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SkillEdge>;
  group: Array<SkillGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Skill>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SkillConnectionDistinctArgs = {
  field: SkillFieldSelector;
};

export type SkillConnectionGroupArgs = {
  field: SkillFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SkillConnectionMaxArgs = {
  field: SkillFieldSelector;
};

export type SkillConnectionMinArgs = {
  field: SkillFieldSelector;
};

export type SkillConnectionSumArgs = {
  field: SkillFieldSelector;
};

export type SkillEdge = {
  next?: Maybe<Skill>;
  node: Skill;
  previous?: Maybe<Skill>;
};

export type SkillFieldSelector = {
  category?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  icon?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  level?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type SkillFilterInput = {
  category?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  level?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SkillGroupConnection = {
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SkillEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SkillGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Skill>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type SkillGroupConnectionDistinctArgs = {
  field: SkillFieldSelector;
};

export type SkillGroupConnectionGroupArgs = {
  field: SkillFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SkillGroupConnectionMaxArgs = {
  field: SkillFieldSelector;
};

export type SkillGroupConnectionMinArgs = {
  field: SkillFieldSelector;
};

export type SkillGroupConnectionSumArgs = {
  field: SkillFieldSelector;
};

export type SkillSortInput = {
  category?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  icon?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  level?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

export type SortOrderEnum = 'ASC' | 'DESC';

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  trim?: InputMaybe<Scalars['Float']['input']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type BrandsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BrandsQueryQuery = {
  allFile: {
    nodes: Array<{
      relativePath: string;
      childImageSharp?: { gatsbyImageData: IGatsbyImageData } | null;
    }>;
  };
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteTitleQueryQuery = {
  site?: {
    siteMetadata?: {
      title?: string | null;
      description?: string | null;
      author?: string | null;
    } | null;
  } | null;
};

export type SeoQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQueryQuery = {
  site?: {
    siteMetadata?: {
      title?: string | null;
      description?: string | null;
      siteUrl?: string | null;
      image?: string | null;
      twitterUsername?: string | null;
      author?: string | null;
      pageMetadata?: {
        home?: { description?: string | null } | null;
        about?: { description?: string | null } | null;
        services?: { description?: string | null } | null;
        portfolio?: { description?: string | null } | null;
        contact?: { description?: string | null } | null;
      } | null;
    } | null;
  } | null;
};

export type BlogListQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BlogListQueryQuery = {
  allBlogPost: {
    nodes: Array<{
      id: string;
      title: string;
      excerpt: string;
      date: string;
      author: string;
      tags: Array<string>;
      slug: string;
    }>;
  };
};

export type PortfolioPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PortfolioPageQueryQuery = {
  allPortfolioProject: {
    nodes: Array<{
      id: string;
      title: string;
      description: string;
      image: string;
      tags: Array<string>;
      githubUrl: string;
      liveUrl: string;
      slug: string;
    }>;
  };
};

export type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;

export type BlogPostBySlugQuery = {
  blogPost?: {
    id: string;
    title: string;
    date: string;
    author: string;
    content: string;
    excerpt: string;
    tags: Array<string>;
    slug: string;
  } | null;
};

export type ProjectTemplateQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type ProjectTemplateQueryQuery = {
  portfolioProject?: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: Array<string>;
    githubUrl: string;
    liveUrl: string;
    slug: string;
  } | null;
};
