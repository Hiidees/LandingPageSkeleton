import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BoxMedia, MyCard, MyCardContent, MyCardMedia } from "./CardStyles";

export interface IMyCardContentProps {
  imageUrl: string;
  title: string;
  alt: string;
}

export function CardContent(props: IMyCardContentProps) {
  const { imageUrl, title, alt } = props;

  return (
    <Grid item xs={12} sm={12} md={12}>
      <MyCard sx={{ display: { xs: "block", sm: "flex" } }} elevation={0}>
        <BoxMedia>
          <MyCardMedia
            sx={{ margin: { xs: "0 auto" } }}
            component="img"
            image={imageUrl}
            alt={alt}
            title={title}
          />
        </BoxMedia>

        <MyCardContent>
          <Typography variant="body1" color="#d1dffb">
            Laborum tempor id duis exercitation do enim sint enim dolore anim
            Lorem laborum cillum nulla. Sint enim anim nulla cillum et eiusmod
            nisi. Officia ad est magna irure aliquip ullamco magna ut commodo
            laborum. Officia veniam ea pariatur qui adipisicing ea nulla eu duis
            quis consequat laboris exercitation do. Sint cupidatat cillum velit
            ex voluptate ad enim voluptate sint do enim excepteur est.
          </Typography>
        </MyCardContent>
      </MyCard>
    </Grid>
  );
}
