import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TranslateIcon from "@mui/icons-material/Translate";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { blue } from "@mui/material/colors";
import SupportedLangugesEnum from "../../../Commons/Enums";
import { TranslationContext } from "../../../Providers/AppProvider";
import { ButtonAppBarStyle } from "../Styleds/HeaderStyle";

import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";

export interface ILanguageDialogProps {
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => string;
}

const Language = ["Italiano", "English"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  getTranslationKey: () => string;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, getTranslationKey } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "rgb(13,83,178)",
        },
      }}
    >
      <DialogTitle sx={{ color: "#acc7fe" }}>Change Language</DialogTitle>
      <List sx={{ pt: 0, color: "#acc7fe" }}>
        {Language.map((language) => (
          <ListItem
            button
            onClick={() => handleListItemClick(language)}
            key={language}
            disabled={language === getTranslationKey()}
          >
            <ListItemIcon sx={{ color: "#acc7fe" }}>
              {language === getTranslationKey() ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={language} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function LanguageDialog(props: ILanguageDialogProps) {
  const { onChangeTranslation, getTranslationKey } = props;

  const translationState = React.useContext(TranslationContext);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(Language[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
    if (value === "Italiano") {
      onChangeTranslation(SupportedLangugesEnum.It);
    } else {
      onChangeTranslation(SupportedLangugesEnum.En);
    }
  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="Lingua"
        disableRipple
        color="inherit"
        sx={ButtonAppBarStyle}
        onClick={() => handleClickOpen()}
      >
        <TranslateIcon />
      </IconButton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        getTranslationKey={getTranslationKey}
      />
    </React.Fragment>
  );
}
