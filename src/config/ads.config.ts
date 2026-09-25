/**
 * Configuration publicitaire Revive Adserver pour le domaine noteimmo.com
 * Source : Inventaire ads.les4h.fr (Affiliate ID 114)
 */

export interface AdZoneConfig {
  zoneId: number;
  format: 'leaderboard' | 'mediumRectangle' | 'mobileBanner' | 'largeRectangle' | 'halfPage' | 'skyscraper';
  width: number;
  height: number;
  name: string;
}

export type AdSlotKey =
  | 'header'
  | 'inContent'
  | 'mobileSticky'
  | 'largeRectangle'
  | 'halfPage'
  | 'skyscraper';

export interface DomainAdsConfig {
  domain: string;
  affiliateId: number;
  reviveId: string;
  scriptUrl: string;
  zones: Record<AdSlotKey, AdZoneConfig>;
}

export const adsConfig: DomainAdsConfig = {
  domain: 'noteimmo.com',
  affiliateId: 114,
  reviveId: 'ac119b122a644588953c74c4c1daee06',
  scriptUrl: '//ads.les4h.fr/www/delivery/asyncjs.php',
  zones: {
    header: {
      zoneId: 684,
      format: 'leaderboard',
      width: 728,
      height: 90,
      name: 'Leaderboard 728x90',
    },
    inContent: {
      zoneId: 685,
      format: 'mediumRectangle',
      width: 300,
      height: 250,
      name: 'Medium Rectangle 300x250',
    },
    mobileSticky: {
      zoneId: 686,
      format: 'mobileBanner',
      width: 320,
      height: 100,
      name: 'Mobile Banner 320x100',
    },
    largeRectangle: {
      zoneId: 683,
      format: 'largeRectangle',
      width: 336,
      height: 280,
      name: 'Large Rectangle 336x280',
    },
    halfPage: {
      zoneId: 682,
      format: 'halfPage',
      width: 300,
      height: 600,
      name: 'Half Page 300x600',
    },
    skyscraper: {
      zoneId: 687,
      format: 'skyscraper',
      width: 160,
      height: 600,
      name: 'Skyscraper 160x600',
    },
  },
};

export default adsConfig;
