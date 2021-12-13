// Other Project Region
export const ContainerImageOtherProjectStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "block" : " none",
    };
  },
} as const;

export const ContainerSkeletonOtherProjectStyle = {
  container: (refresh: any) => {
    return {
      display: refresh ? "none" : " block",
    };
  },
} as const;

//end Other Project Region
