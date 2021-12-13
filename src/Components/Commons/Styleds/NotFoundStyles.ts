//Not Found Region
export const ContainerImageNotFoundStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "block" : " none",
    };
  },
} as const;

export const GridNotFoundStyle = {
  justifyContent: "center",
} as const;

export const BoxNotFoundStyle = {
  maxHeight: { xs: 400, md: 500 },
  maxWidth: { xs: 400, md: 500 },
} as const;

export const ContainerSkeletonNotFoundStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "none" : " block",
    };
  },
} as const;

export const SkeletonNotFoundStyle = {
  margin: { xs: "0 auto" },
  borderRadius: 5,
} as const;
//end Not Found Region
