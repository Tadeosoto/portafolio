"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const ROUTE_SEO_KEY = {
  "/": "home",
  "/sobremi": "about",
  "/servicios": "services",
  "/proyectos": "work",
  "/contacto": "contact",
  "/testimonials": "testimonials",
};

function buildLocalizedPath(locale, pathname, defaultLocale) {
  if (locale === defaultLocale) {
    return pathname || "/";
  }
  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

function absoluteUrl(siteUrl, path) {
  if (!siteUrl) return "";
  const base = siteUrl.replace(/\/$/, "");
  const p = path === "/" ? "" : path;
  return `${base}${p}`;
}

const Seo = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";

  const pathname = router.pathname || "/";
  const pageKey = ROUTE_SEO_KEY[pathname] || "home";
  const siteName = t("seo.siteName");
  const pageTitle = t(`seo.pages.${pageKey}.title`);
  const pageDescription = t(`seo.pages.${pageKey}.description`);
  const fullTitle = `${pageTitle} | ${siteName}`;

  const defaultLocale = router.defaultLocale || "en";
  const locale = router.locale || defaultLocale;
  const canonicalPath = buildLocalizedPath(locale, pathname, defaultLocale);
  const canonical = absoluteUrl(siteUrl, canonicalPath);

  const ogLocale = locale === "es" ? "es_MX" : "en_US";
  const alternateLocales = (router.locales || ["en", "es"]).map((loc) => ({
    hrefLang: loc === "es" ? "es-MX" : "en-US",
    href: absoluteUrl(
      siteUrl,
      buildLocalizedPath(loc, pathname, defaultLocale)
    ),
  }));

  const defaultAlternateHref = absoluteUrl(
    siteUrl,
    buildLocalizedPath(defaultLocale, pathname, defaultLocale)
  );

  const jsonLd =
    siteUrl && pageKey === "home"
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tadeo Soto",
          url: absoluteUrl(siteUrl, buildLocalizedPath(defaultLocale, "/", defaultLocale)),
          sameAs: [
            "https://github.com/Tadeosoto",
            "https://www.linkedin.com/in/tadeo-soto/",
          ],
        }
      : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content={ogLocale} />
      {locale === "en" ? (
        <meta property="og:locale:alternate" content="es_MX" />
      ) : (
        <meta property="og:locale:alternate" content="en_US" />
      )}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {canonical ? (
        <>
          <meta property="og:image" content={`${siteUrl}/logoTadeoSoto.png`} />
          <meta property="og:image:width" content="378" />
          <meta property="og:image:height" content="140" />
          <meta name="twitter:image" content={`${siteUrl}/logoTadeoSoto.png`} />
        </>
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />

      {alternateLocales.map(
        (alt) =>
          alt.href && (
            <link
              key={alt.hrefLang}
              rel="alternate"
              hrefLang={alt.hrefLang}
              href={alt.href}
            />
          )
      )}
      {defaultAlternateHref ? (
        <link rel="alternate" hrefLang="x-default" href={defaultAlternateHref} />
      ) : null}

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
};

export default Seo;
