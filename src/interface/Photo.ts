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

export interface PhotoService {
  getPhoto(id: number): Promise<PhotoResult>;
  getPhotoAll(): Promise<PhotoResult>;
  setPhoto(options: Photo): Promise<PhotoResult>;
  delPhoto(id: number): Promise<PhotoResult>;
}
