import { Typography } from "@mui/material";

/* 
    variant - type of text you want eg. h1, h2 , h3
    component - assigned customize will turn variant into specific variant eg. h5 will  be h1 in dom
    gutter bottom - adds space at the bottom based on variant "size"
*/

export const MaterialTypography = () => {
  return (
    <div>
      <div>MaterialTypography</div>

      <Typography variant="h1" gutterBottom>
        Variants h1 to h6
      </Typography>
      <Typography variant="h1">Variant H1</Typography>
      <Typography variant="h2">Variant H2</Typography>
      <Typography variant="h3">Variant H3</Typography>
      <Typography variant="h4">Variant H4</Typography>
      <Typography variant="h5" component="h1">
        Variant H5
      </Typography>
      <Typography variant="h6" gutterBottom>
        Variant H6
      </Typography>

      <Typography variant="subtitle1">Subtitle 1 "Paragraph"</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Subtitle 2 "Paragraph"
      </Typography>

      <Typography variant="body1">Body 1 "Body" Default Value</Typography>
      <Typography variant="body2">Body 2 "Body"</Typography>
    </div>
  );
};
