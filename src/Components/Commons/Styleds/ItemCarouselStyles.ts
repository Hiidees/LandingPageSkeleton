//Carousel Item Region

export const CardCarouselStyle = {
  background: "transparent",
} as const;

export const ContainerImageCarouselStyle = {
  container: (refresh: boolean) => {
    return {
      display: refresh ? "block" : " none",
    };
  },
} as const;

export const ContainerSkeletonCarouselStyle = {
  container: (refresh: boolean) => {
    return {
      display: refresh ? "none" : " block",
    };
  },
} as const;

export const GridCarouselStyle = {
  justifyContent: "center",
} as const;

export const BoxCarouselStyle = {
  maxHeight: { xs: 400, md: 500 },
  maxWidth: { xs: 400, md: 500 },
} as const;

export const SkeletonCarouselStyle = {
  margin: { xs: "0 auto" },
  borderRadius: 5,
} as const;

export const NavButtonsWrapperCarouselStyle = {
  marginLeft: 40,
} as const;

export const NavButtonsCarouselStyle = {
  background: "transparent",
  color: "black",
} as const;

//end Carousel Item Region
