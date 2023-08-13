import { type } from "os";

interface WorkshopDetail {
  start: string;
  end: string;
  duration: string;
  timing: string;
  size: number;
}

export type WorkshopData = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  registration_link: string;
  status: string;
  thumbnail: string;
  content: string;
  detail: WorkshopDetail;
};
