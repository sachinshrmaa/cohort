import { type } from "os";

interface BootcampContent {
  body: string;
  modules: {
    [key: string]: string;
  };
}

interface BootcampDetail {
  start: string;
  end: string;
  duration: string;
  timing: string;
  size: number;
}

export type BootcampData = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  content: BootcampContent;
  detail: BootcampDetail;
};
