"use client";

import { useTranslation } from "next-i18next";

const SkipToContent = () => {
  const { t } = useTranslation("common");

  return (
    <a
      href="#main-content"
      className="fixed left-4 top-0 z-[200] -translate-y-full rounded-b bg-accent px-4 py-3 text-sm font-medium text-white shadow transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
    >
      {t("seo.skipToContent")}
    </a>
  );
};

export default SkipToContent;
