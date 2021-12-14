// Card Region
export const CardStyle = {
  background: "transparent",
  display: { xs: "block", sm: "flex" },
} as const;

export const BoxCardStyle = {
  display: "block",
  flexDirection: "column",
} as const;

export const CardMediaStyle = {
  width: 200,
  margin: { xs: "0 auto" },
} as const;

export const CardContentStyle = {
  marginTop: 5,
} as const;

//end Card Region

// Skeleton Region

export const LineSkeletonStyle = {
  marginBottom: 5,
  margin: { xs: "0 auto" },
  width: 600,
} as const;

export const ImageSkeletonStyle = {
  margin: { xs: "0 auto" },
  borderRadius: 5,
} as const;

export const GridSkeletonStyle = {
  marginBottom: 2,
} as const;

// end Region
