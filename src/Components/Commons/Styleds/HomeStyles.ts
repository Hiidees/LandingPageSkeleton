// Home Region
export const ContainerImageHomeStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "block" : " none",
    };
  },
} as const;

export const ContainerSkeletonHomeStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "none" : " block",
    };
  },
} as const;

//end Home Region
