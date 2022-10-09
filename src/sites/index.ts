import Etsy from "./etsy";
import { Site } from "./site";

export type RegisteredSite = "www.etsy.com";

const sites: Record<RegisteredSite, Site> = {
  "www.etsy.com": Etsy,
};

export default sites;
