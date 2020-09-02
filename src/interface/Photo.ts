export class Photo {
  id: number;
  title: string;
  postContent: string;
  createdTime: Date;
  modifiedTime: Date;
}

export interface PhotoResult {
  id: number;
  title: string;
  postContent: string;
  createdTime: Date;
  modifiedTime: Date;
}
