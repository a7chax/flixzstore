import { NextSeo } from "next-seo";

export const SEO = (props) => {
  <NextSeo
    title=""
    description=""
    openGraph={{
      url: "",
      title: "",
      description:
        "",
      images: [
        {
          url: "",
        },
      ],
      site_name: "",
    }}
    twitter={{
      handle: "",
      site: "",
      cardType: "summary_large_image",
    }}
    {...props}
  />
}