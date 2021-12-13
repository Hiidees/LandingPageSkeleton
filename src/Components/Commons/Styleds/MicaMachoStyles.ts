export const ContainerImageMicaMachoStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "block" : " none",
    };
  },
} as const;

export const ContainerSkeletonMicaMachoStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "none" : " block",
    };
  },
} as const;
