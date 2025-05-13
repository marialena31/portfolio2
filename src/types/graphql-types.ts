export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
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
  Date: any;
  GatsbyImageData: any;
  JSON: any;
};

export type AvifOptions = {
  lossless: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
  speed: InputMaybe<Scalars['Int']>;
};

export type BlogPost = Node & {
  author: Scalars['String'];
  children: Array<Node>;
  content: Scalars['String'];
  date: Scalars['String'];
  excerpt: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type BlogPostConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<BlogPostEdge>;
  group: Array<BlogPostGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type BlogPostConnectionDistinctArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostConnectionGroupArgs = {
  field: BlogPostFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<BlogPost>;
  node: BlogPost;
  previous: Maybe<BlogPost>;
};

export type BlogPostFieldSelector = {
  author: InputMaybe<FieldSelectorEnum>;
  children: InputMaybe<NodeFieldSelector>;
  content: InputMaybe<FieldSelectorEnum>;
  date: InputMaybe<FieldSelectorEnum>;
  excerpt: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  parent: InputMaybe<NodeFieldSelector>;
  slug: InputMaybe<FieldSelectorEnum>;
  tags: InputMaybe<FieldSelectorEnum>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type BlogPostFilterInput = {
  author: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  date: InputMaybe<StringQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type BlogPostGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<BlogPostEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<BlogPostGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type BlogPostGroupConnectionDistinctArgs = {
  field: BlogPostFieldSelector;
};

export type BlogPostGroupConnectionGroupArgs = {
  field: BlogPostFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  author: InputMaybe<SortOrderEnum>;
  children: InputMaybe<NodeSortInput>;
  content: InputMaybe<SortOrderEnum>;
  date: InputMaybe<SortOrderEnum>;
  excerpt: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  parent: InputMaybe<NodeSortInput>;
  slug: InputMaybe<SortOrderEnum>;
  tags: InputMaybe<SortOrderEnum>;
  title: InputMaybe<SortOrderEnum>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne: InputMaybe<Scalars['Boolean']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  absolutePath: InputMaybe<FieldSelectorEnum>;
  accessTime: InputMaybe<FieldSelectorEnum>;
  atime: InputMaybe<FieldSelectorEnum>;
  atimeMs: InputMaybe<FieldSelectorEnum>;
  base: InputMaybe<FieldSelectorEnum>;
  birthTime: InputMaybe<FieldSelectorEnum>;
  birthtime: InputMaybe<FieldSelectorEnum>;
  birthtimeMs: InputMaybe<FieldSelectorEnum>;
  changeTime: InputMaybe<FieldSelectorEnum>;
  children: InputMaybe<NodeFieldSelector>;
  ctime: InputMaybe<FieldSelectorEnum>;
  ctimeMs: InputMaybe<FieldSelectorEnum>;
  dev: InputMaybe<FieldSelectorEnum>;
  dir: InputMaybe<FieldSelectorEnum>;
  ext: InputMaybe<FieldSelectorEnum>;
  extension: InputMaybe<FieldSelectorEnum>;
  gid: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  ino: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  mode: InputMaybe<FieldSelectorEnum>;
  modifiedTime: InputMaybe<FieldSelectorEnum>;
  mtime: InputMaybe<FieldSelectorEnum>;
  mtimeMs: InputMaybe<FieldSelectorEnum>;
  name: InputMaybe<FieldSelectorEnum>;
  nlink: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  prettySize: InputMaybe<FieldSelectorEnum>;
  rdev: InputMaybe<FieldSelectorEnum>;
  relativeDirectory: InputMaybe<FieldSelectorEnum>;
  relativePath: InputMaybe<FieldSelectorEnum>;
  root: InputMaybe<FieldSelectorEnum>;
  size: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  uid: InputMaybe<FieldSelectorEnum>;
};

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  absolutePath: InputMaybe<SortOrderEnum>;
  accessTime: InputMaybe<SortOrderEnum>;
  atime: InputMaybe<SortOrderEnum>;
  atimeMs: InputMaybe<SortOrderEnum>;
  base: InputMaybe<SortOrderEnum>;
  birthTime: InputMaybe<SortOrderEnum>;
  birthtime: InputMaybe<SortOrderEnum>;
  birthtimeMs: InputMaybe<SortOrderEnum>;
  changeTime: InputMaybe<SortOrderEnum>;
  children: InputMaybe<NodeSortInput>;
  ctime: InputMaybe<SortOrderEnum>;
  ctimeMs: InputMaybe<SortOrderEnum>;
  dev: InputMaybe<SortOrderEnum>;
  dir: InputMaybe<SortOrderEnum>;
  ext: InputMaybe<SortOrderEnum>;
  extension: InputMaybe<SortOrderEnum>;
  gid: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  ino: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  mode: InputMaybe<SortOrderEnum>;
  modifiedTime: InputMaybe<SortOrderEnum>;
  mtime: InputMaybe<SortOrderEnum>;
  mtimeMs: InputMaybe<SortOrderEnum>;
  name: InputMaybe<SortOrderEnum>;
  nlink: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  prettySize: InputMaybe<SortOrderEnum>;
  rdev: InputMaybe<SortOrderEnum>;
  relativeDirectory: InputMaybe<SortOrderEnum>;
  relativePath: InputMaybe<SortOrderEnum>;
  root: InputMaybe<SortOrderEnum>;
  size: InputMaybe<SortOrderEnum>;
  sourceInstanceName: InputMaybe<SortOrderEnum>;
  uid: InputMaybe<SortOrderEnum>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type FieldSelectorEnum = 'SELECT';

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};

export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export type FileFieldSelector = {
  absolutePath: InputMaybe<FieldSelectorEnum>;
  accessTime: InputMaybe<FieldSelectorEnum>;
  atime: InputMaybe<FieldSelectorEnum>;
  atimeMs: InputMaybe<FieldSelectorEnum>;
  base: InputMaybe<FieldSelectorEnum>;
  birthTime: InputMaybe<FieldSelectorEnum>;
  birthtime: InputMaybe<FieldSelectorEnum>;
  birthtimeMs: InputMaybe<FieldSelectorEnum>;
  blksize: InputMaybe<FieldSelectorEnum>;
  blocks: InputMaybe<FieldSelectorEnum>;
  changeTime: InputMaybe<FieldSelectorEnum>;
  childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  children: InputMaybe<NodeFieldSelector>;
  childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
  ctime: InputMaybe<FieldSelectorEnum>;
  ctimeMs: InputMaybe<FieldSelectorEnum>;
  dev: InputMaybe<FieldSelectorEnum>;
  dir: InputMaybe<FieldSelectorEnum>;
  ext: InputMaybe<FieldSelectorEnum>;
  extension: InputMaybe<FieldSelectorEnum>;
  gid: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  ino: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  mode: InputMaybe<FieldSelectorEnum>;
  modifiedTime: InputMaybe<FieldSelectorEnum>;
  mtime: InputMaybe<FieldSelectorEnum>;
  mtimeMs: InputMaybe<FieldSelectorEnum>;
  name: InputMaybe<FieldSelectorEnum>;
  nlink: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  prettySize: InputMaybe<FieldSelectorEnum>;
  publicURL: InputMaybe<FieldSelectorEnum>;
  rdev: InputMaybe<FieldSelectorEnum>;
  relativeDirectory: InputMaybe<FieldSelectorEnum>;
  relativePath: InputMaybe<FieldSelectorEnum>;
  root: InputMaybe<FieldSelectorEnum>;
  size: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  uid: InputMaybe<FieldSelectorEnum>;
};

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  absolutePath: InputMaybe<SortOrderEnum>;
  accessTime: InputMaybe<SortOrderEnum>;
  atime: InputMaybe<SortOrderEnum>;
  atimeMs: InputMaybe<SortOrderEnum>;
  base: InputMaybe<SortOrderEnum>;
  birthTime: InputMaybe<SortOrderEnum>;
  birthtime: InputMaybe<SortOrderEnum>;
  birthtimeMs: InputMaybe<SortOrderEnum>;
  blksize: InputMaybe<SortOrderEnum>;
  blocks: InputMaybe<SortOrderEnum>;
  changeTime: InputMaybe<SortOrderEnum>;
  childImageSharp: InputMaybe<ImageSharpSortInput>;
  children: InputMaybe<NodeSortInput>;
  childrenImageSharp: InputMaybe<ImageSharpSortInput>;
  ctime: InputMaybe<SortOrderEnum>;
  ctimeMs: InputMaybe<SortOrderEnum>;
  dev: InputMaybe<SortOrderEnum>;
  dir: InputMaybe<SortOrderEnum>;
  ext: InputMaybe<SortOrderEnum>;
  extension: InputMaybe<SortOrderEnum>;
  gid: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  ino: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  mode: InputMaybe<SortOrderEnum>;
  modifiedTime: InputMaybe<SortOrderEnum>;
  mtime: InputMaybe<SortOrderEnum>;
  mtimeMs: InputMaybe<SortOrderEnum>;
  name: InputMaybe<SortOrderEnum>;
  nlink: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  prettySize: InputMaybe<SortOrderEnum>;
  publicURL: InputMaybe<SortOrderEnum>;
  rdev: InputMaybe<SortOrderEnum>;
  relativeDirectory: InputMaybe<SortOrderEnum>;
  relativePath: InputMaybe<SortOrderEnum>;
  root: InputMaybe<SortOrderEnum>;
  size: InputMaybe<SortOrderEnum>;
  sourceInstanceName: InputMaybe<SortOrderEnum>;
  uid: InputMaybe<SortOrderEnum>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq: InputMaybe<Scalars['GatsbyImageData']>;
  in: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  ne: InputMaybe<Scalars['GatsbyImageData']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type GatsbyImageFormat = 'AUTO' | 'AVIF' | 'JPG' | 'NO_CHANGE' | 'PNG' | 'WEBP';

export type GatsbyImageLayout = 'CONSTRAINED' | 'FIXED' | 'FULL_WIDTH';

export type GatsbyImagePlaceholder = 'BLURRED' | 'DOMINANT_COLOR' | 'NONE' | 'TRACED_SVG';

export type HomeBrandItem = {
  alt: Scalars['String'];
  logo: Scalars['String'];
  name: Scalars['String'];
};

export type HomeBrandItemFieldSelector = {
  alt: InputMaybe<FieldSelectorEnum>;
  logo: InputMaybe<FieldSelectorEnum>;
  name: InputMaybe<FieldSelectorEnum>;
};

export type HomeBrandItemFilterInput = {
  alt: InputMaybe<StringQueryOperatorInput>;
  logo: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
};

export type HomeBrandItemFilterListInput = {
  elemMatch: InputMaybe<HomeBrandItemFilterInput>;
};

export type HomeBrandItemSortInput = {
  alt: InputMaybe<SortOrderEnum>;
  logo: InputMaybe<SortOrderEnum>;
  name: InputMaybe<SortOrderEnum>;
};

export type HomeBrands = {
  items: Array<HomeBrandItem>;
  title: Scalars['String'];
};

export type HomeBrandsFieldSelector = {
  items: InputMaybe<HomeBrandItemFieldSelector>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type HomeBrandsFilterInput = {
  items: InputMaybe<HomeBrandItemFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type HomeBrandsSortInput = {
  items: InputMaybe<HomeBrandItemSortInput>;
  title: InputMaybe<SortOrderEnum>;
};

export type HomeButton = {
  isExternal: Maybe<Scalars['Boolean']>;
  link: Scalars['String'];
  phoneNumber: Maybe<Scalars['String']>;
  text: Scalars['String'];
  type: Maybe<Scalars['String']>;
};

export type HomeButtonFieldSelector = {
  isExternal: InputMaybe<FieldSelectorEnum>;
  link: InputMaybe<FieldSelectorEnum>;
  phoneNumber: InputMaybe<FieldSelectorEnum>;
  text: InputMaybe<FieldSelectorEnum>;
  type: InputMaybe<FieldSelectorEnum>;
};

export type HomeButtonFilterInput = {
  isExternal: InputMaybe<BooleanQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  phoneNumber: InputMaybe<StringQueryOperatorInput>;
  text: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type HomeButtonFilterListInput = {
  elemMatch: InputMaybe<HomeButtonFilterInput>;
};

export type HomeButtonSortInput = {
  isExternal: InputMaybe<SortOrderEnum>;
  link: InputMaybe<SortOrderEnum>;
  phoneNumber: InputMaybe<SortOrderEnum>;
  text: InputMaybe<SortOrderEnum>;
  type: InputMaybe<SortOrderEnum>;
};

export type HomeCallToAction = {
  buttons: Array<HomeButton>;
  title: Scalars['String'];
};

export type HomeCallToActionFieldSelector = {
  buttons: InputMaybe<HomeButtonFieldSelector>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type HomeCallToActionFilterInput = {
  buttons: InputMaybe<HomeButtonFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type HomeCallToActionSortInput = {
  buttons: InputMaybe<HomeButtonSortInput>;
  title: InputMaybe<SortOrderEnum>;
};

export type HomeHero = {
  cta: HomeButton;
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type HomeHeroFieldSelector = {
  cta: InputMaybe<HomeButtonFieldSelector>;
  subtitle: InputMaybe<FieldSelectorEnum>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type HomeHeroFilterInput = {
  cta: InputMaybe<HomeButtonFilterInput>;
  subtitle: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type HomeHeroSortInput = {
  cta: InputMaybe<HomeButtonSortInput>;
  subtitle: InputMaybe<SortOrderEnum>;
  title: InputMaybe<SortOrderEnum>;
};

export type HomeJson = Node & {
  brands: HomeBrands;
  callToAction: HomeCallToAction;
  children: Array<Node>;
  hero: HomeHero;
  id: Scalars['ID'];
  internal: Internal;
  needs: HomeNeeds;
  parent: Maybe<Node>;
  services: HomeServices;
  testimonials: HomeTestimonials;
};

export type HomeJsonConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<HomeJsonEdge>;
  group: Array<HomeJsonGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<HomeJson>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type HomeJsonConnectionDistinctArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonConnectionGroupArgs = {
  field: HomeJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<HomeJson>;
  node: HomeJson;
  previous: Maybe<HomeJson>;
};

export type HomeJsonFieldSelector = {
  brands: InputMaybe<HomeBrandsFieldSelector>;
  callToAction: InputMaybe<HomeCallToActionFieldSelector>;
  children: InputMaybe<NodeFieldSelector>;
  hero: InputMaybe<HomeHeroFieldSelector>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  needs: InputMaybe<HomeNeedsFieldSelector>;
  parent: InputMaybe<NodeFieldSelector>;
  services: InputMaybe<HomeServicesFieldSelector>;
  testimonials: InputMaybe<HomeTestimonialsFieldSelector>;
};

export type HomeJsonFilterInput = {
  brands: InputMaybe<HomeBrandsFilterInput>;
  callToAction: InputMaybe<HomeCallToActionFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  hero: InputMaybe<HomeHeroFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  needs: InputMaybe<HomeNeedsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  services: InputMaybe<HomeServicesFilterInput>;
  testimonials: InputMaybe<HomeTestimonialsFilterInput>;
};

export type HomeJsonGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<HomeJsonEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<HomeJsonGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<HomeJson>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type HomeJsonGroupConnectionDistinctArgs = {
  field: HomeJsonFieldSelector;
};

export type HomeJsonGroupConnectionGroupArgs = {
  field: HomeJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  brands: InputMaybe<HomeBrandsSortInput>;
  callToAction: InputMaybe<HomeCallToActionSortInput>;
  children: InputMaybe<NodeSortInput>;
  hero: InputMaybe<HomeHeroSortInput>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  needs: InputMaybe<HomeNeedsSortInput>;
  parent: InputMaybe<NodeSortInput>;
  services: InputMaybe<HomeServicesSortInput>;
  testimonials: InputMaybe<HomeTestimonialsSortInput>;
};

export type HomeNeedItem = {
  link: Scalars['String'];
  question: Scalars['String'];
  solution: Scalars['String'];
};

export type HomeNeedItemFieldSelector = {
  link: InputMaybe<FieldSelectorEnum>;
  question: InputMaybe<FieldSelectorEnum>;
  solution: InputMaybe<FieldSelectorEnum>;
};

export type HomeNeedItemFilterInput = {
  link: InputMaybe<StringQueryOperatorInput>;
  question: InputMaybe<StringQueryOperatorInput>;
  solution: InputMaybe<StringQueryOperatorInput>;
};

export type HomeNeedItemFilterListInput = {
  elemMatch: InputMaybe<HomeNeedItemFilterInput>;
};

export type HomeNeedItemSortInput = {
  link: InputMaybe<SortOrderEnum>;
  question: InputMaybe<SortOrderEnum>;
  solution: InputMaybe<SortOrderEnum>;
};

export type HomeNeeds = {
  items: Array<HomeNeedItem>;
  title: Scalars['String'];
};

export type HomeNeedsFieldSelector = {
  items: InputMaybe<HomeNeedItemFieldSelector>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type HomeNeedsFilterInput = {
  items: InputMaybe<HomeNeedItemFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type HomeNeedsSortInput = {
  items: InputMaybe<HomeNeedItemSortInput>;
  title: InputMaybe<SortOrderEnum>;
};

export type HomeServiceItem = {
  description: Scalars['String'];
  icon: Scalars['String'];
  link: Scalars['String'];
  title: Scalars['String'];
};

export type HomeServiceItemFieldSelector = {
  description: InputMaybe<FieldSelectorEnum>;
  icon: InputMaybe<FieldSelectorEnum>;
  link: InputMaybe<FieldSelectorEnum>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type HomeServiceItemFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<StringQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type HomeServiceItemFilterListInput = {
  elemMatch: InputMaybe<HomeServiceItemFilterInput>;
};

export type HomeServiceItemSortInput = {
  description: InputMaybe<SortOrderEnum>;
  icon: InputMaybe<SortOrderEnum>;
  link: InputMaybe<SortOrderEnum>;
  title: InputMaybe<SortOrderEnum>;
};

export type HomeServices = {
  items: Array<HomeServiceItem>;
  title: Scalars['String'];
};

export type HomeServicesFieldSelector = {
  items: InputMaybe<HomeServiceItemFieldSelector>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type HomeServicesFilterInput = {
  items: InputMaybe<HomeServiceItemFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type HomeServicesSortInput = {
  items: InputMaybe<HomeServiceItemSortInput>;
  title: InputMaybe<SortOrderEnum>;
};

export type HomeTestimonialItem = {
  author: Scalars['String'];
  company: Scalars['String'];
  quote: Scalars['String'];
  result: Scalars['String'];
};

export type HomeTestimonialItemFieldSelector = {
  author: InputMaybe<FieldSelectorEnum>;
  company: InputMaybe<FieldSelectorEnum>;
  quote: InputMaybe<FieldSelectorEnum>;
  result: InputMaybe<FieldSelectorEnum>;
};

export type HomeTestimonialItemFilterInput = {
  author: InputMaybe<StringQueryOperatorInput>;
  company: InputMaybe<StringQueryOperatorInput>;
  quote: InputMaybe<StringQueryOperatorInput>;
  result: InputMaybe<StringQueryOperatorInput>;
};

export type HomeTestimonialItemFilterListInput = {
  elemMatch: InputMaybe<HomeTestimonialItemFilterInput>;
};

export type HomeTestimonialItemSortInput = {
  author: InputMaybe<SortOrderEnum>;
  company: InputMaybe<SortOrderEnum>;
  quote: InputMaybe<SortOrderEnum>;
  result: InputMaybe<SortOrderEnum>;
};

export type HomeTestimonials = {
  items: Array<HomeTestimonialItem>;
  title: Scalars['String'];
};

export type HomeTestimonialsFieldSelector = {
  items: InputMaybe<HomeTestimonialItemFieldSelector>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type HomeTestimonialsFilterInput = {
  items: InputMaybe<HomeTestimonialItemFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type HomeTestimonialsSortInput = {
  items: InputMaybe<HomeTestimonialItemSortInput>;
  title: InputMaybe<SortOrderEnum>;
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
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  id: Scalars['ID'];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AvifOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PngOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export type ImageSharpFieldSelector = {
  children: InputMaybe<NodeFieldSelector>;
  fixed: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  original: InputMaybe<ImageSharpOriginalFieldSelector>;
  parent: InputMaybe<NodeFieldSelector>;
  resize: InputMaybe<ImageSharpResizeFieldSelector>;
};

export type ImageSharpFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFieldSelector = {
  aspectRatio: InputMaybe<FieldSelectorEnum>;
  base64: InputMaybe<FieldSelectorEnum>;
  height: InputMaybe<FieldSelectorEnum>;
  originalName: InputMaybe<FieldSelectorEnum>;
  src: InputMaybe<FieldSelectorEnum>;
  srcSet: InputMaybe<FieldSelectorEnum>;
  srcSetWebp: InputMaybe<FieldSelectorEnum>;
  srcWebp: InputMaybe<FieldSelectorEnum>;
  tracedSVG: InputMaybe<FieldSelectorEnum>;
  width: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFixedFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFixedSortInput = {
  aspectRatio: InputMaybe<SortOrderEnum>;
  base64: InputMaybe<SortOrderEnum>;
  height: InputMaybe<SortOrderEnum>;
  originalName: InputMaybe<SortOrderEnum>;
  src: InputMaybe<SortOrderEnum>;
  srcSet: InputMaybe<SortOrderEnum>;
  srcSetWebp: InputMaybe<SortOrderEnum>;
  srcWebp: InputMaybe<SortOrderEnum>;
  tracedSVG: InputMaybe<SortOrderEnum>;
  width: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFieldSelector = {
  aspectRatio: InputMaybe<FieldSelectorEnum>;
  base64: InputMaybe<FieldSelectorEnum>;
  originalImg: InputMaybe<FieldSelectorEnum>;
  originalName: InputMaybe<FieldSelectorEnum>;
  presentationHeight: InputMaybe<FieldSelectorEnum>;
  presentationWidth: InputMaybe<FieldSelectorEnum>;
  sizes: InputMaybe<FieldSelectorEnum>;
  src: InputMaybe<FieldSelectorEnum>;
  srcSet: InputMaybe<FieldSelectorEnum>;
  srcSetWebp: InputMaybe<FieldSelectorEnum>;
  srcWebp: InputMaybe<FieldSelectorEnum>;
  tracedSVG: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  originalImg: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  presentationHeight: InputMaybe<IntQueryOperatorInput>;
  presentationWidth: InputMaybe<IntQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidSortInput = {
  aspectRatio: InputMaybe<SortOrderEnum>;
  base64: InputMaybe<SortOrderEnum>;
  originalImg: InputMaybe<SortOrderEnum>;
  originalName: InputMaybe<SortOrderEnum>;
  presentationHeight: InputMaybe<SortOrderEnum>;
  presentationWidth: InputMaybe<SortOrderEnum>;
  sizes: InputMaybe<SortOrderEnum>;
  src: InputMaybe<SortOrderEnum>;
  srcSet: InputMaybe<SortOrderEnum>;
  srcSetWebp: InputMaybe<SortOrderEnum>;
  srcWebp: InputMaybe<SortOrderEnum>;
  tracedSVG: InputMaybe<SortOrderEnum>;
};

export type ImageSharpGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFieldSelector = {
  height: InputMaybe<FieldSelectorEnum>;
  src: InputMaybe<FieldSelectorEnum>;
  width: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFilterInput = {
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpOriginalSortInput = {
  height: InputMaybe<SortOrderEnum>;
  src: InputMaybe<SortOrderEnum>;
  width: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResize = {
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Int']>;
  originalName: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFieldSelector = {
  aspectRatio: InputMaybe<FieldSelectorEnum>;
  height: InputMaybe<FieldSelectorEnum>;
  originalName: InputMaybe<FieldSelectorEnum>;
  src: InputMaybe<FieldSelectorEnum>;
  tracedSVG: InputMaybe<FieldSelectorEnum>;
  width: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpResizeSortInput = {
  aspectRatio: InputMaybe<SortOrderEnum>;
  height: InputMaybe<SortOrderEnum>;
  originalName: InputMaybe<SortOrderEnum>;
  src: InputMaybe<SortOrderEnum>;
  tracedSVG: InputMaybe<SortOrderEnum>;
  width: InputMaybe<SortOrderEnum>;
};

export type ImageSharpSortInput = {
  children: InputMaybe<NodeSortInput>;
  fixed: InputMaybe<ImageSharpFixedSortInput>;
  fluid: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  original: InputMaybe<ImageSharpOriginalSortInput>;
  parent: InputMaybe<NodeSortInput>;
  resize: InputMaybe<ImageSharpResizeSortInput>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  contentFilePath: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFieldSelector = {
  content: InputMaybe<FieldSelectorEnum>;
  contentDigest: InputMaybe<FieldSelectorEnum>;
  contentFilePath: InputMaybe<FieldSelectorEnum>;
  description: InputMaybe<FieldSelectorEnum>;
  fieldOwners: InputMaybe<FieldSelectorEnum>;
  ignoreType: InputMaybe<FieldSelectorEnum>;
  mediaType: InputMaybe<FieldSelectorEnum>;
  owner: InputMaybe<FieldSelectorEnum>;
  type: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  contentFilePath: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  content: InputMaybe<SortOrderEnum>;
  contentDigest: InputMaybe<SortOrderEnum>;
  contentFilePath: InputMaybe<SortOrderEnum>;
  description: InputMaybe<SortOrderEnum>;
  fieldOwners: InputMaybe<SortOrderEnum>;
  ignoreType: InputMaybe<SortOrderEnum>;
  mediaType: InputMaybe<SortOrderEnum>;
  owner: InputMaybe<SortOrderEnum>;
  type: InputMaybe<SortOrderEnum>;
};

export type JpgOptions = {
  progressive: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne: InputMaybe<Scalars['JSON']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFieldSelector = {
  children: InputMaybe<NodeFieldSelector>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  parent: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  children: InputMaybe<NodeSortInput>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  parent: InputMaybe<NodeSortInput>;
};

export type PngOptions = {
  compressionSpeed: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PortfolioProject = Node & {
  children: Array<Node>;
  description: Scalars['String'];
  githubUrl: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  internal: Internal;
  liveUrl: Scalars['String'];
  parent: Maybe<Node>;
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type PortfolioProjectConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PortfolioProjectEdge>;
  group: Array<PortfolioProjectGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<PortfolioProject>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PortfolioProjectConnectionDistinctArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectConnectionGroupArgs = {
  field: PortfolioProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<PortfolioProject>;
  node: PortfolioProject;
  previous: Maybe<PortfolioProject>;
};

export type PortfolioProjectFieldSelector = {
  children: InputMaybe<NodeFieldSelector>;
  description: InputMaybe<FieldSelectorEnum>;
  githubUrl: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  image: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  liveUrl: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  slug: InputMaybe<FieldSelectorEnum>;
  tags: InputMaybe<FieldSelectorEnum>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type PortfolioProjectFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  githubUrl: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  liveUrl: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type PortfolioProjectGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PortfolioProjectEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<PortfolioProjectGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<PortfolioProject>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PortfolioProjectGroupConnectionDistinctArgs = {
  field: PortfolioProjectFieldSelector;
};

export type PortfolioProjectGroupConnectionGroupArgs = {
  field: PortfolioProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  children: InputMaybe<NodeSortInput>;
  description: InputMaybe<SortOrderEnum>;
  githubUrl: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  image: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  liveUrl: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  slug: InputMaybe<SortOrderEnum>;
  tags: InputMaybe<SortOrderEnum>;
  title: InputMaybe<SortOrderEnum>;
};

export type Potrace = {
  alphaMax: InputMaybe<Scalars['Float']>;
  background: InputMaybe<Scalars['String']>;
  blackOnWhite: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['String']>;
  optCurve: InputMaybe<Scalars['Boolean']>;
  optTolerance: InputMaybe<Scalars['Float']>;
  threshold: InputMaybe<Scalars['Int']>;
  turdSize: InputMaybe<Scalars['Float']>;
  turnPolicy: InputMaybe<PotraceTurnPolicy>;
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
  description: Scalars['String'];
  githubUrl: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Scalars['String'];
  internal: Internal;
  liveUrl: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type ProjectConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ProjectEdge>;
  group: Array<ProjectGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ProjectConnectionDistinctArgs = {
  field: ProjectFieldSelector;
};

export type ProjectConnectionGroupArgs = {
  field: ProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Project>;
  node: Project;
  previous: Maybe<Project>;
};

export type ProjectFieldSelector = {
  children: InputMaybe<NodeFieldSelector>;
  description: InputMaybe<FieldSelectorEnum>;
  githubUrl: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  image: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  liveUrl: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  slug: InputMaybe<FieldSelectorEnum>;
  tags: InputMaybe<FieldSelectorEnum>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type ProjectFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  githubUrl: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  liveUrl: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type ProjectGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ProjectEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ProjectGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ProjectGroupConnectionDistinctArgs = {
  field: ProjectFieldSelector;
};

export type ProjectGroupConnectionGroupArgs = {
  field: ProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  children: InputMaybe<NodeSortInput>;
  description: InputMaybe<SortOrderEnum>;
  githubUrl: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  image: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  liveUrl: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  slug: InputMaybe<SortOrderEnum>;
  tags: InputMaybe<SortOrderEnum>;
  title: InputMaybe<SortOrderEnum>;
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
  blogPost: Maybe<BlogPost>;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  homeJson: Maybe<HomeJson>;
  imageSharp: Maybe<ImageSharp>;
  portfolioProject: Maybe<PortfolioProject>;
  project: Maybe<Project>;
  service: Maybe<Service>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
  skill: Maybe<Skill>;
};

export type QueryAllBlogPostArgs = {
  filter: InputMaybe<BlogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<BlogPostSortInput>>>;
};

export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
};

export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<FileSortInput>>>;
};

export type QueryAllHomeJsonArgs = {
  filter: InputMaybe<HomeJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<HomeJsonSortInput>>>;
};

export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
};

export type QueryAllPortfolioProjectArgs = {
  filter: InputMaybe<PortfolioProjectFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<PortfolioProjectSortInput>>>;
};

export type QueryAllProjectArgs = {
  filter: InputMaybe<ProjectFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<ProjectSortInput>>>;
};

export type QueryAllServiceArgs = {
  filter: InputMaybe<ServiceFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<ServiceSortInput>>>;
};

export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
};

export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
};

export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
};

export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
};

export type QueryAllSkillArgs = {
  filter: InputMaybe<SkillFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<SkillSortInput>>>;
};

export type QueryBlogPostArgs = {
  author: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  date: InputMaybe<StringQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type QueryHomeJsonArgs = {
  brands: InputMaybe<HomeBrandsFilterInput>;
  callToAction: InputMaybe<HomeCallToActionFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  hero: InputMaybe<HomeHeroFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  needs: InputMaybe<HomeNeedsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  services: InputMaybe<HomeServicesFilterInput>;
  testimonials: InputMaybe<HomeTestimonialsFilterInput>;
};

export type QueryImageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryPortfolioProjectArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  githubUrl: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  liveUrl: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type QueryProjectArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  githubUrl: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  liveUrl: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type QueryServiceArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  features: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySkillArgs = {
  category: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  icon: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  level: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type Service = Node & {
  children: Array<Node>;
  description: Scalars['String'];
  features: Maybe<Array<Maybe<Scalars['String']>>>;
  icon: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  title: Scalars['String'];
};

export type ServiceConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ServiceEdge>;
  group: Array<ServiceGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Service>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ServiceConnectionDistinctArgs = {
  field: ServiceFieldSelector;
};

export type ServiceConnectionGroupArgs = {
  field: ServiceFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Service>;
  node: Service;
  previous: Maybe<Service>;
};

export type ServiceFieldSelector = {
  children: InputMaybe<NodeFieldSelector>;
  description: InputMaybe<FieldSelectorEnum>;
  features: InputMaybe<FieldSelectorEnum>;
  icon: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  parent: InputMaybe<NodeFieldSelector>;
  title: InputMaybe<FieldSelectorEnum>;
};

export type ServiceFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  features: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type ServiceGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ServiceEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ServiceGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Service>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ServiceGroupConnectionDistinctArgs = {
  field: ServiceFieldSelector;
};

export type ServiceGroupConnectionGroupArgs = {
  field: ServiceFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  children: InputMaybe<NodeSortInput>;
  description: InputMaybe<SortOrderEnum>;
  features: InputMaybe<SortOrderEnum>;
  icon: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  parent: InputMaybe<NodeSortInput>;
  title: InputMaybe<SortOrderEnum>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  graphqlTypegen: Maybe<Scalars['Boolean']>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  trailingSlash: Maybe<Scalars['String']>;
};

export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime: InputMaybe<FieldSelectorEnum>;
  children: InputMaybe<NodeFieldSelector>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  parent: InputMaybe<NodeFieldSelector>;
};

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  buildTime: InputMaybe<SortOrderEnum>;
  children: InputMaybe<NodeSortInput>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  parent: InputMaybe<NodeSortInput>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime: InputMaybe<FieldSelectorEnum>;
  children: InputMaybe<NodeFieldSelector>;
  graphqlTypegen: InputMaybe<FieldSelectorEnum>;
  host: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  jsxRuntime: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  pathPrefix: InputMaybe<FieldSelectorEnum>;
  polyfill: InputMaybe<FieldSelectorEnum>;
  port: InputMaybe<FieldSelectorEnum>;
  siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  trailingSlash: InputMaybe<FieldSelectorEnum>;
};

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  children: InputMaybe<NodeFieldSelector>;
  functionRoute: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  matchPath: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  pluginName: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  children: InputMaybe<NodeSortInput>;
  functionRoute: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  matchPath: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  pluginName: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  children: InputMaybe<NodeFieldSelector>;
  component: InputMaybe<FieldSelectorEnum>;
  componentChunkName: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  internalComponentName: InputMaybe<FieldSelectorEnum>;
  matchPath: InputMaybe<FieldSelectorEnum>;
  pageContext: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  path: InputMaybe<FieldSelectorEnum>;
  pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  children: InputMaybe<NodeSortInput>;
  component: InputMaybe<SortOrderEnum>;
  componentChunkName: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  internalComponentName: InputMaybe<SortOrderEnum>;
  matchPath: InputMaybe<SortOrderEnum>;
  pageContext: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  path: InputMaybe<SortOrderEnum>;
  pluginCreator: InputMaybe<SitePluginSortInput>;
};

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export type SitePluginFieldSelector = {
  browserAPIs: InputMaybe<FieldSelectorEnum>;
  children: InputMaybe<NodeFieldSelector>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  name: InputMaybe<FieldSelectorEnum>;
  nodeAPIs: InputMaybe<FieldSelectorEnum>;
  packageJson: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
  pluginFilepath: InputMaybe<FieldSelectorEnum>;
  pluginOptions: InputMaybe<FieldSelectorEnum>;
  resolve: InputMaybe<FieldSelectorEnum>;
  ssrAPIs: InputMaybe<FieldSelectorEnum>;
  version: InputMaybe<FieldSelectorEnum>;
};

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  browserAPIs: InputMaybe<SortOrderEnum>;
  children: InputMaybe<NodeSortInput>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  name: InputMaybe<SortOrderEnum>;
  nodeAPIs: InputMaybe<SortOrderEnum>;
  packageJson: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  pluginFilepath: InputMaybe<SortOrderEnum>;
  pluginOptions: InputMaybe<SortOrderEnum>;
  resolve: InputMaybe<SortOrderEnum>;
  ssrAPIs: InputMaybe<SortOrderEnum>;
  version: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadata = {
  author: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  pageMetadata: Maybe<SiteSiteMetadataPageMetadata>;
  siteUrl: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  twitterUsername: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFieldSelector = {
  author: InputMaybe<FieldSelectorEnum>;
  description: InputMaybe<FieldSelectorEnum>;
  image: InputMaybe<FieldSelectorEnum>;
  pageMetadata: InputMaybe<SiteSiteMetadataPageMetadataFieldSelector>;
  siteUrl: InputMaybe<FieldSelectorEnum>;
  title: InputMaybe<FieldSelectorEnum>;
  twitterUsername: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataFilterInput = {
  author: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  pageMetadata: InputMaybe<SiteSiteMetadataPageMetadataFilterInput>;
  siteUrl: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  twitterUsername: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadata = {
  about: Maybe<SiteSiteMetadataPageMetadataAbout>;
  contact: Maybe<SiteSiteMetadataPageMetadataContact>;
  home: Maybe<SiteSiteMetadataPageMetadataHome>;
  portfolio: Maybe<SiteSiteMetadataPageMetadataPortfolio>;
  services: Maybe<SiteSiteMetadataPageMetadataServices>;
};

export type SiteSiteMetadataPageMetadataAbout = {
  description: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataPageMetadataAboutFieldSelector = {
  description: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataAboutFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataAboutSortInput = {
  description: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataContact = {
  description: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataPageMetadataContactFieldSelector = {
  description: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataContactFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataContactSortInput = {
  description: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataFieldSelector = {
  about: InputMaybe<SiteSiteMetadataPageMetadataAboutFieldSelector>;
  contact: InputMaybe<SiteSiteMetadataPageMetadataContactFieldSelector>;
  home: InputMaybe<SiteSiteMetadataPageMetadataHomeFieldSelector>;
  portfolio: InputMaybe<SiteSiteMetadataPageMetadataPortfolioFieldSelector>;
  services: InputMaybe<SiteSiteMetadataPageMetadataServicesFieldSelector>;
};

export type SiteSiteMetadataPageMetadataFilterInput = {
  about: InputMaybe<SiteSiteMetadataPageMetadataAboutFilterInput>;
  contact: InputMaybe<SiteSiteMetadataPageMetadataContactFilterInput>;
  home: InputMaybe<SiteSiteMetadataPageMetadataHomeFilterInput>;
  portfolio: InputMaybe<SiteSiteMetadataPageMetadataPortfolioFilterInput>;
  services: InputMaybe<SiteSiteMetadataPageMetadataServicesFilterInput>;
};

export type SiteSiteMetadataPageMetadataHome = {
  description: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataPageMetadataHomeFieldSelector = {
  description: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataHomeFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataHomeSortInput = {
  description: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataPortfolio = {
  description: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataPageMetadataPortfolioFieldSelector = {
  description: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataPortfolioFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataPortfolioSortInput = {
  description: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataServices = {
  description: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataPageMetadataServicesFieldSelector = {
  description: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataPageMetadataServicesFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPageMetadataServicesSortInput = {
  description: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadataPageMetadataSortInput = {
  about: InputMaybe<SiteSiteMetadataPageMetadataAboutSortInput>;
  contact: InputMaybe<SiteSiteMetadataPageMetadataContactSortInput>;
  home: InputMaybe<SiteSiteMetadataPageMetadataHomeSortInput>;
  portfolio: InputMaybe<SiteSiteMetadataPageMetadataPortfolioSortInput>;
  services: InputMaybe<SiteSiteMetadataPageMetadataServicesSortInput>;
};

export type SiteSiteMetadataSortInput = {
  author: InputMaybe<SortOrderEnum>;
  description: InputMaybe<SortOrderEnum>;
  image: InputMaybe<SortOrderEnum>;
  pageMetadata: InputMaybe<SiteSiteMetadataPageMetadataSortInput>;
  siteUrl: InputMaybe<SortOrderEnum>;
  title: InputMaybe<SortOrderEnum>;
  twitterUsername: InputMaybe<SortOrderEnum>;
};

export type SiteSortInput = {
  buildTime: InputMaybe<SortOrderEnum>;
  children: InputMaybe<NodeSortInput>;
  graphqlTypegen: InputMaybe<SortOrderEnum>;
  host: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  jsxRuntime: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
  pathPrefix: InputMaybe<SortOrderEnum>;
  polyfill: InputMaybe<SortOrderEnum>;
  port: InputMaybe<SortOrderEnum>;
  siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  trailingSlash: InputMaybe<SortOrderEnum>;
};

export type Skill = Node & {
  category: Scalars['String'];
  children: Array<Node>;
  icon: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  level: Scalars['Int'];
  name: Scalars['String'];
  parent: Maybe<Node>;
};

export type SkillConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SkillEdge>;
  group: Array<SkillGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Skill>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SkillConnectionDistinctArgs = {
  field: SkillFieldSelector;
};

export type SkillConnectionGroupArgs = {
  field: SkillFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Skill>;
  node: Skill;
  previous: Maybe<Skill>;
};

export type SkillFieldSelector = {
  category: InputMaybe<FieldSelectorEnum>;
  children: InputMaybe<NodeFieldSelector>;
  icon: InputMaybe<FieldSelectorEnum>;
  id: InputMaybe<FieldSelectorEnum>;
  internal: InputMaybe<InternalFieldSelector>;
  level: InputMaybe<FieldSelectorEnum>;
  name: InputMaybe<FieldSelectorEnum>;
  parent: InputMaybe<NodeFieldSelector>;
};

export type SkillFilterInput = {
  category: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  icon: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  level: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type SkillGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SkillEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SkillGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Skill>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SkillGroupConnectionDistinctArgs = {
  field: SkillFieldSelector;
};

export type SkillGroupConnectionGroupArgs = {
  field: SkillFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  category: InputMaybe<SortOrderEnum>;
  children: InputMaybe<NodeSortInput>;
  icon: InputMaybe<SortOrderEnum>;
  id: InputMaybe<SortOrderEnum>;
  internal: InputMaybe<InternalSortInput>;
  level: InputMaybe<SortOrderEnum>;
  name: InputMaybe<SortOrderEnum>;
  parent: InputMaybe<NodeSortInput>;
};

export type SortOrderEnum = 'ASC' | 'DESC';

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit: InputMaybe<ImageFit>;
  grayscale: InputMaybe<Scalars['Boolean']>;
  rotate: InputMaybe<Scalars['Int']>;
  trim: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality: InputMaybe<Scalars['Int']>;
};

export type BrandsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BrandsQueryQuery = {
  allFile: {
    nodes: Array<{ relativePath: string; childImageSharp: { gatsbyImageData: any } | undefined }>;
  };
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteTitleQueryQuery = {
  site:
    | {
        siteMetadata:
          | {
              title: string | undefined;
              description: string | undefined;
              author: string | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type SeoQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQueryQuery = {
  site:
    | {
        siteMetadata:
          | {
              title: string | undefined;
              description: string | undefined;
              author: string | undefined;
              siteUrl: string | undefined;
            }
          | undefined;
      }
    | undefined;
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
  slug: Scalars['String'];
}>;

export type BlogPostBySlugQuery = {
  blogPost:
    | {
        id: string;
        title: string;
        date: string;
        author: string;
        content: string;
        excerpt: string;
        tags: Array<string>;
        slug: string;
      }
    | undefined;
};

export type ProjectTemplateQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type ProjectTemplateQueryQuery = {
  portfolioProject:
    | {
        id: string;
        title: string;
        description: string;
        image: string;
        tags: Array<string>;
        githubUrl: string;
        liveUrl: string;
        slug: string;
      }
    | undefined;
};
