import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Testimonials = () => {
  return <div>Testimonials</div>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Testimonials;
