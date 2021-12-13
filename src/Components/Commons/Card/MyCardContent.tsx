import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  BoxCardStyle,
  CardContentStyle,
  CardMediaStyle,
  CardStyle,
} from "../Styleds/CardSkeletonStyles";

export interface IMyCardContentProps {
  imageUrl: string;
  title: string;
  alt: string;
}

export function MyCardContent(props: IMyCardContentProps) {
  const { imageUrl, title, alt } = props;

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card sx={CardStyle} elevation={0}>
        <Box sx={BoxCardStyle}>
          <CardMedia
            sx={CardMediaStyle}
            component="img"
            image={imageUrl}
            alt={alt}
            title={title}
          />
        </Box>

        <CardContent sx={CardContentStyle}>
          <Typography variant="body1" color="#d1dffb">
            Laborum tempor id duis exercitation do enim sint enim dolore anim
            Lorem laborum cillum nulla. Sint enim anim nulla cillum et eiusmod
            nisi. Officia ad est magna irure aliquip ullamco magna ut commodo
            laborum. Officia veniam ea pariatur qui adipisicing ea nulla eu duis
            quis consequat laboris exercitation do. Sint cupidatat cillum velit
            ex voluptate ad enim voluptate sint do enim excepteur est.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
