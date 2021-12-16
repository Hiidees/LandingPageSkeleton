export const ContainerImageContactStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "block" : " none",
    };
  },
} as const;

export const ContainerSkeletonContactStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "none" : " block",
    };
  },
} as const;
