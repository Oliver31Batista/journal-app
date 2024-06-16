import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {
  //I can use components or variants, components for the element html and variants for the theme
  return (
    <JournalLayout>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab,
        soluta autem fugit deleniti itaque nemo tempora porro voluptatum vero
        nobis iure, illo aliquam ea a. Quidem minus laudantium doloremque.
      </Typography>

      {/* NothingSelected */}
      {/* NoteView */}
    </JournalLayout>
  );
};
